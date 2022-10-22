import { React, useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';

import burger from '../../assets/menu-btn.png';
import close from '../../assets/close.png';
import { HashLink } from 'react-router-hash-link';

//&#9776; BURGER ICON
export default function Header () {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }

    return (
        <header id='accueil top'>
            <nav className='navbar'>
                <img className='header-logo' src={logo} alt='logo cocktail party'/>
                <ul className={isActive ? "nav-menu mobile-menu" : "nav-menu"}>
                    <HashLink className='nav-item' to={"/#accueil"}>Accueil</HashLink>
                    <HashLink className='nav-item' to={"/#histoire"}>Histoire</HashLink>
                    <HashLink className='nav-item' to={"/#cocktail"}>Cocktails</HashLink>
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