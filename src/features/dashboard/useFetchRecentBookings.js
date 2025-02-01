import {useSearchParams} from "react-router-dom";
import {subDays} from "date-fns";
import {useQuery} from "@tanstack/react-query";
import {getBookingsAfterDate} from "../../services/apiBookings.js";

export function useFetchRecentBookings() {

    const [searchPrams] = useSearchParams();
    const numDays = !searchPrams.get("last") ? 7 : Number(searchPrams.get("last"));
    const queryDate = subDays(new Date(), numDays).toISOString();

    const {data: bookings, isLoading} = useQuery({
        queryFn: () => getBookingsAfterDate(queryDate),
        queryKey: ["bookings", `last-${numDays}`]
    })

    return {bookings, isLoading}

}