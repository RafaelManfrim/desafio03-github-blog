import styled from "styled-components";

export const UserCardContainer = styled.div`
  padding: 2rem 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  gap: 2rem;

  img {
    border-radius: 8px;
    max-width: 148px;
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    line-height: 160%;
  }
`

export const UserNameContainer = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 130%;
    font-size: 1.5rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;

    font-size: 0.75rem;
    line-height: 160%;
    font-weight: bold;
    color: ${({ theme }) => theme.colors['blue']};

    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors['blue']};
    }
  }
`

export const UserInfoContent = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`
