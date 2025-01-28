import supabase from "./supabase.js";

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