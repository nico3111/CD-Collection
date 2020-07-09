import React from 'react';
import ShowSongList from './ShowSongList';

export default class ShowSongsWithout extends React.Component {

    render() {
        var interpret = this.props.interpret;
        var album = this.props.album;
        return(
            <div>
                <div>Normales Album mit bild</div>
                {album.showSongs && <div>
                    Songlist</div>}
            </div>
        )
    }
}