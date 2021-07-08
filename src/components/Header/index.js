import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { 
  Container, 
  BoxImage, 
} from './styles';

import avatar from '../../assets/avatar.png';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

export function Header() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <BoxImage>
        <img src={ user.avatarUrl === null ? avatar : user.avatarUrl } alt="Avatar usuario" />
      </BoxImage>

      <Link to="/dashboard">
        <FiHome color="#fff" size={24} />
        Chamadas
      </Link>

      <Link to="/customers">
        <FiUser color="#fff" size={24} />
        Clientes
      </Link>

      <Link to="/profile">
        <FiSettings color="#fff" size={24} />
        Configurações
      </Link>
    </Container>
  );
}