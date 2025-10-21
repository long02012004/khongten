import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteQuizForAdmin } from "../../../../services/ApiServices";
import { toast } from "react-toastify";

const ModalDeleteQuiz = ({ show, setShow, dataDelete, fetchQuiz }) => {
  const handleClose = () => setShow(false);
  const handleSubmitDeleteQuiz = async () => {
    let res = await deleteQuizForAdmin(dataDelete.id);
    if (res.data && res.data.EC === 0) {
      toast.success(res.data.EM);
      handleClose();
      await fetchQuiz();
    }
    if (res.data && res.data.EC !== 0) {
      toast.error(res.data.EM);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete the Quiz?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this Quiz? Id:
          <b>{dataDelete && dataDelete.id ? dataDelete.id : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteQuiz();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteQuiz;
