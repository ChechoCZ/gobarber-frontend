import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    margin-top: 30px;
    flex-direction: column;

    input {
      border: 0;
      color: #FFF;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #FFF;
      margin: 0 0 10px;
      align-self: flex-start;
    }

    button {
      border: 0;
      color:#FFF;
      height: 44px;
      margin: 5px 0 0;
      font-size: 16px;
      font-weight: bold;
      border-radius: 4px;
      background: #3B9EFF;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3B9EFF')};
      }
    }

    a {
      color: #FFF;
      opacity: 0.8;
      font-size: 16px;
      margin-top: 15px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
