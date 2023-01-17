import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: calc(1220px + 2%);
  padding: 0 2%;
  margin: 0 auto;
  transition: 350ms;
  height: 100vw;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    transition: 650ms;

    width: 100%;
  }
`

export const CoverImg = styled.img`
  width: 100%;
`;
