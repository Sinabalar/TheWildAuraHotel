import styled from "styled-components";
import {useFetchRecentBookings} from "./useFetchRecentBookings.js";
import Spinner from "../../ui/Spinner.jsx";
import {useFetchRecentStays} from "./useFetchRecentStays.js";
import Stats from "./Stats.jsx";
import {useFetchCabins} from "../cabins/useFetchCabins.js";
import SalesChart from "./SalesChart.jsx";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`;


export default function DashboardLayout() {

    const {bookings, isLoading: isLoadingBookings, numDays} = useFetchRecentBookings();
    const {stays, conformedStays, isLoading: isLoadingStays} = useFetchRecentStays();
    const {cabins, isLoading: isLoadingCabins} = useFetchCabins()

    if (isLoadingBookings || isLoadingStays || isLoadingCabins) return <Spinner/>;


    return (
        <StyledDashboardLayout>
            <Stats
                bookings={bookings}
                confirmedStays={conformedStays}
                numDays={numDays}
                numCabins={cabins.length}
            />
            <div>Today's activity</div>
            <div>Chart stay durations</div>
            <SalesChart bookings={bookings} numDays={numDays}/>
        </StyledDashboardLayout>
    );
}
