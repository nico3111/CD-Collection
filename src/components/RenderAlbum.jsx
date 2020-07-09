import React from 'react';
import ShowInterpret from './ShowInterpret';
import ShowListView from './ShowListView';

export default class RenderAlbum extends React.Component {

    /**
     *
     */
    render() {
        var interprets = this.props.interprets;
        var listViewIsVisible = this.props.listViewIsVisible;
        var toggleSongsVisible = this.props.toggleSongsVisible;
        
        const renderInterprets = () => {
            if (listViewIsVisible) {
                return (
                    <>
                        {interprets.map((interpret, key) => {
                            return <div key={"interpret" + key}>{renderInterpret(interpret)}</div>;
                        })}
                    </>
                )
            }
            return (
                <div className="album-wrapper">
                    {interprets.map((interpret, key) => {
                        return <div key={"album" + key}>{renderInterpret(interpret)}</div>;
                    })}
                </div>
            )
        }

        const renderInterpret = (interpret) => {
            {
                return interpret.alben.map((album, key) => {
                    return (
                        <>
                            {!listViewIsVisible && <ShowInterpret album={album} interpret={interpret} key={key} />}
                            {listViewIsVisible && <ShowListView album={album} interpret={interpret} toggleSongsVisible={toggleSongsVisible} key={key} />}
                        </>)
                });
            }
        }

        return (
            <>
                {renderInterprets()}
            </>
        )


    }
}


