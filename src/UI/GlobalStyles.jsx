import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --body-font: "Lato", sans-serif;
    --heading-font: "Playfair Display", serif;

    --color-primary:#e6c9a2;
    --color-secondary:#0e1927; // text/heading on light

    --color-gray-text:#666666; // small text on light

    --color-accent-white: #FFF8E1; // text/heading on dark
    --color-accent-white-1: #FFFCF6; //bg-only

    --color-accent-gold:#FFD700;
    --color-accent-green:#556B2F;

    --color-white:#FFF;
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

  ul[role='list'] {
    list-style: none; 
}

h1,h2,h3,h4,h5,h6 {
  font-family: var(--heading-font);
}

`;

export default GlobalStyles;
