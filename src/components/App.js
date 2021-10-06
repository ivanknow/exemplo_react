import React, {useEffect, useState} from 'react';
import {uuid} from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts,setContacts] = useState([]);

  const handleAddContact = (contact) => {
    console.log(contact)
    setContacts([...contacts,{id:uuid(),...contact}]);
  }

  const handleRemoveContact = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=>{
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedContacts)setContacts(storedContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts]);
  return (
    <div className="ui container">
      <Header></Header>
      <AddContact handleAddContact={handleAddContact}></AddContact>
      <ContactList contacts={contacts} removeContact={handleRemoveContact}></ContactList>
    </div>
  );
}

export default App;
