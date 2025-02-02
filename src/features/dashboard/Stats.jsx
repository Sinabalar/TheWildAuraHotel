import Stat from "./Stat.jsx";
import {HiOutlineBriefcase, HiOutlineChartBar} from "react-icons/hi";
import {HiOutlineBanknotes, HiOutlineCalendarDays} from "react-icons/hi2";
import {formatCurrency} from "../../utils/helpers.js";

export default function Stats({bookings, confirmedStays, numDays, numCabins}) {

    const numBookings = bookings.length;

    const numCheckins = confirmedStays.length

    const totalSales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

    const occupancy = confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) / (numDays * numCabins);

    return (
        <>
            <Stat
                title={"Bookings"}
                color={"blue"}
                icon={<HiOutlineBriefcase/>}
                value={numBookings}
            />
            <Stat
                title={"Sales"}
                color={"green"}
                icon={<HiOutlineBanknotes/>}
                value={formatCurrency(totalSales)}
            />
            <Stat
                title={"Check-ins"}
                color={"indigo"}
                icon={<HiOutlineCalendarDays/>}
                value={numCheckins}
            />
            <Stat
                title={"occupancy rate"}
                color={"yellow"}
                icon={<HiOutlineChartBar/>}
                value={Math.round(occupancy * 100) + "%"}
            />
        </>
    );
}