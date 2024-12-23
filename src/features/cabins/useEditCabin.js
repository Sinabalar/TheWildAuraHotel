import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createAndEditCabin} from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export function useEditCabin() {

    const queryClient = useQueryClient()

    const {mutate: editCabin, isPending: isEditing} = useMutation({

        mutationFn: ({newCabinData, id}) => {
            return createAndEditCabin(newCabinData, id)
        },
        onSuccess: () => {
            toast.success("new cabin is edited successfully")
            return queryClient.invalidateQueries({queryKey: ["cabins"]})
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    return {editCabin, isEditing}

}