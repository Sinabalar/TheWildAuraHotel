import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createAndEditCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export function useCreateCabin() {

    const queryClient = useQueryClient()
    const {mutate: createCabin, isPending: isCreating} = useMutation({

        mutationFn: (newCabin) => {
            return createAndEditCabin(newCabin)
        },
        onSuccess: () => {
            toast.success("new cabin is created")
            return queryClient.invalidateQueries({queryKey: ["cabins"]})
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    return {createCabin, isCreating}

}