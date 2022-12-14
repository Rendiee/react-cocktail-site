import { React, useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import './cocktaildetail.css';
import { Link } from 'react-router-dom';

export default function CocktailDetail () {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ingredient, setIngredient] = useState([]);
    const [measure, setMeasure] = useState([]);

    const cocktail = useParams();
    const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktail.id;

    const fetchData = async () => {
        await axios.get(baseUrl)
        .then(response => {
            setItems(response.data.drinks);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    };

    useEffect(() => {

        fetchData();

        const setCocktailIngredient = () => {
            setIngredient([]);
            for(let i = 1; i < 15; i++) {
                if(items[0]["strIngredient"+i] !== null){
                    setIngredient(arr => [...arr, items[0]["strIngredient"+i]]);
                }else{
                    break;
                }
            }
        }

        const setCocktailMeasure = () => {
            setMeasure([]);
            for(let i = 1; i < 15; i++) {
                if(items[0]["strMeasure"+i] !== null){
                    setMeasure(arr => [...arr, items[0]["strMeasure"+i]]);
                }else{
                    break;
                }
            }
        }

        if(!isLoading) {
            setCocktailIngredient();
            setCocktailMeasure();
        }
    }, [isLoading])

    const cocktailDetailSection = () => {
        return (
            <section className='cocktaildetail'>
                <div className='cocktaildetail-container'>
                    <div className='cocktaildetail-left'>
                        <img className='cocktaildetail-img' src={items[0].strDrinkThumb}  alt='cocktail illustration'/>
                    </div>
                    <div className='cocktaildetail-right'>
                        <h1 className='cocktaildetail-title'>{items[0].strDrink}</h1>
                        <p className='cocktaildetail-undertitle'>Ingr??dients :</p>
                        <ul className='cocktaildetail-ingredient'>
                            {ingredient.map((item, index) => (
                                <li><span className='cocktaildetail-measure'>{measure[index]}</span> &#62; {item}</li>
                            ))}
                        </ul>
                        <hr className='cocktaildetail-line'/>
                        <p className='cocktaildetail-undertitle'>Instruction :</p>
                        <p>{items[0].strInstructions}</p>
                    </div>
                </div>
                <div className='backhome'>
                    <Link className="button-back" to={'/'}>Retour a l'accueil</Link>
                </div>
            </section>
        )
    }

    return (
        <>
            <Header/>
            {isLoading ? (
                <Loading />
            ) : (
                cocktailDetailSection()
                )}
            <Footer />
        </>
    )
}