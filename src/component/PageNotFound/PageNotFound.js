import React from "react";
import { Link, useRouteError } from "react-router-dom";
import './pagenotfound.css';

import Header from '../../component/Header/Header';
import Footer from "../../component/Footer/Footer";

import errorimg from '../../assets/error-img.png';

export default function PageNotFound() {

    const error = useRouteError();

    return (
        <>
            <Header />
            <section className="pagenotfound">
                <div className="pagenotfound-right">
                    <img className="pagenotfound-img" src={errorimg} alt='error illustration' />
                </div>
                <div className="pagenotfound-left">
                    <h1 className="pagenotfound-title">Erreur 404</h1>
                    <p className="pagenotfound-text">Page non trouvée !</p>
                    <p>La page que vous avez demandé n'existe pas ou a été supprimé !</p>
                    <Link className="pagenotfound-button" to={'/'}>Retour a l'accueil</Link>
                    <p className="pagenotfound-debug">Debug : {error.statusText || error.message}</p>
                </div>
            </section>
            <Footer />
        </>
    )
}