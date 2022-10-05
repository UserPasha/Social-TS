import axios from "axios";

const instance = axios.create({
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        withCredentials: true,
        headers: {
            "API-KEY": "4f8341e7-d33a-4d8b-8d10-b8d41fc32b1d"
        }
    }
)


export const usersAPI = {
    getListOfUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getCurrentPage(pageNumber: number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id: number | string) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id: number | string) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    userProfile(id: string | number) {
        console.warn("deprecated method, please use ProfileAPI")
        return profileAPI.userProfile(id)
    }
}

export const profileAPI = {
    userProfile(userId: number | string) {
        return instance.get("profile/" + userId)
    },
    getStatus(userId: number | string) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(status: string) {
        return instance.put("profile/status", {status: status})
    },
    saveImage(image: any){
        let Data = new FormData()
        Data.append("image", image)
        return instance.put('profile/photo', Data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfileInfo(data: any){
        return instance.put('profile', data)
    }
}

export const authAPI = {
    me() {
        return instance.get("auth/me")
    },
    login(email: string, password: string, rememberMe: boolean){
        return instance.post("auth/login", {email, password, rememberMe})
    },
    logout(){
        return instance.delete("auth/login")
    }
}