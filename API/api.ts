import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY":"94a183c4-4488-46bd-a976-700ddf897df8"
    }}
)


export const usersAPI = {
    getListOfUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getCurrentPage(pageNumber: number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id: number| string) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id: number| string) {
        return instance.post(`follow/${id}`).then(response => response.data)
    }
}