import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
    width: 100%;

    input {
        width: 100%;
        background-color: #fff;
        border: none;
        border-radius: 25px;
        height: 50px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
        outline: 0;
        padding: 0 16px;
        &::placeholder {
            color: #bcbcbc;
        }
    }
`;

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 32px;

  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;
    .sort-button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main}
    }
  }
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    width: 100%;

    .question-name {
    display: flex;
    flex-direction: column;

      span {
        width: 16%;
        margin: 8px 0 16px 0;
        padding-left: 4px;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        border-radius: 8px;
        font-size: 14px;
      }
    }

    .question-list {
        display: flex;
        justify-content: space-between;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 4px 0 4px;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.gray[900]};
        border-radius: 8px;

      }
    }

    .actions {
      display: flex;
    }

  }
`;