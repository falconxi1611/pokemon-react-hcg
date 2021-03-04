/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectRepos } from 'containers/App/selectors';
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
import { loadRepos } from '../App/actions';
import { changeUsername, getListPokemon } from './actions';
import {
  makeSelectUsername,
  makeSelectLoading,
  makeSelectPokemonList,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import './styles.scss';

const key = 'home';
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export function HomePage(props) {
  const {
    loading,
    username,
    onSubmitForm,
    pokemonList,
    onGetListPokemon,
  } = props;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
    onGetListPokemon();
  }, []);

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

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
          <PokemonItem />
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              Col
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              Col
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              Col
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Pokemon React JS ©2021 Created by ToanLe
        </Footer>
      </Layout>
    </Layout>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  pokemonList: PropTypes.array,
  onGetListPokemon: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  pokemonList: makeSelectPokemonList(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onGetListPokemon: params => dispatch(getListPokemon(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
