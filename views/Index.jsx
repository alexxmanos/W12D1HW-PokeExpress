import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <html>
        <head>
          <title>See All The Pokemon!</title>
        </head>
        <body>
          <h1 style={myStyle}>See All The Pokemon!</h1>
          <ul>
            {pokemon.map((poke, index) => (
              <li key={index}>
                <a href={`/pokemon/${index}`}>{poke.name}</a>
                <img src={poke.img} alt={poke.name} />
              </li>
            ))}
          </ul>
        </body>
      </html>
    );
  }
}

export default Index;


