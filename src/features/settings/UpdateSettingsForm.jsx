import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useFetchSetting from "./useFetchSetting.js";
import Spinner from "../../ui/Spinner.jsx";
import {useUpdateSetting} from "./useUpdateSetting.js";

function UpdateSettingsForm() {

    const {settings, isLoading} = useFetchSetting()
    const {updateSetting, isUpdatingSetting} = useUpdateSetting()

    function handleUpdate(e, field) {
        const {value} = e.target

        if (!value) return
        updateSetting({[field]: value})
    }

    if (isLoading) return <Spinner/>

    return (
        <Form>
            <FormRow label='Minimum nights/booking'>
                <Input
                    type='number'
                    id='min-nights'
                    defaultValue={settings.minBookingLength}
                    onBlur={(e) => handleUpdate(e, "minBookingLength")}
                    disabled={isUpdatingSetting}
                />
            </FormRow>

            <FormRow label='Maximum nights/booking'>
                <Input
                    type='number'
                    id='max-nights'
                    defaultValue={settings.maxBookingLength}
                    onBlur={(e) => handleUpdate(e, "maxBookingLength")}
                    disabled={isUpdatingSetting}
                />
            </FormRow>

            <FormRow label='Maximum guests/booking'>
                <Input
                    type='number'
                    id='max-guests'
                    defaultValue={settings.maxGuestsPerBooking}
                    onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
                    disabled={isUpdatingSetting}
                />
            </FormRow>

            <FormRow label='Breakfast price'>
                <Input
                    type='number'
                    id='breakfast-price'
                    defaultValue={settings.breakfastPrice}
                    onBlur={(e) => handleUpdate(e, "breakfastPrice")}
                    disabled={isUpdatingSetting}
                />
            </FormRow>
        </Form>
    );
}

export default UpdateSettingsForm;
