/**
 *
 * PageHeader
 *
 */

import React, { memo } from 'react';
import { Layout, Image, Typography } from 'antd';
import pikachu from '../../images/pikachu.svg';
import banner from '../../images/pokemon-banner.svg';
import bulbasaur from '../../images/bulbasaur.svg';
import './styles.scss';

const { Title } = Typography;
const { Header } = Layout;
function PageHeader() {
  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, color: '#fff', height: '100px' }}
    >
      <div className="header">
        <Image preview={false} width={120} height={100} src={pikachu} />
        <Title level={3}>
          An project of Pokemon built as a client-side React JS web app
        </Title>
        <Image preview={false} width={120} height={100} src={bulbasaur} />
      </div>
    </Header>
  );
}

PageHeader.propTypes = {};

export default memo(PageHeader);
