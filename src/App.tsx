import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import { Routes } from './routes';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}
