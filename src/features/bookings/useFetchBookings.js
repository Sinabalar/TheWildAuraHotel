import {useQuery} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.js";
import {useSearchParams} from "react-router-dom";

export function useFetchBookings() {

    const [searchParams] = useSearchParams();

    // filter
    const filteredValue = searchParams.get("status");
    const filter = !filteredValue || filteredValue === "all" ? null : {field: "status", value: filteredValue}

    // sort

    const sortByRaw = searchParams.get("sort-by") || "startDate-desc";
    const [field, direction] = sortByRaw.split("-");
    const sortBy = {field, direction}


    const {
        isLoading,
        data: bookings,
        error
    } = useQuery({
        queryKey: ["booking", filter, sortBy],
        queryFn: () => getBookings({filter, sortBy})
    })
    return {isLoading, bookings, error}
}