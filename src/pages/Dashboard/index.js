import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import { Header } from '../../components/Header';

import { Container } from './styles';

export function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <Header />
      <h1>Página Dashboard</h1>
    </Container>
  );
}