import { ErrorContainerStyled, RetryButtonStyled } from "./handleError.styled";



interface HandleErrorProps {
  errorMessage: string; 
  onRetry: () => void; 
}

const HandleError: React.FC<HandleErrorProps> = ({ errorMessage, onRetry }) => {
     return (
    <ErrorContainerStyled>
      <div>Error: {errorMessage}</div>
      <RetryButtonStyled onClick={onRetry}>
        Retry
      </RetryButtonStyled>
    </ErrorContainerStyled>
  );
}

export default HandleError