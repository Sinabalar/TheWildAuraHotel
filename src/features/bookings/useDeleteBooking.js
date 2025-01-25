import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteBooking} from "../../services/apiBookings.js";
import toast from "react-hot-toast";

export function useDeleteBooking() {
    const queryClient = useQueryClient();
    const {mutate: deleteBookingFn, isPending: isDeleting} = useMutation({
        mutationFn: (bookingId) => {
            return deleteBooking(bookingId)
        },
        onSuccess: () => {
            toast.success("Booking successfully removed");
            queryClient.invalidateQueries({active: true})
        },
        onError: () => {
            toast.error("Field to remove the booking")
        }
    });


    return {deleteBookingFn, isDeleting}
}