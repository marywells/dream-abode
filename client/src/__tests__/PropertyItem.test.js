import ReactDOM from 'react-dom';
import { PropertyItem } from '../components/PropertyItem';
import '@testing-library/jest-dom';

it('property item renders on the page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PropertyItem />, div);
});
