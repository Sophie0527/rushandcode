import { generateMedia } from 'styled-media-query';

export const CustomMediaStyle = generateMedia({
  desktop: '78em',
  tablet: '60em',
  mobile: '46em',
});

export default CustomMediaStyle;
