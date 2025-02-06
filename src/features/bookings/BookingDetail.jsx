import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import {useMoveBack} from "../../hooks/useMoveBack";
import {useFetchBooking} from "./useFetchBooking.js";
import {useNavigate} from "react-router-dom";
import Spinner from "../../ui/Spinner.jsx";
import {HiArrowUpOnSquare} from "react-icons/hi2";
import {useCheckout} from "../check-in-out/useCheckout.js";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import {useDeleteBooking} from "./useDeleteBooking.js";
import Empty from "../../ui/Empty.jsx";

const HeadingGroup = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;

function BookingDetail() {

    const {booking, isLoading} = useFetchBooking();
    const {checkOut, isCheckingOut} = useCheckout();
    const {deleteBookingFn, isDeleting} = useDeleteBooking();
    const moveBack = useMoveBack();
    const navigate = useNavigate();

    if (isLoading) return <Spinner/>
    if(!booking)return <Empty resourceName={"booking"}/>

    const {status, id: bookingId} = booking;


    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        "checked-out": "silver",
    };


    return (
        <>
            <Row type="horizontal">
                <HeadingGroup>
                    <Heading as="h1">Booking #{bookingId}</Heading>
                    <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
                </HeadingGroup>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>

            <BookingDataBox booking={booking}/>

            <ButtonGroup>

                <Modal>
                    <Modal.Open opens={"book-delete-form"}>
                        <Button variation={"danger"}>Delete</Button>
                    </Modal.Open>
                    <Modal.Window name={"book-delete-form"}>
                        <ConfirmDelete
                            resourceName={"booking"}
                            onConfirm={() => deleteBookingFn(bookingId, {
                                onSuccess: () => {
                                    navigate(-1)
                                }
                            })}
                            disabled={isDeleting}
                        />
                    </Modal.Window>
                </Modal>

                {
                    status === "unconfirmed" &&
                    <Button
                        onClick={() => navigate(`/bookings/${bookingId}`)}
                    >
                        Check in
                    </Button>
                }

                {
                    status === "checked-in" &&
                    <Button
                        icon={<HiArrowUpOnSquare/>}
                        disabled={isCheckingOut}
                        onClick={() => checkOut(bookingId)}
                    >
                        Check out
                    </Button>
                }

                <Button variation="secondary" onClick={moveBack}>
                    Back
                </Button>
            </ButtonGroup>
        </>
    );
}

export default BookingDetail;
