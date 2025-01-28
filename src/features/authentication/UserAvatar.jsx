import styled from "styled-components";
import {useFetchUser} from "./useFetchUser.js";

const StyledUserAvatar = styled.div`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--color-grey-600);
`;

const Avatar = styled.img`
    display: block;
    width: 4rem;
    width: 3.6rem;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    outline: 2px solid var(--color-grey-100);
`;


export default function UserAvatar() {

    const {user} = useFetchUser();
    const {fullName, avatar} = user.user_metadata

    return (
        <StyledUserAvatar>
            <Avatar alt={`Avatar of ${fullName}`} src={avatar||"default-user.jpg"}/>
            <span>{fullName}</span>
        </StyledUserAvatar>
    );
}