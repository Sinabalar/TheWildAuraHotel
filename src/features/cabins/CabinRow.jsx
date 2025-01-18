import styled from "styled-components";

import {formatCurrency} from "../../utils/helpers.js";
import CreateCabinForm from "./CreateCabinForm.jsx";
import {useDeleteCabin} from "./useDeleteCabins.js";
import {HiOutlineSquare2Stack} from "react-icons/hi2";
import {HiOutlinePencil, HiOutlineTrash} from "react-icons/hi";
import {useCreateCabin} from "./useCreateCabin.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import ButtonGroup from "../../ui/ButtonGroup.jsx";
import Modal from "../../ui/Modal.jsx";

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;
    padding: 1.8rem 3.4rem;

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

const Img = styled.img`
    display: block;
    width: 6.4rem;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: center;
    transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono";
`;

const Price = styled.div`
    font-family: "Sono";
    font-weight: 600;
`;

const Discount = styled.div`
    font-family: "Sono";
    font-weight: 500;
    color: var(--color-green-700);
`;


export default function CabinRow({cabin}) {

    const {deleteCabin, isDeleting} = useDeleteCabin()
    const {isCreating, createCabin: duplicateCabin} = useCreateCabin()

    const {
        id: cabinId,
        name,
        maxCapacity,
        regularPrice,
        discount,
        description,
        image
    } = cabin


    function handleDuplicate() {
        duplicateCabin({
            name: `Copy of ${name}`,
            maxCapacity,
            regularPrice,
            discount,
            description,
            image
        })
    }


    return (
        <>
            <TableRow>
                <Img src={image}/>
                <Cabin>{name}</Cabin>
                <div>{maxCapacity}</div>
                <Price>{formatCurrency(regularPrice)}</Price>
                {discount
                    ? <Discount>{formatCurrency(discount)}</Discount>
                    : <span>&mdash;</span>}
                <ButtonGroup>
                    <button
                        onClick={handleDuplicate}
                        disabled={isCreating}
                    >{isCreating ? <SpinnerMini/> : <HiOutlineSquare2Stack/>}</button>
                    <Modal>
                        <Modal.Open opens={"edit-cabin-form"}>
                            <button
                            >{<HiOutlinePencil/>}
                            </button>
                        </Modal.Open>
                        <Modal.Window name={"edit-cabin-form"}>
                            <CreateCabinForm
                                cabinToEdit={cabin}
                            />
                        </Modal.Window>
                    </Modal>
                    <button
                        onClick={() => deleteCabin(cabinId)}
                        disabled={isDeleting}
                    >{isDeleting ? <SpinnerMini/> : <HiOutlineTrash/>}
                    </button>
                </ButtonGroup>
            </TableRow>
        </>
    )
        ;
}
