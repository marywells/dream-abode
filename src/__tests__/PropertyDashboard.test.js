import ReactDOM from 'react-dom';
import { PropertyDashboard } from '../components/PropertyDashboard';
import '@testing-library/jest-dom';

it('property dashboard renders on the page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PropertyDashboard />, div);
});
