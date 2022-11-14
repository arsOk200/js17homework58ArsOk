import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App() {

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

   const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="modal-div">
        <button className='btn btn-primary'  onClick={() => setShowModal(true)}>Show modal</button>
        <Modal
          show={showModal}
          title="Some kinda modal title"
          close={closeModal}>
          <p>This is modal content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum id illo in libero officia qui quo repellendus sequi temporibus totam.</p>
        </Modal>
      </div>

      <div className="alert-div">
        <Alert/>
      </div>
    </>


  );
}

export default App;
