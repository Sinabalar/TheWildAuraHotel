import ButtonIcon from "./ButtonIcon.jsx";
import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi";
import {DarkModeProvider, useDarkMode} from "../context/darkModeContext.jsx";

export default function DarkModeToggle() {

    const {isDarkMode, toggleDarkMode} = useDarkMode();

    return (
        <ButtonIcon onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/> }
        </ButtonIcon>
    );
}