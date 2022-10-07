import React from "react"
import './cocktailcard.css';

export default function CocktailCard (props) {

    //style={{backgroundColor: `rgb(255,${Math.floor(Math.random() * (255 - 229 + 1) + 229)}, 229)`}

    return(
        <div className="cocktail-card" key={props.key}>
            <img className="cocktail-card-img" src={props.img} alt='cocktail img' />
            <p className="cocktail-card-title">{props.title}</p>
            <div className="cocktail-card-info">
                <p className="cocktail-card-small">Sans alcool</p>
                <p>★★★☆☆</p>
            </div>
            <button className="cocktail-card-button">Découvrir</button>
        </div>
    )
}