import React from 'react';
import avatar from '../images/5352678.jpg';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const contact = props.item;
    //console.log(props);
return (
    <div className="item">
        <img className="ui avatar image" src={avatar} alt="user"></img>
        <div className="content">
        
        <Link
          to={{ pathname: `/contact/${contact.id}`, state: { contact: contact } }}
        >
          <div className="header">
            {contact.name}
          </div>
          <div className="">
            {contact.email}
          </div>
          </Link>
          <i onClick={()=> props.clickHandler(contact.id)} className="trash alternate outline icon" style={{color:"red",marginTop:"7px" }}></i>
        </div>

      </div>
)
}

export default ContactCard;