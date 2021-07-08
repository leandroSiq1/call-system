import { useState, useContext } from 'react';
import { FiSettings, FiUpload } from 'react-icons/fi';

import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';

import avatar from '../../assets/avatar.png';
import { 
  Container, 
  Content, 
  FormProfile,
  LabelAvatar,
} from './styles';

export function Profile() {
  const { user, signOut, setUser, storageUser } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [avatarImg, setAvatarImg] = useState(null);

  async function handleUpload() {
        
  }

  async function handleSave(event) {
    event.preventDefault();

    if (avatarImg === null && name !== '') {
      await firebase.firestore().collection('users')
      .doc(user.uid)
      .update({
        name
      }).then(() => {
        let data = {
          ...user,
          name
        }

        setUser(data);
        storageUser(data);
      }).catch(error => {
        console.log("Error in update: ", error)
      })
    } else if (name !== '' && avatarImg !== null) {
      handleUpload();
    }
  } 

  return (
    <>
      <Header />

      <Content>
        <Title name="Meu Perfil">
          <FiSettings size={25} />
        </Title>

        <Container>
          <FormProfile onSubmit={handleSave}>
            <LabelAvatar>
              <span>
                <FiUpload color="fff" size={25} />
              </span>
              <input type="file" accept="image/*" /> <br />
              { 
                avatarUrl === null ? 
                <img src={avatar} width="250" height="250px" alt="Foto de perfil do usuario" /> :
                <img src={avatarUrl} width="250" height="250px" alt="Foto de perfil do usuario" /> 
              }
            </LabelAvatar>

            <label>Nome</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
              
            <label>Email</label>
            <input type="text" value={email} disabled /> 
          
            <button type="submit">Salvar</button>
          </FormProfile>
        </Container>

        <Container>
          <button onClick={() => signOut() }>
            Sair
          </button>
        </Container>
      </Content>
    </>
  );
}