import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App() {

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

   const closeModal = () => setShowModal(false);
   const closeAlert = () => setShowAlert(false);


  return (
    <div className='m-auto w-50 mt-4'>
      <div className="modal-div">
        <button className='btn btn-primary mb-2'  onClick={() => setShowModal(true)}>Show modal</button>
        <Modal
          show={showModal}
          title="Some kinda modal title"
          close={closeModal}>
          <p>This is modal content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum id illo in libero officia qui quo repellendus sequi temporibus totam.</p>
        </Modal>
      </div>

      <div className="alert-div">
        <button className='btn btn-primary mb-2'  onClick={() => setShowAlert(true)}>Show Alert</button>
        <Alert type='warning' onDismiss={closeAlert} showAlert={showAlert}>This is a warning type alert</Alert>
        <Alert type="success" onDismiss={closeAlert} showAlert={showAlert}>This is a success type alert</Alert>
        <Alert type="danger" onDismiss={closeAlert} showAlert={showAlert}>This is a danger type alert</Alert>
        <Alert type="primary" onDismiss={closeAlert} showAlert={showAlert}>This is a primary type alert</Alert>
      </div>
    </div>
  );
}

export default App;
