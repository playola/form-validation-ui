import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@Styles/theme';
import App from './containers/App';

const AppProvider = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root'),
);
