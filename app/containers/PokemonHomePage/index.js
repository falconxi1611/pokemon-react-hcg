/**
 *
 * PokemonHomePage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Layout, Menu, Row, Col } from 'antd';
import {
  EnvironmentOutlined,
  RiseOutlined,
  PlayCircleOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons';
import Banner from '../../components/Banner';
import PageHeader from '../../components/PageHeader';
import Trailer from '../../components/Trailer';
import PokemonItem from '../../components/PokemonItem';
import makeSelectPokemonHomePage, {
  makeSelectPokemonList,
  makeSelectIsLoading,
} from './selectors';
import { getListPokemonAction } from './actions';
import reducer from './reducer';
import saga from './saga';
import './style.scss';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export function PokemonHomePage(props) {
  const { isLoading, getListPokemon, pokemonList } = props;
  useInjectReducer({ key: 'pokemonHomePage', reducer });
  useInjectSaga({ key: 'pokemonHomePage', saga });

  useEffect(() => {
    getListPokemon();
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const style = { background: '#0092ff', padding: '8px 0' };
  const arrGameVersion = [
    {
      key: 0.1,
      label: 'Ver 0.1',
    },
    {
      key: 0.2,
      label: 'Ver 0.2',
    },
  ];

  const arrGeneration = [
    {
      id: 1,
      label: 'First generation (1996–1999)',
    },
    {
      id: 2,
      label: 'Second generation (1999–2002)',
    },
    {
      id: 3,
      label: 'Third generation (2002–2006)',
    },
    {
      id: 4,
      label: 'Fourth generation (2006–2010)',
    },
    {
      id: 5,
      label: 'Fifth generation (2010–2013)',
    },
    {
      id: 6,
      label: 'Sixth generation (2013–2016)',
    },
    {
      id: 7,
      label: 'Seventh generation (2016–2019)',
    },
    {
      id: 8,
      label: 'Eighth generation (2019–)',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Banner />
        <div className="menu">
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<PlayCircleOutlined />} title="Games">
              {arrGameVersion.map(version => (
                <Menu.Item key={version.key}>{version.label}</Menu.Item>
              ))}
            </SubMenu>
            <SubMenu key="sub2" icon={<RiseOutlined />} title="Generations">
              {arrGeneration.map(generation => (
                <Menu.Item key={generation.id}>{generation.label}</Menu.Item>
              ))}
            </SubMenu>
            <Menu.Item key="11" icon={<EnvironmentOutlined />}>
              Locations
            </Menu.Item>
            <Menu.Item key="12" icon={<DeploymentUnitOutlined />}>
              Items
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout className="site-layout">
        <PageHeader />
        <Content className="content">
          <Trailer />
          <Row>
            {pokemonList.map(record => (
              <Col className="gutter-row">
                <PokemonItem pokemon={record} />
              </Col>
            ))}
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Pokemon React JS ©2021 Created by ToanLe
        </Footer>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = createStructuredSelector({
  pokemonHomePage: makeSelectPokemonHomePage(),
  isLoading: makeSelectIsLoading(),
  pokemonList: makeSelectPokemonList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getListPokemon: () => dispatch(getListPokemonAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PokemonHomePage);
