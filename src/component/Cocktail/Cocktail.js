import React from "react";
import { useState, useEffect } from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import './cocktail.css';
 
export default function Cocktail () {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
            if(response.ok) {
                console.log(response);
                const data = await response.json();
                console.log(data);
                setItems(data);
            }
        }catch(error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className="cocktail-list">
            {items.drinks.map(item => (
                <CocktailCard
                    uniqueId={item.idDrink}
                    title={item.strDrink}
                    img={item.strDrinkThumb+'/preview'}
                />
            ))}
        </div>
    )
}
