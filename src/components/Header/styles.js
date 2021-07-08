import styled from 'styled-components';

import imageCover from '../../assets/cover.png';

export const Container = styled.aside`
  width: 250px;
  height: 100%;

  position: fixed;
  overflow: auto;

  background: #181c2e;

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    
    position: relative;

    > div {
      display: none;
      opacity: 0;
      visibility: hidden;
    }
    > a {
      float: left;

      svg {
        display: none;
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  @media (max-width: 400px) {
    > a {
      text-align: center;
      float: none;
    }
  }

  > a {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    padding: 16px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: #121212;
      color: #fff;
    }

    > svg {
      margin-right: .5em;
    }
  }
`;

export const BoxImage = styled.div`
  height: 150px;

  background: url('${imageCover}');
  background-color: #181c2e;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 30px;

  > img {
    width: 90px;
    height: 90px;

    display: block;
    margin: auto;
    border-radius: 50%;

    -webkit-filter: drop-shadow(2px 3px 6px #121212);
    filter: drop-shadow(2px 3px 6px #121212);
    object-fit: cover;
  }
`;