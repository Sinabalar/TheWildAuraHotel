import GlobalStyles from "./styles/globalStyles.js";
import Button from ".././src/ui/Button.jsx";
import Heading from "./ui/Heading.jsx";
import Input from "./ui/Input.jsx";
import StyledApp from "./ui/StyledApp.jsx";

export default function App() {
    return (
        <>
            <GlobalStyles/>
            <StyledApp>
                <Heading>The Wild Aura</Heading>
                <Button onClick={() => alert('checked in')}>Check in</Button>
                <Button onClick={() => alert('checked out')}>Check out</Button>
                <Input type={"number"} placeholder={"number of guests"}/>
            </StyledApp>
        </>
    );
}
