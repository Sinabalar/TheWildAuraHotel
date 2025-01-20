import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow.jsx";
import {useFetchCabins} from "./useFetchCabins.js";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import {useSearchParams} from "react-router-dom";

export default function CabinTable() {

    const {isLoading, cabins, error} = useFetchCabins();

    const [searchParams] = useSearchParams();
    const filterValue = searchParams.get("discount") || "all";
    let filteredCabins;
    switch (filterValue) {
        case "all":
            filteredCabins = cabins;
            break;
        case "no-discount":
            filteredCabins = cabins?.filter((el) => el.discount === 0);
            break;
        case "with-discount":
            filteredCabins = cabins?.filter((el) => el.discount !== 0);
            break;
        default:
            filteredCabins = cabins;
    }

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
                <Table.Body data={filteredCabins} render={el => <CabinRow key={el.id} cabin={el}/>}/>
            </Table>
        </Menus>
    );
}