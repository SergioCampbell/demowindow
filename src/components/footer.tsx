import '@styles/App.css';
import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer({messageOne, fLink, messageTwo}: any) {
    return(
        <footer className='footer__container'>
            <p>{messageOne} <Link to={fLink.trim().toLowerCase().split(" ").join("")}>{fLink}</Link> {messageTwo}</p>
        </footer>
    )
    
}