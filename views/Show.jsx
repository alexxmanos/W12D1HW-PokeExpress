import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Show extends React.Component {
  render() {
    const { pokemon, id } = this.props;
    const selectedPokemon = pokemon[id];

    return (
      <html>
        <head>
          <title>Gotta Catch 'Em All</title>
        </head>
        <body>
          <h1 style={myStyle}>Gotta Catch 'Em All</h1>
          <h2>{selectedPokemon.name}</h2>
          <img src={poke.img} alt={poke.name} />

          <a href="/pokemon">Back</a>
        </body>
      </html>
    );
  }
}

function addImageExtension(imageUrl) {
  return imageUrl + '.jpg';
}

export default Show;

