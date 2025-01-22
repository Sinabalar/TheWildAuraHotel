import {useQuery} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.js";
import {useSearchParams} from "react-router-dom";

export function useFetchBookings() {

    const [searchParams] = useSearchParams();
    const filteredValue = searchParams.get("status");
    const filter = !filteredValue || filteredValue === "all" ? null : {field: "status", value: filteredValue}


    const {
        isLoading,
        data: bookings,
        error
    } = useQuery({
        queryKey: ["booking",filter],
        queryFn: () => getBookings({filter})
    })
    return {isLoading, bookings, error}
}