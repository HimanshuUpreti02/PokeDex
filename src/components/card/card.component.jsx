import React, { Component } from "react";
import './card.styles.css';
const Card = ({list})=>{
    return (
      <div className="card-list">
        {list.map((character) => {
          const url = encodeURI(character.url);

          var id = parseInt(url.slice(34, 37));
          return (
            <div
              className="card-container"
              key={id}
              onClick={() => {
                window.open(
                  `https://www.pokemon.com/us/pokedex/${character.name}`
                );
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={`${character.name}`}
                width={150}
                height={150}
              />
              <h2>{character.name.toUpperCase()}</h2>
            </div>
          );
        })}
      </div>
    );
}

export default Card;
