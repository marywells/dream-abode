import ReactDOM from 'react-dom';
import { Form } from '../components/Form';

it('form renders on the page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});
