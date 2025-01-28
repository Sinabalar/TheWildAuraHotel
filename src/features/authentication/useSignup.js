import {useMutation} from "@tanstack/react-query";
import {signUp as signUpApi} from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useSignup() {

    const {mutate: signup, isPending: isSigningUp} = useMutation({

        mutationFn: ({fullName, email, password}) => signUpApi({fullName, email, password}),
        onSuccess: (data) => {
            console.log(data);
            toast.success("Account successfully created");
        },
        onError: () => {
            toast.error("There was an problem creating new user");
        }

    })
    return {signup, isSigningUp}
}