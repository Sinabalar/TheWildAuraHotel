import styled from "styled-components";
import {useFetchRecentBookings} from "./useFetchRecentBookings.js";
import Spinner from "../../ui/Spinner.jsx";
import {useFetchRecentStays} from "./useFetchRecentStays.js";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`;


export default function DashboardLayout() {

    const {bookings, isLoading: isLoadingBookings} = useFetchRecentBookings();
    const {stays, conformedStays, isLoading: isLoadingStays} = useFetchRecentStays();
    console.log(conformedStays);

    if (isLoadingBookings || isLoadingStays) return <Spinner/>;


    return (
        <StyledDashboardLayout>
            <div>Statics</div>
            <div>Today's activity</div>
            <div>Chart stay durations</div>
            <div>Chart sales</div>
        </StyledDashboardLayout>
    );
}
