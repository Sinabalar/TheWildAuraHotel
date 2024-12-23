import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable.jsx";
import {useState} from "react";
import Button from "../ui/Button.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";

function Cabins() {

    const [showForm, setShowForm] = useState(false)

    function handleShowForm() {
        setShowForm(show => !show)
    }

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter/Sort</p>
            </Row>
            <Row>
                <CabinTable/>
                <Button onClick={handleShowForm}>{showForm ? "Close form" : "Add new cabin"}</Button>

                {showForm && <CreateCabinForm handleShowCreateForm={handleShowForm}/>}

            </Row>
        </>
    );
}

export default Cabins;
