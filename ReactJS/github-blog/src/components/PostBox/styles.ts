import styled from "styled-components";
import { devices } from "../../styles/devices";

export const PostBoxContainer = styled.div`
  width: 100%;
  margin-top: -5rem;
  display: flex;
  height: 13.25rem;
  background-color: ${(props) => props.theme.baseProfile};
  padding: 2rem 2rem 1rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }

  p {
    color: ${(props) => props.theme.baseText};
  }

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 2rem 2rem 1rem 2.5rem;

    img {
      margin-bottom: 1rem;
    }
  }

`;

export const UserContent = styled.div`
  width: 100%;
  margin-left: 2rem;
  display: flex;
  height: 9.25rem;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 0.75rem;

      span {
        margin-right: 0.5rem;
      }
      
      svg {
        color: ${(props) => props.theme.blue};
      }
    }
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    position: absolute;
    bottom: 0;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.baseSubtitle};

      svg {
        color: ${(props) => props.theme.baseLabel};
      }
    }
  }

  @media ${devices.tablet} {
    header {
      a {
        margin-right: 2rem;
      }
    }
  }

  @media ${devices.mobileL} {
    footer{
      position: relative;
    }
  }
`