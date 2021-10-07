import React, { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import {Router as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import history from './history';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  const handleRemoveContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);
  return (
    <div className="ui container">
      <Router history={history}> 
        <Header></Header>
        <Switch>
          <Route path="/add" >
            <AddContact  handleAddContact={handleAddContact}></AddContact>
          </Route>
          <Route path="/" exact >
            <ContactList  contacts={contacts} removeContact={handleRemoveContact}></ContactList>
          </Route>

        </Switch>
        {/*<AddContact handleAddContact={handleAddContact}></AddContact>
      <ContactList contacts={contacts} removeContact={handleRemoveContact}></ContactList>*/}

      </Router>
    </div>
  );
}

export default App;
