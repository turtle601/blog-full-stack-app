import { css } from 'styled-components';

const sizes = {
  desktop: 1279,
  laptop: 1023,
  tablet: 767,
  miniTablet: 479,
  mobile: 319,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
