import React, { Component, PropTypes } from 'react'
import FontAwesome from "react-fontawesome"
import { Button, Modal } from 'react-bootstrap';


const DeleteModal = ({modal, closeModal, deleteDocument }) => (
    <div>
      <Modal show={modal.showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            modal.document ? <h4>Are you sure you want to delete {modal.document.pageName} document?</h4> : null
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { deleteDocument(modal.document.id); closeModal(); }} bsStyle="danger">Delete</Button>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
)

DeleteModal.propTypes = {
  modal: PropTypes.object.isRequired,
};

export default DeleteModal
