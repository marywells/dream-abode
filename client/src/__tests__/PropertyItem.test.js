import ReactDOM from 'react-dom';
import { PropertyItem } from '../components/PropertyItem';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

const mock = {
  name: '1 Test Street',
  description: 'A lovely street',
  imageURL: 'www.test.com',
  price: '200000',
  beds: 4,
  baths: 2,
  type: 'Flat',
};

afterEach(cleanup);
it('renders property item on the page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PropertyItem />, div);
});

it('renders property item data', () => {
  const { getByTestId } = render(
    <PropertyItem name={mock.name} price={mock.price} beds={mock.beds} />
  );
  expect(getByTestId('propertyItemName')).toHaveTextContent('1 Test Street');
  expect(getByTestId('propertyItemPrice')).toHaveTextContent('£200000');
  expect(getByTestId('propertyItemBeds')).toHaveTextContent('4 bedrooms');
});

it('matches property item snapshot', () => {
  const tree = renderer
    .create(
      <PropertyItem
        name={mock.name}
        description={mock.description}
        imageURL={mock.imageURL}
        price={mock.price}
        beds={mock.beds}
        baths={mock.baths}
        type={mock.type}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
