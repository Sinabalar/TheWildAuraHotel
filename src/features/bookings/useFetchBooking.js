import {useQuery} from "@tanstack/react-query";
import {getBooking} from "../../services/apiBookings.js";
import {useParams} from "react-router-dom";

export function useFetchBooking() {

    const {bookingId} = useParams();

    const {data:booking, isLoading, error} = useQuery({
        queryKey: ["booking"],
        queryFn: () => getBooking(bookingId),
        retry: false
    })
    return {booking, isLoading, error}
}