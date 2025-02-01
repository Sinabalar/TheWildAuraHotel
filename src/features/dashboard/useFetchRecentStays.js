import {useSearchParams} from "react-router-dom";
import {subDays} from "date-fns";
import {useQuery} from "@tanstack/react-query";
import {getStaysAfterDate} from "../../services/apiBookings.js";

export function useFetchRecentStays() {

    const [searchParams] = useSearchParams();
    const numDays = !searchParams.get("last") ? 7 : Number(searchParams.get("last"));
    const queryDate = subDays(new Date(), numDays).toISOString();

    const {data: stays, isLoading} = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ["stays", `last-${numDays}`]
    });

    const conformedStays = stays?.filter(el => el.status === "checked-in" || el.status === "checked-out");

    return {stays, conformedStays, isLoading}

}