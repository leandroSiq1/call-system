import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

export function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <>
      <button onClick={() => signOut()}>Fazer logout</button>
    </>
  );
}