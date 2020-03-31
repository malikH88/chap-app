import React from 'react';
import './Contact.css';

const name = "Katrina Campbell";
const avatar = 'https://randomuser.me/api/portraits/women/19.jpg';
const online = true;

const Contact = () => (
  <div className="Contact">
    <img src={avatar} className="avatar" alt='Malik' />
    <div className="status">
      <h4 className="status-text">{name}</h4>
      <div className="status">
        <div className={online ? "status-online" : "status-offline"} />
        <p className="status-text">{online ? "online" : "offline"}</p>
      </div>
    </div>
  </div>
);

export default Contact;