import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/shortbaby.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: ShortBaby;
    src: url(${font});
  }
  html {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--darkblue);
    letter-spacing: 1.25px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-family: ShortBaby, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    letter-spacing: 1.8px;
    line-height: 1.55;
    text-align: center;
  }
  h1 {
    font-size: 2.2rem;

    @media(min-width: 768px) {
      font-size: 2.7rem;
    }
  }
  h2 {
    font-size: 2.2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
`;

export default Typography;