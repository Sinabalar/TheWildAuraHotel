import supabase, {supabaseUrl} from "./supabase.js";

export async function getCabins() {

    const {data, error} = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.error(error)
        throw new Error('cabins could not be loaded')
    }
    return data

}

export async function createCabin(newCabin) {

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    //Upload the cabinData

    const {data, error} = await supabase
        .from('cabins')
        .insert([{
            ...newCabin,
            image: imagePath
        }])
        .select()

    if (error) {
        console.error(error.message)
        throw new Error('cabins could not be created')
    }

    //Upload cabinImage

    const {error: storageError} = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)

    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id)

        console.error(storageError)
        throw new Error('cabins could not be uploaded and the cabin was not created.')
    }


    return data

}

export async function deleteCabin(id) {


    const {error} = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)

    if (error) {
        console.error(error.message)
        throw new Error('cabins could not be deleted')
    }
}