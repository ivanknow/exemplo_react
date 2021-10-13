import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
  //console.log(props);
  const deleteContact = (id) => { props.removeContact(id); }
  const renderList = props.contacts.map((contact) => {
    return (
      <ContactCard clickHandler={deleteContact} key={contact.id} item={contact}></ContactCard>
    )
  })
  return (
    <div className="ui fixed container">
      <h2 className="ui header">Contact List
        
      <Link to="/add">
          <button className="ui button blue right">Add</button>
        </Link>
      </h2>
      
      <div className="ui celled list"> {renderList} </div>
    </div>

  );
}

export default ContactList;
