import { useCallback, useEffect, useRef, useState } from "react";
import { repoListApi } from "../../data/service/repolist.service";
import { RepoDescriptionStyled, RepoFooterStyled, RepoItemStyled, RepoListContainerStyled, RepoOwnerIconStyled, RepoOwnerStyled, RepoTitleStyled, StarCountStyled, StarIconStyled } from "./repoList.styled"


const RepoList = () => {
  const [repoData, setRepoData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);


  const fetchRepoList = async () => {
    const repoList = await repoListApi(page);
    setRepoData(pre => ([...pre, ...repoList.items]));
  }

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && hasMore) {
      setPage(prev => prev + 1);
    }
  }, [hasMore]);

   const formatNumber = (num:number) => {
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
    {repoData.map((repo: any, index: number) => (
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

    {hasMore && <div ref={loaderRef} style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}

  </RepoListContainerStyled>)
}

export default RepoList