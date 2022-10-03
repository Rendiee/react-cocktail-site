import React from "react"
import './cocktailcard.css';

class CocktailCard extends React.Component {
    render() {
        return(
            <div className="cocktail-card" key={this.props.uniqueId}>
                <img src={this.props.img} alt='cocktail img' />
                <p className="cocktail-card-title">{this.props.title}</p>
            </div>
        )
    }
}

export default CocktailCard;