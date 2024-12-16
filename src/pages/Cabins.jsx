import Heading from "../ui/Heading";
import Row from "../ui/Row";
import {useEffect} from "react";
import {getCabins} from "../services/apiCabins.js";

function Cabins() {

    useEffect(() => {
        async function fetchCabins(){
            const data = await getCabins()
            console.log(data);
        }
        fetchCabins()
    }, []);

    return (
        <Row type="horizontal">
            <Heading as="h1">All cabins</Heading>
            <p>TEST</p>
        </Row>
    );
}

export default Cabins;
