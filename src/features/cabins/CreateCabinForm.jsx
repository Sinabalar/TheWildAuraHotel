import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {createAndEditCabin} from "../../services/apiCabins.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow.jsx";
import {formatCurrency} from "../../utils/helpers.js";

export default function CreateCabinForm({cabinToEdit = {}}) {

    const {id: editId, ...editValues} = cabinToEdit
    const isEditForm = Boolean(editId)

    const {register, handleSubmit, reset, getValues, formState} = useForm({
        defaultValues: isEditForm ? editValues : {}
    })
    const {errors} = formState
    const queryClient = useQueryClient()
    const {mutate: createCabin, isPending: isCreating} = useMutation({

        mutationFn: (newCabin) => {
            return createAndEditCabin(newCabin)
        },
        onSuccess: () => {
            toast.success("new cabin is created")
            reset()
            return queryClient.invalidateQueries({queryKey: ["cabins"]})
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })


    const {mutate: editCabin, isPending: isEditing} = useMutation({

        mutationFn: ({newCabinData, id}) => {
            return createAndEditCabin(newCabinData, id)
        },
        onSuccess: () => {
            toast.success("new cabin is edited successfully")
            reset()
            return queryClient.invalidateQueries({queryKey: ["cabins"]})
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const isProcessing = isCreating || isEditing


    function onSubmit(data) {

        const image = typeof (data.image) === "string"
            ? data.image
            : data.image[0]

        if (isEditForm) {
            editCabin({newCabinData: {...data, image}, id: editId})

        } else {
            createCabin({...data, image: data.image[0]})
        }

    }

    function onError(errors) {
        console.log(errors);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>

            <FormRow
                label={"Cabin name"}
                error={errors}
            >
                <Input type="text" id="name" {...register(
                    "name", {
                        required: "This field is required"
                    })} disabled={isProcessing}/>
            </FormRow>

            <FormRow label={"Capacity"} error={errors}>
                <Input type="number" id="maxCapacity" {...register(
                    "maxCapacity", {
                        required: "This field is required",
                        min: {
                            value: 1,
                            message: "The max capacity should be at least 1"
                        }
                    })} disabled={isCreating}/>
            </FormRow>

            <FormRow label={"Price"} error={errors}>
                <Input type="number" id="regularPrice" {...register(
                    "regularPrice", {
                        required: "This field is required",
                        min: {
                            value: 30,
                            message: `The price should be at least ${formatCurrency(30)}`
                        }
                    })} disabled={isCreating}/>
            </FormRow>

            <FormRow label={"Discount"} error={errors}>
                <Input type="number" id="discount" defaultValue={0} {...register(
                    "discount", {
                        required: "This field is required",
                        validate: (value) => (value <= getValues().regularPrice) || "discount can't be bigger than price"

                    })} disabled={isProcessing}/>
            </FormRow>

            <FormRow label={"Description"} error={errors}>
                <Textarea type="number" id="description" defaultValue="" {...register(
                    "description", {
                        required: "This field is required"
                    })}/>
            </FormRow>

            <FormRow label={"Image"} error={errors}>
                <FileInput
                    id="image"
                    accept="image/*"
                    {...register(
                        "image",
                        {
                            required: isEditForm ? false : "This field is required"
                        })}
                    disabled={isProcessing}/>
            </FormRow>

            <FormRow>
                <Button
                    variation="secondary"
                    type="reset"
                >
                    Cancel
                </Button>
                <Button
                    disabled={isProcessing}>{isEditForm ? (isEditing ? "Editing..." : "Edit cabin") : (isCreating ? "Creating..." : "Create new cabin")}</Button>
            </FormRow>
        </Form>
    );
}
