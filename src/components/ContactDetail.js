import React from 'react';
import avatar from '../images/5352678.jpg';
import { Link } from 'react-router-dom';

const ContactDetail = (props) => {
  const contact = props.item;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={avatar} alt="user"></img>
        </div>
        <div className="content">
          <div className="header">
            Ivn
          </div>
          <div className="description">
            ivan@gmail.com
          </div>
        </div>
      </div>



    </div>
  )
}

export default ContactDetail;