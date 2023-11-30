import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MapWrapper from "../map/location-button";

function ModalMap() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const userData = useSelector((state: any) => state.user.userInfo);

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  const handleBuy = () => {
    setShow(false);
    navigate("/buy", { replace: true });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <main>
            <MapWrapper user={userData} />
          </main>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBuy}>
            contiune
          </Button>
          <Button variant="primary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMap;
