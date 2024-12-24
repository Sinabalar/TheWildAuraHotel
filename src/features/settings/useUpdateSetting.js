import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateSetting as updateSettingApi} from "../../services/apiSettings.js";
import toast from "react-hot-toast";

export function useUpdateSetting() {

    const queryClient = useQueryClient()
    const {mutate: updateSetting, isPending: isUpdatingSetting} = useMutation({
        mutationFn: (newSetting) => {
            return updateSettingApi(newSetting)
        },
        onSuccess: () => {
            toast.success("Settings are updated successfully")
            return queryClient.invalidateQueries({queryKey: ["setting"]})
        }
    })

    return {updateSetting, isUpdatingSetting}
}