import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

`;

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: ${({ justifyContent }) => justifyContent};
margin-top: 32px;
margin-bottom: 32px;
border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
padding-bottom: 16px;

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

export const Card = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;

  & + & {
    margin-top: 16px;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;

    .question-name {
    display: flex;
    flex-direction: column;

      span {
        width: 100%;
        min-width: 50px;
        max-width: 75px;
        margin: 8px 0 16px 0;
        padding-left: 4px;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        border-radius: 8px;
        font-size: 14px;
      }
    }

    .choice-list {
        display: flex;
        justify-content: space-between;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 4px 0 4px;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.gray[900]};
        border-radius: 8px;
        font-size: 14px;
      }
    }

  }

  .actions {

      display: flex;
      button {
            background: transparent;
            border: none;
            margin-left: 8px;
        }
    }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }

  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-left: 24px;
    word-break: break-word;
  }
`;
