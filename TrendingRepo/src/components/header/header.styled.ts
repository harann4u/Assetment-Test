import { styled } from "styled-components";

export const HeaderStyled = styled.div`
  background-color: lightgrey; /* White background for the header */
  padding: 1rem; /* Padding around the header text */
  border-bottom: 1px solid #e1e4e8; /* Separator line below the header */
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  flex-shrink: 0; /* Prevent header from shrinking */
`;