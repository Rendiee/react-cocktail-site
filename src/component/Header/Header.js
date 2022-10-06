import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
//https://levelup.gitconnected.com/how-to-create-a-responsive-navigation-bar-with-and-without-javascript-81f6d0671c6d
class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className='navbar'>
                    <a href='#'><img className='header-logo' src={logo} alt='Logo : cocktail party' /></a>
                    <ul className='nav-menu'>
                        <li className='nav-item'><a className='nav-link' href='#'>Accueil</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>Histoire</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>Cocktails</a></li>
                        <li className='nav-search nav-item'>
                            <img src={search} alt='search icon'/>
                            <input className='nav-search-input' type="text" placeholder="Chercher ..." />
                        </li>
                    </ul>
                    <div className='hamburger'>
                        <input className="side-menu" type="checkbox" id="side-menu"/>
                        <label htmlFor='side-menu'>&#9776;</label>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;