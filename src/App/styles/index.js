import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
`

export const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  color: #61dafb;
`;

export const Paragraph = styled.p`
  color: #61dafb;
`;
