import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import firebase from './services/firebaseConnection';

export function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}  