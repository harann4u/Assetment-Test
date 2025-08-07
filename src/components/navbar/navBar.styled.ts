import styled from 'styled-components';

interface NavItemProps {
  active?: boolean;
}


export const NavBarStyled = styled.div`
  background-color: lightGrey; /* White background for the navbar */
  border-top: 1px solid #e1e4e8; /* Separator line above the navbar */
  padding: 0.2rem 0;
  box-shadow: inset 1px 0 0 #e0e0e0, inset -1px 0 0 #e0e0e0; /* Side shadows */
  display: flex;
  justify-content: space-around;
  flex-shrink: 0; /* Prevent navbar from shrinking */
`;

export const NavItemStyled = styled.div<NavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => (props.active ? '#0366d6' : '#586069')};
  font-size: 0.65rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0;
`;

export const NavIconStyled = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.15rem;
`;