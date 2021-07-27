import React from 'react';
import './Ticket.scss'
import logo from '../../access/img/logoS7.svg';

const HeaderTicket = () => {
    return (
        <div className='ticket__header'>
            <p className='ticket__price'>123</p>
            <div className='ticket__logo'>
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}

export default HeaderTicket;
