import { React, useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';

import burger from '../../assets/menu-btn.png';
import close from '../../assets/close.png';

//&#9776; BURGER ICON
export default function Header () {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }

    return (
        <header>
            <nav className='navbar'>
                <img className='header-logo' src={logo} alt='logo cocktail party'/>
                <ul className={isActive ? "nav-menu mobile-menu" : "nav-menu"}>
                    <li className='nav-item'><a className='nav-link' href='#accueil'>Accueil</a></li>
                    <li className='nav-item'><a className='nav-link' href='#histoire'>Histoire</a></li>
                    <li className='nav-item'><a className='nav-link' href='#cocktail'>Cocktails</a></li>
                    <li className='nav-search nav-item'>
                        <img src={search} alt='search icon'/>
                        <input className='nav-search-input' type="text" placeholder="Chercher ..." />
                    </li>
                </ul>
                <img className='burger-menu' src={isActive ? close : burger} alt='burger menu icon' onClick={toggleClass}/>
            </nav>
        </header>
    )
}