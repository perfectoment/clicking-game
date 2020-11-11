import React, { Component } from "react";
import AlbumCard from "./components/AlbumCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import albums from "./albums.json"



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    albums: albums,
    results: [],
    
  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  shuffleAlbums =() => {
    this.setState(this.state.albums = this.shuffleArray(this.state.albums))
  }

  handleClick = event => {
  this.shuffleAlbums()
  };


render() {
  return (
    <Wrapper>
      <Title>Black Metal Album Covers</Title>
      {this.state.albums.map(album => (
        <AlbumCard
          handleClick={this.handleClick}
          id={album.id}
          key={album.id}
          name={album.name}
          image={album.image}
        />
      ))}
    </Wrapper>
  );
}
}

export default App;
