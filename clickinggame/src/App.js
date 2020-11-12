import React, { Component } from "react";
import AlbumCard from "./components/AlbumCard";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Title from "./components/Title";
import albums from "./albums.json"



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    albums: albums,
    newArray: [],
    score: 0,
    highscore: 0,
    
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
    const mixedAlbums = this.shuffleArray(this.state.albums)
    this.setState({albums: mixedAlbums})
  }

  handleClick = id => {
  this.shuffleAlbums()
  this.scoreKeeper(id)
  };


  scoreKeeper = id => {
  const highScore = this.state.highscore
   const holdingTank = this.state.newArray
   const newScore = this.state.score
    if(holdingTank.indexOf(id) === -1){
      holdingTank.push(id);
    
    this.setState(
      {
        score: newScore +1,
        newArray:holdingTank
      })
    } else {
        if(newScore > highScore){
          this.setState({
            highscore: newScore,
          })
        };
      this.setState({
        score:0
      })
    }
  };


render() {
  return (
    <Wrapper>
      <Title>Black Metal Album Covers</Title>
      <Counter
        score={this.state.score}
        highscore={this.state.highscore}
      /> 
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
