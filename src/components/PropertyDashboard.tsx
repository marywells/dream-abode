import { useState, useEffect } from 'react';
import { PropertyItem } from './PropertyItem';
import { Form } from './Form';
import * as ApiService from '../api-service';
import { IProperty } from '../types';

export function PropertyDashboard() {
  const [properties, setProperties] = useState<IProperty[]>([]);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    await ApiService.getAll().then((data) => {
      setProperties(data);
    });
  }

  function addNewProperty(property: IProperty) {
    ApiService.postOne(property).then(() => loadProperties());
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.propertyList}>
        <h1 className={styles.dashboardHeader}>
          “Perhaps home is not a place but simply an irrevocable condition.”
          James Baldwin
        </h1>
        {properties.map((property) => {
          return (
            <div key={property._id}>
              {
                <div className={styles.propertyItem}>
                  <PropertyItem
                    _id={property._id}
                    name={property.name}
                    imageURL={property.imageURL}
                    description={property.description}
                    price={property.price}
                    beds={property.beds}
                    baths={property.baths}
                    type={property.type}
                  />
                </div>
              }
            </div>
          );
        })}
      </div>

      <Form addNewProperty={addNewProperty} />
    </div>
  );
}

const styles = {
  dashboardContainer: 'flex-wrap md:relative p-6 pt-20',
  dashboardHeader: 'font-bold text-gray-900 pt-2',
  propertyList: 'md:w-3/5 flex-col',
  propertyItem: '',
};
