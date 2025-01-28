import {useQuery} from "@tanstack/react-query";
import {getCurrUser} from "../../services/apiAuth.js";

export function useFetchUser() {
    const {data: user, isLoading} = useQuery({
        queryFn: getCurrUser,
        queryKey: ["user"]
    })
    return {user, isLoading, isAuthenticated: user?.role === "authenticated"}
}