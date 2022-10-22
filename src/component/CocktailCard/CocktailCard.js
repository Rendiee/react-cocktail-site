import React from "react"
import { Link } from "react-router-dom";
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
        <div className="cocktail-card">
            <img className="cocktail-card-img" src={props.img} alt='cocktail img' />
            <p className="cocktail-card-title">{props.title}</p>
            <div className="cocktail-card-info">
                <p className="cocktail-card-small">Sans alcool</p>
                <p>{generateRandomStarsNote()}</p>
            </div>
            <Link className="cocktail-card-button" to={'cocktail/' + props.id}>Découvrir</Link>
        </div>
    )
}