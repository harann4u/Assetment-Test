import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';



export const RepoListContainerStyled = styled.div`
  flex: 1; 
  overflow-y: auto; 

  &::-webkit-scrollbar {
    display: none; 
    width: 0; 
    height: 0; 
  }

  
  scrollbar-width: none; 

 
  -ms-overflow-style: none;
`;

export const RepoItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start; 
  gap: 0.5rem; 
  cursor: pointer;

  padding: 2rem;
  border-bottom: 1px solid #e1e4e8; 

  &:hover {
    background-color: #f6f8fa; 
  }

  &:last-child {
    border-bottom: none; 
  }
`;

export const RepoTitleStyled = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0366d6;
  margin: 0;
  display: flex;
  justify-content: start;
`;

export const RepoDescriptionStyled = styled.p`
  font-size: 1rem;
  color: #586069;
  margin: 0;
  display: flex;
  justify-content: start;
`;

export const RepoFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const RepoOwnerStyled = styled.div`
  display: flex;
  align-items: center;
  color: #586069;
  font-size: 0.9rem;
`;



export const RepoOwnerIconStyled = styled.img` 
  width: 20px;
  height: 20px;
  border-radius: 50%; 
  margin-right: 0.5rem;
  object-fit: cover; 
  background-color: #d1d5da; 
`;

export const StarCountStyled = styled.div`
  display: flex;
  align-items: center;
  color: #586069;
  font-size: 0.9rem;
`;

export const StarIconStyled = styled(FaStar)`
  color: #e3b341;
  margin-right: 0.25rem;
`;
