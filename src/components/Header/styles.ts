import styled from "styled-components";

import bgCover from '../../assets/Cover.png'

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bgCover});
  background-position: center;
  background-clip: content-box;
  background-size: cover;

  img {
    padding: 4rem 4rem 8rem;
  }
`