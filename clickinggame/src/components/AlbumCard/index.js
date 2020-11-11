import React from "react";
import "./style.css";

// function shuffleArray(array) {
//   let i = array.length - 1;
//   for (; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// };

// var shuffledAlbums = shuffleArray(this.state.albums)
// handleIncrement = () => {

//   this.setState({ count: this.state.count + 1 });
// };


function AlbumCard(props) {
  return (
    <div className="card" id={props.id} onClick={() => props.handleClick(props.id)} >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default AlbumCard;
