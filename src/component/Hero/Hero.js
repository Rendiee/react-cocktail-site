import './hero.css';
import React from 'react';
import heroimage from '../../assets/hero-image.png';
import decoration from '../../assets/decoration.png';
import draw from '../../assets/hero-draw.png';

class Hero extends React.Component {
    render () {
        return (
            <section className='hero-container'>
                <img className='hero-rectangle' src={decoration} alt='rectangle decoration' />
                <div className='hero-left'>
                    <h1 className='hero-title'>Une soirée <span className='hero-yellow-text hero-draw'>innoubliable</span> !</h1>
                    <p className='hero-text'>A chaque cocktail sa soirée, avec nous vous pourrez <span className='hero-red-text'>découvrir</span><br/>lequel est le plus adapté à la vôtre tout en donnant vie à vos<br/>goûts et envies !<br/><br/>A chaque <span className='hero-red-text'>cocktail</span> sa soirée 🍹</p>
                    <button className='hero-cta'>Découvrir</button>
                </div>
                <div>
                    <img className='hero-image' src={heroimage} alt='cocktail illustration'/>
                </div>
            </section>
        )
    }
}

export default Hero;