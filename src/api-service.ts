import { IProperty } from './types';

const serverURL = 'http://localhost:4000/properties';

export function getAll() {
  return fetch(`${serverURL}`)
    .then((response) => response.json())
    .then((data) => data);
}

export function postOne(property: IProperty) {
  return fetch(`${serverURL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      property,
    }),
  });
}
