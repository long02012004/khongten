import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ManageUser.scss";
import _ from "lodash";

const ModalViewUser = ({ show, setShow, dataUpdate, resetUpdateData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setPreviewImage("");
    resetUpdateData();
  };

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email || "");
      setPassword(dataUpdate.password || "");
      setUsername(dataUpdate.username || "");
      setRole(dataUpdate.role || "USER");
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      backdrop="static"
      className="modal-add-user"
    >
      <Modal.Header closeButton>
        <Modal.Title>View User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              disabled
              className="form-control"
              value={email}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              type="password"
              disabled
              className="form-control"
              value={password}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              disabled
              className="form-control"
              value={username}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Role</label>
            <select className="form-select" disabled value={role}>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <div className="col-md-12 img-preview">
            {previewImage ? (
              <img src={previewImage} alt="Preview" />
            ) : (
              <span>Preview image</span>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalViewUser;
