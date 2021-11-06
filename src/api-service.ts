const serverURL = 'http://localhost:4000/properties';

export function getAll() {
  return fetch(`${serverURL}`)
    .then((response) => response.json())
    .then((data) => data);
}
