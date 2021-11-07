import ReactDOM from 'react-dom';
import { Form } from '../components/Form';
import renderer from 'react-test-renderer';

it('renders form on the page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});

it('matches form snapshot', () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
