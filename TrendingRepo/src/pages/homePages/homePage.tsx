import { ContentWrapperStyled, PageContainerStyled } from './homepages.styles';
import NavBar from '../../components/navbar';
import RepoList from '../../components/repoList/repoList';
import { ToastContainer } from 'react-toastify';
import Header from '../../components/header/header';


export const HomePage = () => {

    return (
        <PageContainerStyled>
            <ContentWrapperStyled>
                <Header/>
                <RepoList />
                <NavBar />
            </ContentWrapperStyled>
             <ToastContainer />
        </PageContainerStyled>
    )
}







