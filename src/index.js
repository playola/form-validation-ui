import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '@Styles/theme';
import App from './containers/App';

const GlobalStyle = createGlobalStyle`
    body {
        min-width: 320px;
        font-family: sans-serif;
        margin: 0;
    }
`;

const AppProvider = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <App />
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
);

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root'),
);
