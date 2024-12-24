import {useQuery} from "@tanstack/react-query";
import {getSettings} from "../../services/apiSettings.js";

export default function useFetchSetting() {
    const {data:settings,isPending:isLoading,error} = useQuery({
        queryKey: ["setting"],
        queryFn: getSettings
    })

    return {settings,isLoading,error}
}