import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`

:root {
    /* COLORS */
    --color-primary: blue;
    --color-secondary: red;
    --color-tertiary: yellow;

    /* FONTS */
    --font-heading: 'Permanent Marker', cursive;
    --font-content: 'Lato', sans-serif;

    /* RESPONSIVE BREAKPOINTS */
    --bp-largest: 100em;         /* 1600px + */
    --bp-larger: 87.5em;         /* 1400px */
    --bp-large: 75em;            /* 1200px */

    --bp-medium-large: 62.5em;   /* 1000px */
    --bp-medium: 50em;           /* 800px */
    --bp-medium-small: 43.75em;  /* 700px */
            
    --bp-small: 37.5em;          /* 600px */
    --bp-smaller: 31.25em;       /* 500px */
    --bp-smallest: 25em;         /* 400px */
}

/* DEFAULT STYLES */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;   // 10px/16px = 62.5%

    @media only screen and (min-width: var(--bp-largest)) {
        font-size: 75%;
    }

    @media only screen and (max-width: var(--bp-large)) {
        font-size: 55%;
    }
}

body {  
    background-color: grey;
    font-family: var(--font-content);
    max-width: 1800px;
    margin: 0 auto;
    overflow-x: hidden;
}

#root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

::selection {
    background-color: var(--color-primary);
    color: var(--color-secondary);
}
`
export default GlobalStyle