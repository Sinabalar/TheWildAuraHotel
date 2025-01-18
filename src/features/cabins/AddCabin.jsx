import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import Modal from "../../ui/Modal.jsx";


export default function AddCabin() {
    return (
        <div>
            <Modal>
                <Modal.Open opens={"create-cabin-form"}>
                    <Button>Add new cabin</Button>
                </Modal.Open>
                <Modal.Window name={"create-cabin-form"}>
                    <CreateCabinForm/>
                </Modal.Window>
            </Modal>
        </div>
    );
}

// export default function AddCabin() {
//
//     const [isOpenModal, setIsOpenModal] = useState(false)
//
//     function handleShowModal() {
//         setIsOpenModal(show => !show)
//     }
//
//     return (
//         <div>
//             <Button onClick={handleShowModal}>{isOpenModal ? "Close form" : "Add new cabin"}</Button>
//
//             {
//                 isOpenModal &&
//                 <Modal handleShowModal={handleShowModal}>
//                     <CreateCabinForm handleShowCreateForm={handleShowModal}/>
//                 </Modal>
//             }
//
//         </div>
//     );
// }