import React from 'react';
import '../styles/head.css'


const buttonImg = require('../assets/images/list button.png')

export class Head extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="head-container">
                <div className="head-text">CD-Sammlung</div>
                <div className="ansicht">
                    <button onClick={() => {
                        this.props.toggle();
                        //  this.setState({ listViewIsVisble: !this.state.listViewIsVisble })

                    }}><img className="button-list" src={buttonImg}></img></button>
                </div>

            </div>
        )
    }
}
