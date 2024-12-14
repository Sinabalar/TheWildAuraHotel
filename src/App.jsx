import GlobalStyles from "./styles/globalStyles.js";
import Button from ".././src/ui/Button.jsx";
import Heading from "./ui/Heading.jsx";
import Input from "./ui/Input.jsx";
import StyledApp from "./ui/StyledApp.jsx";
import Row from "./ui/Row.jsx";

export default function App() {
    return (
        <>
            <GlobalStyles/>
            <StyledApp>
                <Row>

                    <Row type={"horizontal"}>

                        <Heading as={"h1"}>The Wild Aura</Heading>
                        <div>

                            <Heading as={"h2"}>Check in and out</Heading>
                            <Button
                                onClick={() => alert('checked in')}
                            >Check in</Button>
                            <Button
                                size={"small"}
                                variation={"secondary"}
                                onClick={() => alert('checked out')}>Check out</Button>
                        </div>
                    </Row>
                    <Row>

                        <form>
                            <Heading as={"h3"}>Form</Heading>
                            <Input type={"number"} placeholder={"number of guests"}/>
                            <Input type={"number"} placeholder={"number of guests"}/>
                        </form>
                    </Row>
                </Row>
            </StyledApp>
        </>
    );
}
