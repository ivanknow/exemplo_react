import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts,setContacts] = useState([]);

  const handleAddContact = (contact) => {
    console.log(contact)
    setContacts([...contacts,contact]);
  }
  return (
    <div className="ui container">
      <Header></Header>
      <AddContact handleAddContact={handleAddContact}></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
