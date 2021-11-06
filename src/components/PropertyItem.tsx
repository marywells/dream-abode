import { IProperty } from '../types';

export function PropertyItem(props: IProperty) {
  return (
    <div className={styles.propertyContainer}>
      <p>{props.name}</p>
      <p>{props.type}</p>
      <p>{props.description}</p>
      <p>£{props.price}</p>
      <p>{props.beds} bedrooms</p>
      <p>{props.baths} bathrooms</p>
    </div>
  );
}

const styles = {
  propertyContainer: 'border-2 rounded-lg text-xs shadow m-2 p-1',
};
