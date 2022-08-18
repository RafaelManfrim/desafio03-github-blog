import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 8rem;
  text-align: justify;

  img {
    width: 100%;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors["blue"]};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme.colors["base-post"]};
    padding: 1rem;
    line-height: 160% !important;

    code {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      width: 100%;
      max-width: 1024px;
      overflow-x: scroll;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }

  a {
    color: ${({ theme }) => theme.colors["blue"]};
  }
`

export const PostHeaderContainer = styled.div`
  padding: 2rem 2.5rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  strong {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`

export const PostHeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Action = styled(Link)`
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
`

export const PostInfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 160%;
    color: ${({ theme }) => theme.colors['base-label']}
  }
`