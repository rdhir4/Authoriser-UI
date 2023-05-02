import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import light from './Themes/light.theme';
import GlobalStyle from './globalStyles';
import Store from './Redux/store'
import dark from './Themes/dark.theme';

ReactDOM.render(
  <Provider store={Store}>
    <ThemeProvider theme={dark}>
      <GlobalStyle/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>,
  </Provider>,
  // <BrowserRouter>
  // <App/>
  // </BrowserRouter>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
