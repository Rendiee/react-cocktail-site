import React from "react"
import './cocktailcard.css';

export default function CocktailCard (props) {

    const generateRandomStarsNote = () => {
        //★★★☆☆
        const random = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        let stars = "";
        let empty  = 5 - random;

        for(let i = 0; i < random; i++) {
            stars = stars + '★';
        }

        if(empty > 0) {
            for(let i = 0; i < empty; i++) {
                stars = stars + '☆';
            }
        }
        
        return stars;
    }

    return(
        <div className="cocktail-card" key={props.key} style={{
            animationDuration: '0.4s',
            animationDelay : `${props.animationDelay}`,
            animationIterationCount: 1,
            animationName: 'card-animation',
            animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            animationFillMode: 'both'
        }}>
            <img className="cocktail-card-img" src={props.img} alt='cocktail img' />
            <p className="cocktail-card-title">{props.title}</p>
            <div className="cocktail-card-info">
                <p className="cocktail-card-small">Sans alcool</p>
                <p>{generateRandomStarsNote()}</p>
            </div>
            <button className="cocktail-card-button">Découvrir</button>
        </div>
    )
}