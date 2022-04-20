import {useState} from "react";

import classes from './card-row.module.css';

export const CardRow = props => {

    const [pointValue, setPointValue] = useState(0);

    console.log(props.row);

    return (
        <div className={classes.gameRow}>
            <h2 className={classes.pointValue}>{pointValue}</h2>
            <section className={classes.cardRow}>
                {props.row.map((spot, spotIdx) => {
                    return <p key={`${props.parentIdx}_${spotIdx}`}>{spotIdx}</p>
                })}
            </section>
        </div>
    )
}
