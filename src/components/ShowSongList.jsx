import React from 'react';
import '../styles/ShowSongList.css';

export default class ShowSongList extends React.Component {

    render() {
        var interpret = this.props.interpret;
        var album = this.props.album;

        return (
            <div className="wrapper">
                <div className="album">
                    <img id="coverimg" src={album.cover} />
                    <div className="interpret">{interpret}</div>
                    {album && album.songs.map(song => {
                        return(<div className="songs">{song.name}</div>)
                    })}
                    
                </div>
            </div>
        )
    }
}