import { IProperty } from '../types';

export function PropertyItem(props: IProperty) {
  const { name, type, description, imageURL, price, beds, baths } = props;
  return (
    <div className={styles.propertyContainer}>
      <div data-testid='propertyItemName' className={styles.nameTile}>
        <p className={styles.name}>{name}</p>
      </div>

      <div className={styles.propertyDetails}>
        <div data-testid='propertyItemPrice' className={styles.price}>
          £{price?.toLocaleString('en-US')}
        </div>
        <div className={styles.type}>{type}</div>
        <div data-testid='propertyItemBeds'>{beds} bedrooms</div>
        <div>{baths} bathrooms</div>
        <br />
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageURL} alt={name} />
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.editDelete}>
        <button>✏️</button>
        <button>❌</button>
      </div>
    </div>
  );
}

const styles = {
  propertyContainer:
    'flex-wrap relative w-full border-2 rounded-lg shadow m-6 ml-2 text-xs flex',
  nameTile: 'flex bg-gray-900 rounded-lg items-center text-center',
  name: 'w-40 text-lg p-2 text-white ',
  imageContainer: 'w-40',
  image: 'h-28 rounded-lg',
  propertyDetails: 'w-24 pl-4 pt-2 mr-2',
  price: 'text-lg font-bold',
  type: 'font-semibold',
  description: 'hidden md:block w-72 p-2',
  editDelete: 'absolute bottom-2 right-2',
};
