import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/ApiServices";
import { toast } from "react-toastify";

const ModalDeleteUser = ({ show, setShow, dataDelete, fetchListUsers }) => {
  const handleClose = () => setShow(false);
  const handleSubmit = async () => {
    let res = await deleteUser(dataDelete.id);
    if (res.data && res.data.EC === 0) {
      toast.success(res.data.EM);
      handleClose();
      await fetchListUsers();
    }
    if (res.data && res.data.EC !== 0) {
      toast.error(res.data.EM);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete the user?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this user? Email:
          <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
