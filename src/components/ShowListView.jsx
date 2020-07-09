import React from 'react';
import '../styles/ShowListView.css';

export default class ShowListView extends React.Component {
    renderSongs(album) {
        return album.songs.map((song, key)=> {
            return(
                <>
                    <div>{song.name}</div>
                </>
            )
        })
    }
    render() {
        var album = this.props.album;
        var interpret = this.props.interpret;

        return (
            <div className="album-container">

                    <img className="img-small" src={album.cover} />

                <button onClick={() => { 
                    album.showSongs = !album.showSongs;
                    this.props.toggleSongsVisible() ;
                    }}>{interpret.interpret}</button>
                    {album.showSongs && <>
                        {this.renderSongs(album)}
                    </>}
            </div>
        )
    }
}
