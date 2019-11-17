import React from 'react';

export function Trailer(props) {

    const trailer = props.video;
    if (trailer && props.video.results[0]) {
        const youtube = trailer.results[0]['key'];
        return (
            <div
               style={{height: "100vh"}}
                id="trailer">
                <iframe
                    style={{position: "absolute", top: "0", left: "35", zIndex: "0"}}
                    title="youtubeTrailer"
                    width="800px"
                    height="400px"
                    src={"https://www.youtube.com/embed/" + youtube + "?wmode=opaque&controls=0&autohide=1&autoplay=1&volume=0&&mute=1"}
                    frameBorder="-1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >youtube trailer</iframe>
                <iframe
                    title="youtubeTrailer" width="800px" height="400px" src={"https://www.youtube.com/embed/" + youtube + "?wmode=opaque&autohide=1"} frameBorder="-1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >youtube trailer</iframe>
            </div>
        );
    }
    else return(<div style={{display: "none"}}>No trailer :(</div>)
}