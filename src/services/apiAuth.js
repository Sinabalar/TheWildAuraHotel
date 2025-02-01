import supabase, {supabaseUrl} from "./supabase.js";

export async function signUp({fullName, email, password}) {
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName,
                avatar: "",

            }
        }

    });
    if (error) throw new Error(error.message);

    return data;
}

export async function login({email, password}) {

    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error) {
        throw new Error(error.message)
    }
    console.log(data);
    return data
}

export async function getCurrUser() {

    const {data: session} = await supabase.auth.getSession();

    if (!session.session) return null;

    const {data, err} = await supabase.auth.getUser();

    console.log(data);

    if (err) {
        throw new Error(err.message);
    }
    return data?.user
}

export async function logOut() {
    const {error} = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}

export async function updateCurrUser({password, fullName, avatar}) {


    //1. update password or userName

    let updateData;

    if (password) updateData = {password};
    if (fullName) updateData = {data: {fullName}};

    const {data, error} = await supabase.auth.updateUser(updateData)

    if (error) throw new Error(error.message);
    if (!avatar) return data

    //2. update the avatar image

    const fileName = `avatar-${data.user.id}-${Math.random()}`;

    const {error: storageError} = await supabase.storage.from("avatars").upload(fileName, avatar);

    if (storageError) throw new Error(storageError.message);


    //3. update avatar in the user

    const {data: updatedUser, error: updatedUserError} = await supabase.auth.updateUser({
        data: {
            avatar: `${supabaseUrl}/storage/v1/object/public/avatars//${fileName}`
        }
    });

    if (updatedUserError) throw new Error(updatedUserError.message);
    return updatedUser;

}