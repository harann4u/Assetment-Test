import type { RepoItems } from "../../components/repoList/repoList";
import { AxiosInstance } from "../axiosinstance";



export const repoListApi = async (page: number) => {
    try {
        const response = await AxiosInstance.get<RepoItems>(`/search/repositories?q=created:>2024-07-15&sort=stars&order=desc&page=${page}`);
        const responseData: RepoItems = {
            hasError: false,
            errorMessage: "",
            items: response.data.items,
            hasMore: response.data.incomplete_results
        }
        return responseData
    } catch (e) {
        console.log(" API get Failed expection", e)
        return {
            hasError: true,
            errorMessage: "API get Failed",
            items: [],
            hasMore: false
        };
    }

}