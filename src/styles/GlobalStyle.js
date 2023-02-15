import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Rubik', sans-serif;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
}

a,
button,
input,
textarea {
    color: inherit;
    text-decoration: none;
    font-family: 'Rubik', sans-serif;
}

button {
    cursor: pointer;
}
`;
