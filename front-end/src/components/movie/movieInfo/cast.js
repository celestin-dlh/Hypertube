import React from 'react';

function Actor(props) {
    const lang = (localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en');

    return (
        <div className="actor">
            <a href={process.env.REACT_APP_URL_FRONT + "/actor/" + props.id + '/' + lang}>
                <div style={{ backgroundImage: `url(${props.img})`}}/>
                <span>{props.name}</span>

            </a>

            <span style={{color: "darkgrey"}}>{props.character}</span>
        </div>
    )
}

const Cast = (props) => {
    let cast = props.cast;
    let i = 0;
    let imgUrl = null;

    let casting = cast['cast'];
    return (
        <div id="actors">
            {casting.map((actor) => {
                if (i++ < 10) {
                    actor.profile_path === null ? imgUrl = null : imgUrl = process.env.REACT_APP_BASE_URL + "/w185/" + actor.profile_path;
                    return (
                        <Actor 
                            id={actor.id} key={'a' + actor.id}
                            name={actor.name} 
                            img={imgUrl}
                            character={actor.character} 
                        />
                    )
                }
                else
                    return null;
            })}
        </div>
    );
};

export default Cast;