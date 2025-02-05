import {useQuery} from "@tanstack/react-query";
import {getStaysTodayActivity} from "../../services/apiBookings.js";

export function useFetchTodayActivity() {
    const {data: activities, isLoading: isGettingActivities} = useQuery({
        queryFn: getStaysTodayActivity,
        queryKey: ["today-activity"]
    })


    return {activities, isGettingActivities}

}