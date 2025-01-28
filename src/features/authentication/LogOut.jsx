import ButtonIcon from "../../ui/ButtonIcon.jsx";
import {HiArrowRightOnRectangle} from "react-icons/hi2";
import {useLogOut} from "./useLogOut.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

export default function LogOut() {

    const {logOutFn, isLogingOut} = useLogOut();


    return (
        <ButtonIcon disabled={isLogingOut} onClick={logOutFn}>
            {isLogingOut ? <SpinnerMini/> : <HiArrowRightOnRectangle/>}
        </ButtonIcon>
    );
}