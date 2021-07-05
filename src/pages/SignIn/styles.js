import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #121212;
`;

export const BoxLogin = styled.div`
  width: 600px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #EAEAEC;

  > form {
    width: 90%;
    margin-top: 1.5em;

    display: flex;
    flex-direction: column;  
  
    > h1 {
      margin-bottom: 0.5em;
      color: #181c2e;
      text-align: center;
    }
    > input {
      height: 35px;

      padding: 10px;
      margin-bottom: 15px;

      font-size: 15px;

      background: #fff;
      border: 0;
      border-radius: 7px;
    }
    > button {
      height: 35px;

      background: #181c2e;
      border: 0;
      border-radius: 7px;

      font-size: 16px;
      color: #fff;
    }
  }
  > a {
    margin: 20px 0;
    color: #000;
    
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  background: #181c2e;

  > img {
    width: 170px;
    height: 130px;

    padding: 20px;
  }
`;