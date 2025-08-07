import { ContentWrapperStyled, HeaderStyled, PageContainerStyled } from './homepages.styles';
import NavBar from '../../components/navbar';
import RepoList, { type RepoItem } from '../../components/repoList/repoList';
import { useEffect, useState } from 'react';
import { AxiosInstance } from '../../data/axiosinstance';
import { repoListApi } from '../../data/service/repolist.service';


export const HomePage = () => {

    const [repoData, setRepoData] = useState([]);   

    return (
        <PageContainerStyled>
            <ContentWrapperStyled>
                <HeaderStyled> Trending Repos </HeaderStyled>
                <RepoList />
                <NavBar />
            </ContentWrapperStyled>
        </PageContainerStyled>
    )
}







