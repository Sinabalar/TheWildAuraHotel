import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow.jsx";
import {useFetchCabins} from "./useFetchCabins.js";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import {useSearchParams} from "react-router-dom";

export default function CabinTable() {

    const {isLoading, cabins, error} = useFetchCabins();
    const [searchParams] = useSearchParams();


    //Filter
    const filterValue = searchParams.get("discount") || "all";
    let filteredCabins = [];  // Initialize with empty array
    switch (filterValue) {
        case "all":
            filteredCabins = cabins || [];
            break;
        case "no-discount":
            filteredCabins = cabins ? cabins.filter((el) => el.discount === 0) : [];
            break;
        case "with-discount":
            filteredCabins = cabins ? cabins.filter((el) => el.discount !== 0) : [];
            break;
        default:
            filteredCabins = cabins || [];
    }

    // Sort

    const sortBy = searchParams.get("sort-by") || "created_at-asc";
    const [field, direction] = sortBy.split('-');
    const modifier = direction === "asc" ? 1 : -1;
    const sortedCabins = filteredCabins.sort((a, b) => {
        if (typeof a[field] === 'string') {
            return a[field].localeCompare(b[field]) * modifier;
        }
        // For numerical values
        return (a[field] - b[field]) * modifier;
    })
    if (isLoading) return <Spinner/>

    return (
        <Menus>
            <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
                <Table.Header role="row">
                    <div></div>
                    <div>Cabin</div>
                    <div>Capacity</div>
                    <div>Price</div>
                    <div>Discount</div>
                    <div></div>
                </Table.Header>
                <Table.Body data={sortedCabins} render={el => <CabinRow key={el.id} cabin={el}/>}/>
            </Table>
        </Menus>
    );
}