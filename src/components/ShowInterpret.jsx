import React from 'react';
import '../styles/ShowInterpret.css';


export default class ShowInterpret extends React.Component {

    render() {
        var album = this.props.album;
        var interpret = this.props.interpret;
        console.log(interpret)
        return (
            <div className="album-wrapper">
                <div>
                    <div className="album1">
                        <img id="coverimg1" src={album.cover} />
                        <div className="interpret1">{interpret.interpret}</div>
                        <div className="interpret2">{album.name}</div>
                    </div>
                </div>
            </div>
        );
    }
}