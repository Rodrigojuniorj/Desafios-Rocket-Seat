import styled from "styled-components";
import { devices } from "../../styles/devices";

export const HomeContainer = styled.main`
  width: 100%;
  max-width: calc(864px + 2%);
  padding: 0 2%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CoverImg = styled.img`
  width: 100%;
`;

export const ContentCard = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
  }
`;