/**
 *
 * PokemonItem
 *
 */

import React, { memo } from 'react';
import { Card } from 'antd';
import './styles.scss';

const { Meta } = Card;
function PokemonItem(props) {
  const { listPokemon } = props;
  console.log(listPokemon);
  listPokemon.map(pokemon => (
    <Card
      className="card-pokemon"
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
      }
    >
      <Meta className="pokemon-name" title={pokemon.name} />
    </Card>
  ));
}

PokemonItem.propTypes = {};

export default memo(PokemonItem);
