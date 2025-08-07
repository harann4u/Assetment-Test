import type { RepoItems } from "../../components/repoList/repoList";
import { AxiosInstance } from "../axiosinstance";



export const repoListApi = async (page: number) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = await AxiosInstance.get(`/search/repositories?q=created:>2024-07-15&sort=stars&order=desc&page=${page}`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = response.data.items.map((item: any) => {
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                owner: {
                    avatar_url: item.avatar_url,
                    login: item.login
                },
                full_name: item.full_name,
                stargazers_count: item.stargazers_count
            }
        })
        const responseData: RepoItems = {
            hasError: false,
            errorMessage: "",
            items: data,
            hasMore:response.incomplete_results
        }
        return responseData
    } catch (e) {
        console.log(" API get Failed expection", e)
        return {
            hasError: true,
            errorMessage: "API get Failed",
            items: [],
            hasMore:false
        };
    }

}