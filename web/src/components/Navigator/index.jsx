import React from 'react';

import { Link } from "react-router-dom";

import nomeLogo from '../../assets/nome-logo2.svg'

import './index.css';

const Navigator = () => {
    return (
        <header className="Nav">
           <Link to="/">
                <img src={nomeLogo} alt="nome logo"/>
           </Link>
           <Link to="teste">
               <h2>Testando</h2>
            </Link>
        </header>
    )
}

export default Navigator;