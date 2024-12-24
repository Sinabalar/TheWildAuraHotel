import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useFetchSetting from "./useFetchSetting.js";
import Spinner from "../../ui/Spinner.jsx";
import {useForm} from "react-hook-form";

function UpdateSettingsForm() {

    const {settings, isLoading, error} = useFetchSetting()
    const {register, handleSubmit} = useForm({
        defaultValues: settings
    })

    if (isLoading) return <Spinner/>

    return (
        <Form>
            <FormRow label='Minimum nights/booking'>
                <Input type='number' id='min-nights' defaultValue={settings.minBookingLength}/>
            </FormRow>
            <FormRow label='Maximum nights/booking'>
                <Input type='number' id='max-nights' defaultValue={settings.maxBookingLength}/>
            </FormRow>
            <FormRow label='Maximum guests/booking'>
                <Input type='number' id='max-guests' defaultValue={settings.maxGuestsPerBooking}/>
            </FormRow>
            <FormRow label='Breakfast price'>
                <Input type='number' id='breakfast-price' defaultValue={settings.breakfastPrice}/>
            </FormRow>
        </Form>
    );
}

export default UpdateSettingsForm;
