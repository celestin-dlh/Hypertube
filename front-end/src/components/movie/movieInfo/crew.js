import React from 'react';

function People(props) {
    return (
        <div className="actor">
                <div style={{ backgroundImage: `url(${props.img})`}}/>
                <span>{props.name}</span>
            <span style={{color: "darkgrey"}}>{props.job}</span>
        </div>
    )
}

const Crew = (props) => {
    let cast = props.cast;
    let i = 0;
    let casting = cast['crew'];
    let imgUrl = null;
    
    return (
        <div id="actors">
            {casting.map((actor) => {
                if ((actor.department === 'Directing' && actor.job === 'Director') ||
                    (actor.department === 'Writing' && actor.job === 'Screenplay')) {
                    if (i++ < 10) {
                        actor.profile_path === null ? imgUrl = null : imgUrl = process.env.REACT_APP_BASE_URL + "/w185/" + actor.profile_path;
                        return (
                            <People
                                id={actor.id} key={actor.department + actor.id}
                                name={actor.name}
                                img={imgUrl}
                                job={actor.job}
                            />
                        )
                    }
                    else
                        return null;
                }
                else
                    return null;
            })}
        </div>
    );
};

export default Crew;