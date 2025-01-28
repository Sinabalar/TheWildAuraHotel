import {useMutation, useQueryClient} from "@tanstack/react-query";
import {login} from "../../services/apiAuth.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: loginFn, isPending: logingIn} = useMutation({
        mutationFn: ({email, password}) => {
            return login({email, password})
        },
        onSuccess: (data) => {

            queryClient.setQueryData(["user"], data.user)
            navigate("/dashboard", {replace: true});

        },
        onError: () => {
            toast.error("Provided email or password are invalid")
        }
    })

    return {loginFn, logingIn}

}