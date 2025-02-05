import Button from "../../ui/Button";
import {useCheckout} from "./useCheckout.js";
import {useQueryClient} from "@tanstack/react-query";

function CheckoutButton({bookingId}) {

    const {checkOut, isCheckingOut} = useCheckout();
    const queryClient = useQueryClient();

    return (
        <Button
            variation="primary"
            size="small"
            disabled={isCheckingOut}
            onClick={() => checkOut(bookingId, {onSuccess: () => queryClient.invalidateQueries({queryKey: ["today-activity"]})})}
        >
            Check out
        </Button>
    );
}

export default CheckoutButton;
