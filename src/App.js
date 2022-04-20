import {useState} from "react";

import './App.css';
import {CardRow} from './components/cards/card-row';
import {EnemySide} from "./components/decks/deck-enemy-side/enemySide";
import {PlayerSide} from "./components/decks/deck-player-side/playerSide";
import {PlayerSection} from "./components/player-info-sections/player-section";
import {PlayerHand} from "./components/cards/hand/player-hand";
import {WeatherCardSpots} from "./components/player-info-sections/weather-card-spots";

function App() {

    const [playerBoard, setPlayerBoard] = useState(Array.from(Array(3), () => new Array(10).fill(0)));
    const [enemyBoard, setEnemyBoard] = useState(Array.from(Array(3), () => new Array(10).fill(0)));

    return (
    <div className="App">

        <section className="playerInfoSection">
            <PlayerSection />
            <WeatherCardSpots />
            <PlayerSection />
        </section>

        <section className="boardSection">
            <div className="enemySide">
                {enemyBoard.map((row, idx) => {
                    return <CardRow
                            key={`${idx}_${row.toString()}`}
                            row={row}
                            parentIdx={idx}
                        />
                })}
            </div>

            <hr />

                <div className="playerSide">
                {playerBoard.map((row, idx) => {
                    return <CardRow
                            key={`${idx}_${row.toString()}`}
                            row={row}
                            parentIdx={idx}
                        />
                })}
                <PlayerHand />
            </div>
        </section>

        <section className="deckSection">
            <EnemySide />
            <PlayerSide />
        </section>

    </div>
    );
}

export default App;
