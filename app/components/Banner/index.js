/**
 *
 * Banner
 *
 */

import React, { memo } from 'react';
import { Image } from 'antd';
import banner from '../../images/pokemon-banner.svg';
import './styles.scss';

function Banner() {
  return (
    <div className="banner">
      <Image preview={false} src={banner} />
    </div>
  );
}

Banner.propTypes = {};

export default memo(Banner);
