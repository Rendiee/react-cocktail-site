import './hero.css';
import React from 'react';
import cocktail from '../../assets/hero-cocktail.png';
import blob from '../../assets/hero-blob.png';
import draw from '../../assets/hero-draw.png';

class Hero extends React.Component {
    render () {
        return (
            <section>
                <div className='hero-container'>
                    <div>
                        <h1 className='hero-title'>Une soirée <span className='hero-yellow-text'>innoubliable</span> !</h1>
                        <p className='hero-text'>Faire une soirée sans cocktail c'est un peu comme <br/> marcher sur une route sans destination.</p>
                        <div>
                            <button className='hero-cta'>Découvrir</button>
                        </div>
                    </div>
                    <div className='test'>
                        <img className='hero-image' src={cocktail} alt='cocktail illustration'/>
                        {/* <img className='hero-blob-img' src={blob} alt='blob' /> */}
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;