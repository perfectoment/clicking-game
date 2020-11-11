import React, { Component } from "react";
import AlbumCard from "./components/AlbumCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import albums from "./albums.json"

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    albums: albums
  };



render() {
  const shuffledalbums = shuffleArray(this.props.posts);
  return (
    <Wrapper>
      <Title>Black Metal Album Covers</Title>
      {this.state.albums.map(album => (
        <AlbumCard
          removeFriend={this.removeFriend}
          id={album.id}
          key={album.id}
          name={album.name}
          image={album.image}
        />
      ))}
    </Wrapper>
  );
}


export default App;
