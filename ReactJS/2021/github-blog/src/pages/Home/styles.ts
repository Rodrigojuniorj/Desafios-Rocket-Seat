import styled from "styled-components";
import { devices } from "../../styles/devices";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const ContentCard = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  a {
    text-decoration: none;
    border: 2px solid transparent;

    &:hover {
      border: 2px solid ${(props) => props.theme.baseLabel};
      border-radius: 10px;

      transition: border 0.4s;
    }
  }

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
  }
`;