import React from "react";
import './history.css';
import history from '../../assets/history.png';

class History extends React.Component {
    render() {
        return (
            <section className="history">
                <img className="history-image" src={history} alt='history of cocktail' />
                <div>
                    <h1>Une boisse pleine <span>d'histoire</span> !</h1>
                    <p>
                        C’est en 1862 que le tout premier livre sur le métier de barman,<br/>
                        “<span className="history-bold">The Bartender’s Guide</span>” de Jerry Thomas est publié.<br/>
                        Thomas, plus connu sous le nom de “<span className="history-bold">The Professor</span>”, est souvent<br/>
                        appelé le parrain de l’industrie américaine du barman !
                    </p>
                    <p>
                        Son livre contenait certaines des premières recettes de cocktails<br/>
                        faits maison au bar. Les années 1800 ont été un <span className="history-bold">âge d’or</span> pour les<br/>
                        cocktails aux États-Unis. La profession de barman était l’une des<br/>
                        plus rémunératrices.
                    </p>
                </div>
            </section>
        )
    }
}

export default History;