import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';


// RepoListStyled: This is the scrollable area containing the repository items.
// It expands to fill the available space between the header and the navbar.
export const RepoListContainerStyled = styled.div`
  flex: 1; /* Allows this component to grow and take all available vertical space */
  overflow-y: auto; /* Enables vertical scrolling for the repository list */

  /* Hide scrollbar for Webkit browsers (Chrome, Safari, Edge, Opera) */
  &::-webkit-scrollbar {
    display: none; /* Hide the scrollbar track and thumb */
    width: 0; /* For horizontal scrollbar */
    height: 0; /* For vertical scrollbar */
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none; /* 'none' hides the scrollbar */

  /* Hide scrollbar for IE and Edge (older versions) */
  -ms-overflow-style: none; /* 'none' hides the scrollbar */
`;

// RepoItemStyled: Styles for each individual repository item.
export const RepoItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start; /* Align content to the start (left) */
  gap: 0.5rem; /* Space between title, description, and footer */
  cursor: pointer;

  padding: 2rem;
  border-bottom: 1px solid #e1e4e8; /* Separator line between repo items */

  &:hover {
    background-color: #f6f8fa; /* Light background on hover */
  }

  &:last-child {
    border-bottom: none; /* No border for the last item */
  }
`;

// RepoTitleStyled: Styles for the repository title.
export const RepoTitleStyled = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0366d6;
  margin: 0;
  display: flex;
  justify-content: start;
`;

// RepoDescriptionStyled: Styles for the repository description.
export const RepoDescriptionStyled = styled.p`
  font-size: 1rem;
  color: #586069;
  margin: 0;
  display: flex;
  justify-content: start;
`;

// RepoFooterStyled: Container for owner and star count.
export const RepoFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

// RepoOwnerStyled: Styles for the repository owner information.
export const RepoOwnerStyled = styled.div`
  display: flex;
  align-items: center;
  color: #586069;
  font-size: 0.9rem;
`;

// RepoOwnerIconStyled: Placeholder for the owner's avatar/icon.
// export const RepoOwnerIconStyled = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: #d1d5da;
//   border-radius: 50%;
//   margin-right: 0.5rem;
// `;

export const RepoOwnerIconStyled = styled.img` // Changed to styled.img
  width: 20px;
  height: 20px;
  border-radius: 50%; /* Makes the image circular */
  margin-right: 0.5rem;
  object-fit: cover; /* Ensures the image covers the area without distortion */
  background-color: #d1d5da; /* Fallback background if image fails to load */
`;

// StarCountStyled: Styles for the star count.
export const StarCountStyled = styled.div`
  display: flex;
  align-items: center;
  color: #586069;
  font-size: 0.9rem;
`;

// StarIconStyled: Styles for the star icon.
export const StarIconStyled = styled(FaStar)`
  color: #e3b341;
  margin-right: 0.25rem;
`;
