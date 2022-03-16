import { css } from 'styled-components';

const sizes = {
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  miniTablet: 480,
  mobile: 320,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${console.log(args)};
      ${css(...args)};
    }
  `;
  return acc;
}, {});
