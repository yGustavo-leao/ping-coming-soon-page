import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Libre Franklin", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
    }

    html {
        height: 100%;
    }
    
    body {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
    }
`