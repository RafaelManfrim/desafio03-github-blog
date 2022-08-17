import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 0.75rem;
  line-height: 160%;

  h3 {
    font-size: 1.125rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors["base-span"]};
  }
`

export const FetchPostsInput = styled.input`
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors["base-input"]};
  border: 1px solid ${({ theme }) => theme.colors["base-border"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  padding: 0.75rem 1rem;
  margin-bottom: 3.25rem;

  &:placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors["blue"]};
  }
`

export const PostsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-bottom: 4rem;
`

export const PostCard = styled.div`
  height: 16.25rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["base-post"]};
  border: 2px solid ${({ theme }) => theme.colors["base-post"]};
  padding: 2rem;

  transition: 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors["base-label"]};
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    line-height: 160%;

    strong {
      color: ${({ theme }) => theme.colors["base-title"]};
      font-size: 1.25rem;
      font-weight: bold;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    time {
      color: ${({ theme }) => theme.colors["base-span"]};
      font-size: 0.875rem;
      width: max-content;
    }
  }

  p {
    color: ${({ theme }) => theme.colors["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
`