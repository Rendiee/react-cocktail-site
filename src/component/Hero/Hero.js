import './hero.css';
import React from 'react';
import heroimage from '../../assets/cocktail.png';
import decoration from '../../assets/hero-blob.png';

class Hero extends React.Component {
    render () {
        return (
            <section className='hero-container'>
                <img className='hero-rectangle' src={decoration} alt='rectangle decoration' />
                <div className='hero-left'>
                    <h1 className='hero-title'>Une soirée <span className='hero-yellow-text hero-draw'>innoubliable</span> !</h1>
                    <p className='hero-text'>A chaque cocktail sa soirée, avec nous vous pourrez <span className='hero-red-text'>découvrir </span>lequel est le plus adapté à la vôtre tout en donnant vie à vos goûts et envies ! 🍹</p>
                    <p className='hero-text'>Vous préférez les cocktails plutôt fruités à base de <span className='hero-red-text'>banane ou de fruits rouges</span> ? Ou alors vous avez un petit penchant pour les cocktails à base de café ? Pas de panique, nous avons pleins de <span className='hero-red-text'>recettes différentes</span> disponibles sur notre site !</p>
                    <a href='#cocktail'><button className='button-cta'>Découvrir</button></a>
                </div>
                <img className='hero-image' src={heroimage} alt='cocktail illustration'/>
            </section>
        )
    }
}

export default Hero;