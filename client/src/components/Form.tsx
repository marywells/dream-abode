import { useState } from 'react';
import { IProperty } from '../types';

interface IProps {
  addNewProperty: (property: IProperty) => void;
}
export function Form({ addNewProperty }: IProps) {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [type, setType] = useState('');

  function createProperty(newProperty: IProperty) {
    addNewProperty(newProperty);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const property = {
      name,
      imageURL,
      description,
      price,
      beds,
      baths,
      type,
    };

    createProperty(property);

    setName('');
    setImageURL('');
    setDescription('');
    setPrice(0);
    setBeds(0);
    setBaths(0);
    setType('');
  }

  return (
    <div className={styles.form}>
      <h1 className={styles.formHeader}>Add a Property</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputLabel}>Name</div>
        <input
          className={styles.input}
          type='text'
          placeholder='First line of address'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={styles.inputLabel}>Image</div>
        <input
          className={styles.input}
          type='text'
          placeholder='Image URL'
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <div className={styles.inputLabel}>Description</div>
        <input
          className={styles.input}
          type='text'
          placeholder='Short description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className={styles.inputLabel}>Price</div>
        <input
          className={styles.input}
          type='number'
          placeholder='Set price'
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
        />
        <div className={styles.inputLabel}>Bedrooms</div>
        <input
          className={styles.input}
          type='number'
          placeholder='Set bedrooms'
          value={beds}
          onChange={(e) => setBeds(e.target.valueAsNumber)}
        />
        <div className={styles.inputLabel}>Bathrooms</div>
        <input
          className={styles.input}
          type='number'
          placeholder='Set bathrooms'
          value={baths}
          onChange={(e) => setBaths(e.target.valueAsNumber)}
        />
        <div className={styles.inputLabel}>Property Type</div>
        <select
          className={styles.input}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value='Terraced'>Terraced</option>
          <option value='Flat'>Flat</option>
          <option value='Detached'>Detached</option>
          <option value='Detached'>Semi-Detached</option>
          <option value='Castle'>Castle</option>
        </select>
        <br />
        <input className={styles.button} type='submit' value='Create' />
      </form>
    </div>
  );
}

const styles = {
  form: 'w-72 md:fixed md:top-20 md:right-2 bg-gray-800 border p-4 m-2 rounded-lg',
  formHeader: 'text-white text-xl font-bold ',
  inputLabel: 'text-white text-xs pt-2',
  input: 'rounded text-sm w-full',
  button:
    'bg-transparent text-white font-semibold hover:text-white border mt-2 py-1 px-3 rounded-full',
};
