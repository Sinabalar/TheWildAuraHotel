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
                <Heading as={"h1"}>The Wild Aura</Heading>
                <Heading as={"h2"}>Check in and out</Heading>
                <Button onClick={() => alert('checked in')}>Check in</Button>
                <Button onClick={() => alert('checked out')}>Check out</Button>
                <Heading as={"h3"}>Form</Heading>
                <Input type={"number"} placeholder={"number of guests"}/>
            </StyledApp>
        </>
    );
}
