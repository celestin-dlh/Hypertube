import React from 'react';

function Actor(props) {
    return (
        <div className="actor">
            <a href={"http://localhost:3000/actor/" + props.id}><img src={props.img} alt={props.name + " img"}/></a>
                <a href=""><span>{props.name}</span></a>
            <span>as</span>
            <span>{props.character}</span>
        </div>
    )
}

export function Cast(props) {

    let cast = props.cast;
    let i = 0;

        if (cast) {
            console.log(cast);
            let casting = cast['cast'];
            return (
                <div id="actors">
                    {casting.map((actor) => {
                        if (i++ < 10) {
                            return (
                                <Actor name={actor.name} img={"http://image.tmdb.org/t/p/w185" + actor.profile_path}
                                           character={actor.character} id={actor.id}/>)
                        }
                    })}
                </div>
            );
        }
        else {
            return (<div>Loading</div>)
        }
}