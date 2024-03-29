import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --body-font: "Lato", sans-serif;
    --heading-font: "Playfair Display", serif;

    --color-primary:#d98c26;
    --color-primary-light:#e6c9a2;
    --color-secondary:#0e1927; // text/heading on light

    --color-gray-text:#666666; // small text on light (light bg)

    --color-accent-white: #FFF8E1; // text/heading on dark
    --color-accent-white-1: #FFFCF6; //bg-only

    --color-light-gray:#F5F5F5;

  }

  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: none;
  }

  html {
    font-size: 62.5%; 
    scroll-behavior: smooth;
    font-family: var(--body-font);
  }

  html, body {
    height: 100%;

  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img,
  picture,
  svg {
    max-width: 100%;
    font-style: italic;
  }

  ul {
    list-style-type: none;
}

h1,h2,h3,h4,h5,h6 {
  font-family: var(--heading-font);
}

button:focus,input:focus{
  outline: 1px dotted var(--color-primary);
  outline-offset:1rem;
}

`;

export default GlobalStyles;
