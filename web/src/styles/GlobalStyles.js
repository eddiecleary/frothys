import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --pink: #cc3366;
    --yellow: #ffd166;
    --green: #00cc66;
    --lightblue: #118ab2;
    --darkblue: #073b4c;
    --red: #cc3333;
    --black: #000;
    --white: #fff;
  }
  html {
    font-size: 62.5%;
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
    position: relative;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
  button, .btn {
    background: var(--pink);
    color: var(--white);
    border: 0;
    padding: 1.8rem 3rem;
    border-radius: 2rem;
    cursor: pointer;
    font-size: 1.9rem;

    &.white {
      background: var(--white);
      color: var(--pink) !important;
    }

    &.black {
      background: var(--black);
      color: var(--white);
    }

    &.yellow {
      background: var(--yellow);
      color: var(--black);
    }

    &.red {
      background: var(--red);
      color: var(--white);
    }

    &.blue {
      background: #3366cc;
      color: var(--white);
    }
  }
  a {
    text-decoration: none;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--pink) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--pink);
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles
