import styled from "styled-components";
import {Outlet} from "react-router-dom";
import SideBar from "./SideBar.jsx";
import Header from "./Header.jsx";


const StyledAppLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
`

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
`

const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`

export default function AppLayout() {
    return (
        <StyledAppLayout>
            <Header/>
            <SideBar/>
            <Main>
                <Container>
                    <Outlet/>
                </Container>
            </Main>
        </StyledAppLayout>
    );
}