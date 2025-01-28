import {useMutation, useQueryClient} from "@tanstack/react-query";
import {logOut} from "../../services/apiAuth.js";
import {useNavigate} from "react-router-dom";

export function useLogOut() {

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: logOutFn, isPending: isLogingOut} = useMutation({
        mutationFn: logOut,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/login", {replace: true})
        },
    })
    return {logOutFn, isLogingOut}
}