import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form,
        FormGroup, Input, FormText } from 'reactstrap';
import Context from '../utils/context'


const ModalOne = () => {
 
  const context = useContext(Context)
  const { useContextChange, useContextSubmit, 
          useContextChangeState, useContextSubmitState } = context
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  console.log(context)

  return (
    <div>
      <Button color="danger" onClick={toggle}>Add Item</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>What item would you like to add to the list?</ModalHeader>
        <ModalBody>
          <Form 
            onSubmit={useContextSubmit}
          >
              <FormGroup>
              <Input
                id="useContext"
                onChange={useContextChange}
                type="text">
              </Input>
              <Button>Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalOne;