import { useState } from 'react';
import { IProperty } from '../types';

export function Form({ addNewProperty }: any) {
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
      <h1>Add a Property Form</h1>
      <form onSubmit={handleSubmit}>
        <div>Name</div>
        <input
          type='text'
          placeholder='Insert first line of address'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>Image Link</div>
        <input
          type='text'
          placeholder='Insert image link'
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <div>Description</div>
        <input
          type='text'
          placeholder='Insert description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>Price</div>
        <input
          type='number'
          placeholder='Set price'
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
        />
        <div>Beds</div>
        <input
          type='number'
          placeholder='Set bedrooms'
          value={beds}
          onChange={(e) => setBeds(e.target.valueAsNumber)}
        />
        <div>Baths</div>
        <input
          type='number'
          placeholder='Set bathrooms'
          value={baths}
          onChange={(e) => setBaths(e.target.valueAsNumber)}
        />
        <div>Type</div>
        <input
          type='text'
          placeholder='Set type of property'
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input type='submit' value='Create' />
      </form>
    </div>
  );
}

const styles = {
  form: 'w-80 fixed top-10 right-0  bg-blue-100 border p-2 m-2',
};
