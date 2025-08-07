import { useCallback, useEffect, useRef, useState } from "react";
import { repoListApi } from "../../data/service/repolist.service";
import { RepoDescriptionStyled, RepoFooterStyled, RepoItemStyled, RepoListContainerStyled, RepoOwnerIconStyled, RepoOwnerStyled, RepoTitleStyled, StarCountStyled, StarIconStyled } from "./repoList.styled"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

type RepoListType = {
  id: number;
  name: string;
  description: string | null;
  owner: {
    avatar_url: string;
    login: string;
  };
  full_name: string;
  stargazers_count: number;
}


export type RepoItems = {
  hasError: boolean,
  errorMessage: string,
  items: RepoListType[]
}


const RepoList = () => {
  const [repoData, setRepoData] = useState<RepoListType[]>([]);
  const [errorMesage, setErrorMessage] = useState(false)
  const [hasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);


  const fetchRepoList = async () => {
    const repoList = await repoListApi(page) as RepoItems;
    if (repoList.hasError) {
      toast.error("Failed to fetch data");
      setErrorMessage(true);
    } else { 
      setRepoData((prev: RepoListType[]) => [...prev, ...repoList.items]);
      setErrorMessage(false)
    }

  }

  console.log('repoData', repoData)

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [hasMore]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  };




  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);


  useEffect(() => {
    if (page >= 1) {
      fetchRepoList();
    }
  }, [page])



  return (<RepoListContainerStyled>

    {repoData.map((repo: RepoListType, index: number) => (
      <RepoItemStyled key={index}>
        <RepoTitleStyled>{repo.name}</RepoTitleStyled>
        <RepoDescriptionStyled>{repo.description}</RepoDescriptionStyled>
        <RepoFooterStyled>
          <RepoOwnerStyled>
            <RepoOwnerIconStyled
              src={repo.owner.avatar_url}
              alt="Repository Owner Icon"
            />
            <span>{repo.full_name}</span>
          </RepoOwnerStyled>
          <StarCountStyled>
            <StarIconStyled />
            <span>{formatNumber(repo.stargazers_count)}</span>
          </StarCountStyled>
        </RepoFooterStyled>
      </RepoItemStyled>
    ))}

    {errorMesage && (<div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div>Something went wrong. API get failed.</div>
      <button
        style={{ padding: '0.5rem', marginTop: '1rem' }}
        onClick={fetchRepoList}
      >
        Retry
      </button>
    </div>)}

    {hasMore && !errorMesage && <div ref={loaderRef} style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}

  </RepoListContainerStyled>)
}

export default RepoList