import {useMutation} from "@tanstack/react-query";
import {login} from "../../services/apiAuth.js";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {

    const navigate = useNavigate();
    const {mutate: loginFn, isPending: logingIn} = useMutation({
        mutationFn: ({email, password}) => {
            return login({email, password})
        },
        onSuccess: () => {
            navigate("/dashboard")
        },
        onError: () => {
            toast.error("Provided email or password are invalid")
        }
    })

    return {loginFn, logingIn}

}