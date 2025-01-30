import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateCurrUser} from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useUpdateUser() {

    const queryClient = useQueryClient();
    const {mutate: updateUserFn, isPending: isUpdatingUser} = useMutation({
        mutationFn: ({fullName, avatar, password}) => updateCurrUser({fullName, avatar, password}),
        onSuccess: () => {

            toast.success("user update successfully");
            queryClient.invalidateQueries({
                queryKey: ["user"]
            });

        },
        onError: (err) => toast.error(err.message)

    });

    return {updateUserFn, isUpdatingUser}

}