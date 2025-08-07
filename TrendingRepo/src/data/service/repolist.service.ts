import { AxiosInstance } from "../axiosinstance";

interface RepoListResponse {
    incomplete_results: boolean;
    items: RepoListItem[];
    total_count:number
}

interface RepoListItem {
    id: string,
    description: string;
}

export const repoListApi = async (page:number) => {
    try {
        const response = await AxiosInstance.get<RepoListResponse>(`/search/repositories?q=created:>2024-07-15&sort=stars&order=desc&page=${page}`);
        return response.data
    } catch(e){
        console.log("expection", e)
        return [];
    } 
       
}