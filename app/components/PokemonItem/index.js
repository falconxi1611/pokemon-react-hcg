/**
 *
 * PokemonItem
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import PokemonBoxDetail from '../PokemonBoxDetail';
import './styles.scss';

const { Meta } = Card;
function PokemonItem(props) {
  const { pokemon } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <a onClick={() => showModal()}>
        <Card
          className="card-pokemon"
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={pokemon.image} />}
          onC
        >
          <Meta className="pokemon-name" title={pokemon.name} />
        </Card>
      </a>
      <PokemonBoxDetail
        pokemon={pokemon}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
}

PokemonItem.propTypes = {
  pokemon: PropTypes.object,
};

export default memo(PokemonItem);
