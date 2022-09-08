import axios from 'axios';

axios.defaults.baseURL = 'https://63189a81ece2736550cede5c.mockapi.io/contacts';
export async function fetchContacts() {
  try {
    const { data } = await axios.get('/');

    return data;
  } catch (error) {
    return error;
  }
}

export async function addContact(data) {
  try {
    const result = await axios.post('/', data);
    return result.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function removeContact(id) {
  try {
    const result = await axios.delete(`/${id}`);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
