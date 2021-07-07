import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { Container, BoxLogin, Logo, } from './styles';

import logo from '../../assets/logo.png';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    
    if (email !== '' && password !== '') {
      signIn(email, password);
    }
  }

  return (
    <Container>
      <BoxLogin>
        <Logo>
          <img src={logo} alt="Logo chamadas" />
        </Logo>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input 
            type="text" 
            value={email}
            placeholder="email@email.com" 
            onChange={(event) => setEmail(event.target.value)}
          />

          <input 
            type="password" 
            value={password}
            placeholder="*****" 
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">{ loadingAuth ? "Carregando..." : "Acessar" }</button>
        </form>

        <Link to="/register">Criar uma conta</Link>
      </BoxLogin>
    </Container>
  );
}