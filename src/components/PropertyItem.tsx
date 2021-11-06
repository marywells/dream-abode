import { IProperty } from '../types';

export function PropertyItem(props: IProperty) {
  const { name, type, description, price, beds, baths } = props;
  return (
    <div className={styles.propertyContainer}>
      <p data-testid='propertyItem'>{name}</p>
      <p>{type}</p>
      <p>{description}</p>
      <p>£{price}</p>
      <p>{beds} bedrooms</p>
      <p>{baths} bathrooms</p>
    </div>
  );
}

const styles = {
  propertyContainer: 'w-80 border-2 rounded-lg text-xs shadow m-2 p-1',
};
