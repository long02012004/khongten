import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteUser = ({ show, setShow, dataDelete }) => {
  const handleClose = () => setShow(false);
  const handleSubmit = () => {
    alert(`User with email ${dataDelete.email} has been deleted.`);
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
