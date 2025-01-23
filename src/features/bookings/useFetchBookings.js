import {useQuery} from "@tanstack/react-query";
import {getBookings} from "../../services/apiBookings.js";
import {data, useSearchParams} from "react-router-dom";

export function useFetchBookings() {

    const [searchParams] = useSearchParams();

    // filter
    const filteredValue = searchParams.get("status");
    const filter = !filteredValue || filteredValue === "all" ? null : {field: "status", value: filteredValue}

    // sort
    const sortByRaw = searchParams.get("sort-by") || "startDate-desc";
    const [field, direction] = sortByRaw.split("-");
    const sortBy = {field, direction}

    //pagination
    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    // query
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["booking", filter, sortBy, page],
        queryFn: () => getBookings({filter, sortBy, page})
    })
    return {
        isLoading,
        bookings: data?.data,
        count: data?.count,
        error
    }
}