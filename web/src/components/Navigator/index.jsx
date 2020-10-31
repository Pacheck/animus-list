import React from 'react';

import { Link } from "react-router-dom";
import logo from '../../assets/logo2.svg'
import nomeLogo from '../../assets/nome-logo2.svg'

import './index.css';

const Navigator = () => {
    return (
        <header>
           <img src={nomeLogo} alt="nome logo"/>
        </header>
    )
}

export default Navigator;