import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable.jsx";
import {useState} from "react";
import Button from "../ui/Button.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";

function Cabins() {

    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter/Sort</p>
            </Row>
            <Row>
                <CabinTable/>
                <Button onClick={() => setShowForm(curr => !curr)}>{showForm?"Close form":"Add new cabin"}</Button>

                {showForm && <CreateCabinForm/>}

            </Row>
        </>
    );
}

export default Cabins;
