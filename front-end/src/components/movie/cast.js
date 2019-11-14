import React from 'react';

function Actor(props) {
    return (
        <div className="actor">
            <a href={"http://localhost:3000/actor/" + props.id}><div style={{ backgroundImage: `url(${props.img})`}}/></a>
                <a href={"http://localhost:3000/actor/" + props.id}><span>{props.name}</span></a>
            <span style={{color: "darkgrey"}}>{props.character}</span>
        </div>
    )
}

export function Cast(props) {

    let cast = props.cast;
    let i = 0;

        if (cast) {
            let casting = cast['cast'];
            return (
                <div id="actors">
                    {casting.map((actor) => {
                        if (i++ < 10) {
                            return (
                                <Actor name={actor.name} img={"http://image.tmdb.org/t/p/w185" + actor.profile_path}
                                           character={actor.character} id={actor.id} key={'a' + actor.id}/>)
                        }
                        else {
                            return (<span key={i++}></span>)
                        }
                    })}
                </div>
            );
        }
        else {
            return (<div>Loading</div>)
        }
}