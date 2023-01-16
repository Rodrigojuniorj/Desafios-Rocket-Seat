import styled from "styled-components";
import { devices } from "../../styles/devices";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.basePost};
  border-radius: 10px;
  padding: 2rem;
  max-height: 13rem;
  min-height: 13rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h2 {
      flex: 1;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${props => props.theme.baseTitle};
    }

    span {
      display: block;
      color: ${props => props.theme.baseSpan};
      font-size: 0.875rem;
    }
  }

  footer {
    margin-top: 1.25rem;
    color: ${props => props.theme.baseText};
  }
`;