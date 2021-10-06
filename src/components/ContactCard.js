import React from 'react';
import avatar from '../images/5352678.jpg';

const ContactCard = (props) => {
    const contact = props.item;
return (
    <div className="item">
        <img className="ui avatar image" src={avatar} alt="user image"></img>
        <div className="content">
          <div className="header">
            {contact.name}
          </div>
          <div className="">
            {contact.email}
          </div>
          <i  className="trash alternate outline icon" style={{color:"red",marginTop:"7px" }}></i>
        </div>

      </div>
)
}

export default ContactCard;