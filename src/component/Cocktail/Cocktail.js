import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import './cocktail.css';
 
export default function Cocktail () {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

    const fetchData = async () => {
        axios.get(baseUrl)
        .then(response => {
            setItems(response.data.drinks);
        })
        .catch(error => {
            setError(error);
        })
    }

    const imageFirstLoad = 5;
    const [cocktailShow, setCocktailShow] = useState(imageFirstLoad);

    const handleMoreCocktail = () => {
        if(cocktailShow + imageFirstLoad >= items.length) {
            setCocktailShow(58);
        }else{
            setCocktailShow(cocktailShow => cocktailShow + imageFirstLoad);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const getCocktailList = () => {
        return (
            <div className="cocktail-list">
                {items.slice(0, cocktailShow).map(item => (
                    <CocktailCard
                        animationDelay={'0.05s'}
                        title={item.strDrink}
                        img={item.strDrinkThumb+'/preview'}
                        id={item.idDrink}
                    />
                ))}
            </div>
        )
    }

    const getErrorView = () => {
        return (
            <div className="error-section">
                <p className="error-text">Une erreur s'est produite !<br/>{error}</p>
                <button className="error-button" onClick={() => fetchData()}>Recharger</button>
            </div>
        )
    }

    const buttonLoadMore = () => {
        return (
            <div className="cocktail-load">
                <button className="cocktail-more" onClick={handleMoreCocktail}>Charger plus</button>
            </div>
        )
    }  

    return(
        <section className="cocktail" id="cocktail">
            <hr />
            <h1 className="cocktail-title">Liste de cocktails</h1>
            {error ? getErrorView() : getCocktailList()}
            <small className="cocktail-load-text">- {cocktailShow} cocktails sur {items.length} -</small>
            {cocktailShow < items.length ? buttonLoadMore() : null}
        </section>
    )
}
