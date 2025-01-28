import {useFetchUser} from "../features/authentication/useFetchUser.js";
import Spinner from "./Spinner.jsx";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


const Fullpage = styled.div`
    height: 100vh;
    background-color: var(--colo-grey-50);
    display: flex;
    align-items: center;

`;
export default function ProtectedRoute({children}) {

    const navigate = useNavigate();

    const {isLoading, isAuthenticated} = useFetchUser();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/login");
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading) return <Fullpage><Spinner/></Fullpage>

    if (isAuthenticated) return children;
}