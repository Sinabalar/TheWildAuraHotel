import styled from "styled-components";
import {useFetchRecentBookings} from "./useFetchRecentBookings.js";
import Spinner from "../../ui/Spinner.jsx";
import {useFetchRecentStays} from "./useFetchRecentStays.js";
import Stats from "./Stats.jsx";
import {useFetchCabins} from "../cabins/useFetchCabins.js";
import SalesChart from "./SalesChart.jsx";
import DurationChart from "./DurationChart.jsx";
import TodayActivity from "../check-in-out/TodayActivity.jsx";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`;


export default function DashboardLayout() {

    const {bookings, isLoading: isLoadingBookings, numDays} = useFetchRecentBookings();
    const {conformedStays, isLoading: isLoadingStays} = useFetchRecentStays();
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
            <TodayActivity/>
            <DurationChart confirmedStays={conformedStays}/>
            <SalesChart bookings={bookings} numDays={numDays}/>
        </StyledDashboardLayout>
    );
}
