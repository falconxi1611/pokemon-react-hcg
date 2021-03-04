/**
 *
 * Trailer
 *
 */

import React, { memo } from 'react';
import { Carousel } from 'antd';
import './styles.scss';

function onChange(a, b, c) {
  console.log(a, b, c);
}

function Trailer() {
  return (
    <Carousel afterChange={onChange}>
      <div className="trailer">
        <iframe
          src="https://www.youtube.com/embed/D0zYJ1RQ-fs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          src="https://www.youtube.com/embed/1roy4o4tqQM"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          src="https://www.youtube.com/embed/bILE5BEyhdo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="trailer">
        <iframe
          src="https://www.youtube.com/embed/uBYORdr_TY8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </Carousel>
  );
}

Trailer.propTypes = {};

export default memo(Trailer);
