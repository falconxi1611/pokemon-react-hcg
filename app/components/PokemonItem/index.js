/**
 *
 * PokemonItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import './styles.scss';

const { Meta } = Card;
function PokemonItem(props) {
  const { pokemon } = props;
  console.log(pokemon);
  return (
    <Card
      className="card-pokemon"
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={pokemon.image} />}
    >
      <Meta className="pokemon-name" title={pokemon.name} />
    </Card>
  );
}

PokemonItem.propTypes = {
  pokemon: PropTypes.object,
};

export default memo(PokemonItem);
