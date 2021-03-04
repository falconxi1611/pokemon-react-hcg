/**
 *
 * PokemonBoxDetail
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Image, Typography, Row, Col, Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

function PokemonBoxDetail(props) {
  const { pokemon, isModalVisible, setIsModalVisible } = props;
  const plainOptions = [];
  pokemon.types.forEach(record => {
    plainOptions.push(record.type.name);
  });

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { Title } = Typography;

  return (
    <>
      <Modal
        title={pokemon.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row>
          <Col>
            <Image width={200} src={pokemon.image} />
          </Col>
          <Col>
            <Title level={5}>Height: {pokemon.height} </Title>
            <Title level={5}>Weight: {pokemon.weight} </Title>
            <Title level={5}>Experience: {pokemon.base_experience} exp</Title>
            <Title level={5}>Type: </Title>
            <CheckboxGroup options={plainOptions} value={plainOptions} />
          </Col>
        </Row>
      </Modal>
    </>
  );
}

PokemonBoxDetail.propTypes = {
  pokemon: PropTypes.object,
  isModalVisible: PropTypes.bool,
  setIsModalVisible: PropTypes.func,
};

export default memo(PokemonBoxDetail);
