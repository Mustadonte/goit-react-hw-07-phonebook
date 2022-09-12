import axios from 'axios';

axios.defaults.baseURL = 'https://63189a81ece2736550cede5c.mockapi.io/contacts';
export async function fetchContacts() {
  const { data } = await axios.get('/');
  return data;
}

export async function addContact(data) {
  const result = await axios.post('/', data);
  return result.data;
}

export async function removeContact(id) {
  const result = await axios.delete(`/${id}`);
  return result;
}
