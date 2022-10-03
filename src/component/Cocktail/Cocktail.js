import React from "react";
import { useState, useEffect } from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import './cocktail.css';
 
export default function Cocktail () {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        //const response = await fetch("www.thecocktaildb.com/api/json/v1/1/random.php");
        //const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
        setItems(response);
        const data = response.json(response);
        console.log(data);
        //setItems(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className="cocktail-list">
            {items.map(item => (
                <CocktailCard
                    title={item.strDrink}
                    img={item.strDrinkThumb}
                />
            ))}
        </div>
    )
}
