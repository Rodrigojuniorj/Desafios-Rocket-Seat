import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div { 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.125rem;
      font-weight: 700;
    }

    span {
      color: ${(props) => props.theme.baseSpan};
    }
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.baseInput};
    border: 1px solid ${(props) => props.theme.baseBorder};
    padding: 1rem;
    color: ${(props) => props.theme.baseText};
    
    &::placeholder {
      color: ${(props) => props.theme.baseLabel};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
