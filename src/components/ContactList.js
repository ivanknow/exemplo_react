import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  console.log(props);

  const renderList = props.contacts.map((contact) => {
    return (
      <ContactCard item={contact}></ContactCard>
    )
  })
  return (
    <div className="ui celled list"> {renderList} </div>
  );
}

export default ContactList;
