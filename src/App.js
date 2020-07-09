import React from 'react';
import './App.css';
import { Head } from './components/Head';
import ListInterprets from './components/ListInterprets';
import RenderAlbum from './components/RenderAlbum';

const interprets = [
  {
    interpret: "Starboy",
    alben: [{
      name: "The Weekend",
      cover: require('./assets/images/cd 1.jpg'),
      songs: [
        { name: "Song1" }, { name: "song2" }, { name: "Song3" }, { name: "song4" }
      ]
    }],
    showSongs: false
  },
  {
    interpret: "Summer Vibes",
    alben: [{
      name: "Mixed Compilation",
      cover: require('./assets/images/cd 2.jpg'),
      songs: [
        { name: "Song1" }, { name: "song2" }, { name: "Song3" }, { name: "song4" }
      ]
    }],
    showSongs: false
  },
  {
    interpret: "Queen",
    alben: [{
      name: "The Miracle",
      cover: require('./assets/images/cd 3.jpg'),
      songs: [
        { name: "Song1" }, { name: "song2" }, { name: "Song3" }, { name: "song4" }
      ]
    }],
    showSongs: false
  },
  {
    interpret: "Wayn",
    alben: [{
      name: "Goin'back to Miami",
      cover: require('./assets/images/cd11.jpg'),
      songs: [
        { name: "Song1" }, { name: "song2" }, { name: "Song3" }, { name: "song4" }
      ]
    }],
    showSongs: false
  },
  {
    interpret: "Ben Zucker",
    alben: [{
      name: "na und?!",
      cover: require('./assets/images/cd5.jpg'),
      songs: [
        { name: "Song1" }, { name: "song2" }, { name: "Song3" }, { name: "song4" }
      ],
    }],
    showSongs: false
  },
  {
    interpret: "Nirvana",
    alben: [{
      name: "Nevermind",
      cover: require('./assets/images/cd10.jpg'),
      songs: [
        { name: "Song1" }, { name: "song2" }, { name: "Song3" }, { name: "song4" }
      ]
    }],
    showSongs: false
  },
]


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listViewIsVisible: false,
      interprets: interprets
    }
  }
  
  toggle = () => {
    this.setState({ listViewIsVisible: !this.state.listViewIsVisible })
  }

  toggleSongsVisible = () => {
    this.setState({interprets: [...this.state.interprets]})
  }


  render() {
    return (
      <div className="App">
        <header>
          <Head toggle={this.toggle}>
          </Head>
       
        </header>
        <RenderAlbum interprets={interprets} listViewIsVisible={this.state.listViewIsVisible} toggleSongsVisible={this.toggleSongsVisible} />
      </div>
    );
  }
}

export default App;
