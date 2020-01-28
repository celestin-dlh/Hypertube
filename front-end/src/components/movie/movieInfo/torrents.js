import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';

/* Services */
import { getTorrents } from '../../services/requestManager';


function Torrent(props) {
    if (props.torrent.quality === "720p" || props.torrent.quality === "1080p") {
        return (
            <div className="torrent" style={{color: "white"}}>
                <a href={process.env.REACT_APP_URL_FRONT + '/streaming/' + props.imdb_id + '/' + props.torrent.quality}>
                    <span>Quality : {props.torrent.quality} </span>
                    <span>Seeds : {props.torrent.seeds} </span>
                    <span>Size : {props.torrent.size} </span>
                </a>
            </div>
        )
    }
    return null;
}

const Torrents = (props) => {
    const [loading, setLoading] = useState(1);
    const [torrents, setTorrents] = useState(null);


    useEffect(() => {
        if (!props.imdb_id){
            setLoading(0)
        }
        else {
            getTorrents(props.imdb_id)
                .then((res) => {
                    if (res.status === 200) {
                        setTorrents(res.data);
                    }
                    setLoading(0);
                })
                .catch((err) => {
                    setLoading(0);
                })
        }
    }, [props.imdb_id]);

    if (loading)
        return (
            <div style={{height: "50vh"}}>
                <Spinner style={{display: "block", margin: "auto"}} animation="border" variant="light" />
            </div>
        );
    if (torrents === null)
        return (<div>No torrents on YTS :(</div>)
    else {
        return (
            <section id="torrents" style={{color: "white"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <p>Torrents :</p>
                    {torrents.map(torrent => {
                        return (
                            <Torrent torrent={torrent} key={torrent.hash} imdb_id={props.imdb_id}/>
                        )
                    })}
                </div>
            </section>
        )        
    }
};

export default Torrents;