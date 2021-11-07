import ReactDOM from 'react-dom';
import { PropertyDashboard } from '../components/PropertyDashboard';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

it('renders property dashboard on the page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PropertyDashboard />, div);
});

it('matches property dashboard snapshot', () => {
  const tree = renderer.create(<PropertyDashboard />).toJSON();
  expect(tree).toMatchSnapshot();
});
