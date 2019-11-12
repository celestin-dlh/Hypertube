import React,{ Component, useState, useEffect } from 'react';
import axios from "axios";

function Actor(props) {

    return (
        <div className="actor">
            <img src={props.img} alt={props.name + " img"}/>
            <span>{props.name}</span>
            <span>as</span>
            <span>{props.character}</span>
        </div>
    )
}

export function Cast(props) {

    let nbActors;
    const [cast, setCast] = useState({});

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/' + props.id + '/credits?api_key=63f77bcd4f045f354e004ec092d0bbdc')
            .then((res) => {
                setCast(res.data.cast);
            })}, []);

    if (cast[0]) {
        return (
            <div id="actors">
                {cast.map((actor) => {
                    console.log("Entered");
                    return (<Actor name={actor.name} img={"http://image.tmdb.org/t/p/w185" + actor.profile_path} character={actor.character}/>)
                })}
            </div>
        );
    }
    else {
        return (
            <div>No Actors in this movie ????</div>
        );
    }
}