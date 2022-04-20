import {Deck} from "../deck";
import {Graveyard} from "../graveyard";
import {useState} from "react";

export const PlayerSide = props => {

    const [deck, setDeck] = useState([]);
    const [graveYard, setGraveYard] = useState([]);

    return (
        <>
            <Deck />
            <Graveyard />
        </>
    )

}
