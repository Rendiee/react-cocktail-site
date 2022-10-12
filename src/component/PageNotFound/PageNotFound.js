import React from "react";
import { useRouteError } from "react-router-dom";
import './pagenotfound.css';

export default function PageNotFound() {

    const error = useRouteError();

    return (
        <section className="pagenotfound">
            <h1>Oooops</h1>
            <p>Une erreur est apparue furtivement !</p>
            <p>{error.statusText || error.message}</p>
        </section>
    )
}