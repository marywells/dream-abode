import { useState, useEffect } from 'react';
import { PropertyItem } from './PropertyItem';
import { Form } from './Form';
import * as ApiService from '../api-service';

interface IProperty {
  id: string;
  name: string;
  imageURL: string;
  description: string;
  price: number;
  beds: number;
  baths: number;
  type: string;
}

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

  return (
    <div>
      <h1>Property Dashboard</h1>
      {properties.map((property) => {
        return (
          <div>
            {
              <PropertyItem
                name={property.name}
                imageURL={property.imageURL}
                description={property.description}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                type={property.type}
              />
            }
          </div>
        );
      })}

      <Form />
    </div>
  );
}

const styles = {};
