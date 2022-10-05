import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
//https://levelup.gitconnected.com/how-to-create-a-responsive-navigation-bar-with-and-without-javascript-81f6d0671c6d
class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className='navlist'>
                    <a href='#'><img className='header-logo' src={logo} alt='Logo : cocktail party' /></a>
                    <ul className='nav-bar'>
                        <li><a href='#'>Accueil</a></li>
                        <li><a href='#'>Histoire</a></li>
                        <li><a href='#'>Cocktails</a></li>
                        <li className='header-search'>
                            <img src={search} alt='search icon' />
                            <input className='header-search-input' type="text" placeholder="Chercher ..." />
                        </li>
                        <li><a className='menu-icon'>&#9776;</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;