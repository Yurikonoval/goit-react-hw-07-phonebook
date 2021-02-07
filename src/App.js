import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <p className="title statistics">Statistics</p>
      <Filter />
      <ContactList />
    </div>
  );
}
export default App;
