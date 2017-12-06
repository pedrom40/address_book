import React from 'react';
import './contact.css';

export default function Contact(props) {
    return (
        <div className="contact">
            <div className="contact-photo"><img src={props.photo} /></div>
            <div className="contact-name">{props.name}</div>
            <div className="contact-address">{props.address}</div>
        </div>
    );
}
