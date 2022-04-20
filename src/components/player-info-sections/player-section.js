import classes from './player-section.module.css';

export const PlayerSection = props => {

    return (
        <section className={classes.playerSection}>
            <div className={classes.leader}>
                <img className={classes.leaderImg} src="https://static01.nyt.com/images/2020/04/27/us/politics/00-trump-cand-page/00-trump-cand-page-superJumbo.jpg" alt="Leader Pic"/>
            </div>
            <div className={classes.leaderInfo}>

            </div>
        </section>
    )

}
