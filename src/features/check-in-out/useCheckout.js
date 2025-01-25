import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateBooking} from "../../services/apiBookings.js";
import toast from "react-hot-toast";

export function useCheckout() {
    const queryClient = useQueryClient();
    const {mutate: checkOut, isPending: isCheckingOut} = useMutation({
        mutationFn: (bookingId) => {
            updateBooking(bookingId, {status: "checked-out"})
        },
        onSuccess: () => {
            toast.success("successfully checked out")
            queryClient.invalidateQueries({active: true})
        },
        onError: () => {
            toast.error("field to checked out")
        },
    });
    return {checkOut, isCheckingOut}
}