import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }
  }

  strong {
    color: #fff;
    margin: 0 15px;
    font-size: 24px;
  }

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Time= styled.li`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
