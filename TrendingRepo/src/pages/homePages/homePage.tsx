import { ContentWrapperStyled, HeaderStyled, PageContainerStyled } from './homepages.styles';
import NavBar from '../../components/navbar';
import RepoList from '../../components/repoList/repoList';
import { ToastContainer } from 'react-toastify';


export const HomePage = () => {

    return (
        <PageContainerStyled>
            <ContentWrapperStyled>
                <HeaderStyled> Trending Repos </HeaderStyled>
                <RepoList />
                <NavBar />
            </ContentWrapperStyled>
             <ToastContainer />
        </PageContainerStyled>
    )
}







