import { Container } from './styles';

export function Title({ children, name }) {
  return (
    <Container>
      {children}
      <span>{name}</span>
    </Container>
  );
}