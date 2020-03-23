import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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

    hr {
      border: 0;
      height: 1px;
      margin: 10px 0 20px;
      background: rgba(255, 255, 255, 0.2);
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

  > button {
    border: 0;
    color:#FFF;
    width: 100%;
    height: 44px;
    margin: 10px 0 0;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    background: #f64c75;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
