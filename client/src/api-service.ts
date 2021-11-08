import { IProperty } from './types';

const serverURL = 'http://localhost:4000/properties';

export function getAll() {
  return fetch(`${serverURL}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch(function () {
      console.log('error connecting');
    });
}

export function postOne(property: IProperty) {
  return fetch(`${serverURL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      property,
    }),
  }).catch(function () {
    console.log('error connecting');
  });
}

//TODO 'update property' function to connect to server
