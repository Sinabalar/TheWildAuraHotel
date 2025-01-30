import {useState} from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import {useFetchUser} from "./useFetchUser.js";
import {useUpdateUser} from "./useUpdateUser.js";

function UpdateUserDataForm() {
    // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
    const {
        user: {
            email,
            user_metadata: {fullName: currentFullName},
        },
    } = useFetchUser();


    const [fullName, setFullName] = useState(currentFullName);
    const [avatar, setAvatar] = useState(null);
    const {updateUserFn, isUpdatingUser} = useUpdateUser()

    function handleSubmit(e) {
        e.preventDefault();
        if (!fullName) return;

        updateUserFn({fullName, avatar})

    }

    function handleCancel() {
        setFullName(currentFullName);
        setAvatar(null);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormRow label="Email address">
                <Input value={email} disabled={true}/>
            </FormRow>
            <FormRow label="Full name">
                <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    id="fullName"
                    disabled={isUpdatingUser}
                />
            </FormRow>
            <FormRow label="Avatar image">
                <FileInput
                    id="avatar"
                    accept="image/*"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    disabled={isUpdatingUser}
                />
            </FormRow>
            <FormRow>
                <Button onClick={handleCancel} type="reset" variation="secondary" disabled={isUpdatingUser}>
                    Cancel
                </Button>
                <Button disabled={isUpdatingUser}>Update account</Button>
            </FormRow>
        </Form>
    );
}

export default UpdateUserDataForm;
