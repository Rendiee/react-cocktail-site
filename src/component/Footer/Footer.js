import { React } from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import github from '../../assets/github.png';

//&#9776; BURGER ICON
export default function Footer () {

    return (
        <footer>
            <div className='footer-upper'>
                <img className='footer-logo' src={logo} alt='logo of the website' />
                <p className='footer-text'>Site internet crée dans le but de s’entraîner avec ReactJS pour la syntaxe en utilisant une API de cocktail.</p>
                <ul className='footer-menu'>
                    <li><a href='#accueil'>Accueil</a></li>
                    <li><a href='#histoire'>Histoire</a></li>
                    <li><a href='#cocktail'>Cocktails</a></li>
                </ul>
            </div>
            <hr className='footer-bar'/>
            <a className='footer-img' href='https://github.com/Rendiee/react-cocktail-site'><img className='footer-github' src={github} alt='github logo'/></a>
        </footer>
    )
}