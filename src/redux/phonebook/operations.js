import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await API.fetchContacts();
    return data;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await API.addContact(contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await API.deleteContact(contactId);
    return contactId;
  },
);
