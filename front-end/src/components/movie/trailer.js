import React from 'react';

export function Trailer(props) {

    const trailer = props.video;

    if (trailer) {
        const youtube = trailer.results[0]['key'];
        return (
            <div id="trailer">
            <iframe width="800px" height="400px" src={"https://www.youtube.com/embed/" + youtube} frameBorder="-1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        );
    }
    else return(<div>No trailer :(</div>)

}