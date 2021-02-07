import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => axios.get('/contacts');

export const addContact = contact => axios.post('/contacts', contact);

export const deleteContact = contactId =>
  axios.delete(`/contacts/${contactId}`);
