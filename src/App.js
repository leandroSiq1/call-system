import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './contexts/auth';
import { Routes } from './routes';

import firebase from './services/firebaseConnection';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </AuthProvider>
  );
}  