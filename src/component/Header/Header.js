import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <img className='header-logo' src={logo} alt='Logo : cocktail party' />
                    <ul>
                        <li><a href='#'>Accueil</a></li>
                        <li><a href='#'>Histoire</a></li>
                        <li><a href='#'>Cocktails</a></li>
                        <li className='header-search'>
                            <img src={search} alt='search icon' />
                            <input className='header-search-input' type="text" placeholder="Chercher ..." />
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;