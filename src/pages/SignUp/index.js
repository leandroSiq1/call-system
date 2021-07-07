import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { Container, BoxLogin, Logo, } from './styles';

import logo from '../../assets/logo.png';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    
    if (![name, email, password].includes('')) {
      signUp(name, email, password);

    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <Container>
      <BoxLogin>
        <Logo>
          <img src={logo} alt="Logo chamadas" />
        </Logo>

        <form onSubmit={handleSubmit}>
          <h1>Cadastrar conta</h1>

          <input 
            type="text" 
            value={name}
            placeholder="Seu nome" 
            onChange={(event) => setName(event.target.value)}
          />

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

          <button type="submit">{ loadingAuth ? "Carregando..." : "Cadastrar" }</button>
        </form>

        <Link to="/">Já possui uma conta?</Link>
      </BoxLogin>
    </Container>
  );
}