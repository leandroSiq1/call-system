import styled from 'styled-components';

export const Content = styled.div`
  margin-left: 250px;
  padding: 1px 16px;

  @media (max-width: 700px) {
    margin-left: unset;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: #f8f8f8;
  border-radius: 5px;
  padding: .8em;

  margin-bottom: 10px;

  > button {
    padding: 8px 20px;

    background: transparent;
    border: 1px solid #121212;
    border-radius: 5px;
    font-size: 15px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all .3s ease-in-out;

    &:hover {
      background: #181c2e;
      color: #fff;
    }
  }
`;

export const FormProfile = styled.form`
  > img {
    margin-bottom: 1em;
    border-radius: 50%;
    object-fit: cover;
  }
  > button {
    width: 100%;
    max-width: 600px;
    height: 40px;

    background: #181c2e;
    border: 0;
    border-radius: 7px;

    font-size: 16px;
    color: #fff;
    opacity: .9;

    transition: all .3s ease;

    &:hover {
      opacity: 1;
    }
  }
  > label:nth-child(2), label:nth-child(4) {
    display: inline-block;
    margin-bottom: 7px;
    font-size: 1.4em;
  }
  > input, textarea, select {
    width: 100%;
    margin-bottom: 15px;
    padding: .7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
  }
  > input:disabled {
    cursor: not-allowed;
  }
`;

export const LabelAvatar = styled.label`
  width: 280px;
  height: 280px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;
  
  > input {
    display: none;
  }
  > span {
    z-index: 99;
    position: absolute;
    opacity: 0.7;

    transition: all .2s ease;
  }

  &:hover {
    > span {
      opacity: 1;
      transform: scale(1.4);
    }
  }
`;