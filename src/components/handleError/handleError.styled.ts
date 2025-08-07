import styled from 'styled-components';

export const ErrorContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  text-align: center;
  color: red; /* Make the error message stand out */
`;

export const RetryButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: #0366d6; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;