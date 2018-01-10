// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
import { addTask } from './state/actionCreators';

const AddModalWrapper = styled.div`
   display: inline-block;
   overflow: hidden;
`;

class AddTaskModal extends React.Component {
   constructor(...args) {
      super(...args);

      this.handleHide = this.handleHide.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = { show: false };
   }
   state: {
      show: true
   };
   props: {
      handleAddTask: Function
   };
   handleHide() {
      this.setState({ show: false });
   }
   handleSubmit(e) {
      this.props.handleAddTask(e);
      this.handleHide();
   }
   render() {
      return (
         <AddModalWrapper>
            <Button
               className="btn-secondary"
               onClick={() => this.setState({ show: true })}
            >
               Add task
            </Button>
            <div className="modal-container">
               <Modal
                  id="add-task-modal"
                  show={this.state.show}
                  onHide={this.handleHide}
                  container={this}
                  aria-labelledby="contained-modal-title"
               >
                  <Modal.Header closeButton>
                     <Modal.Title id="contained-modal-title">
                        Add task
                     </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <form onSubmit={this.handleSubmit}>
                        <input type="text" name="task" className="input-text" />
                        <input type="submit" />
                     </form>
                  </Modal.Body>
                  <Modal.Footer>
                     <Button onClick={this.handleHide}>Close</Button>
                  </Modal.Footer>
               </Modal>
            </div>
         </AddModalWrapper>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   handleAddTask: e => {
      e.preventDefault();

      const title = e.target.querySelector('input').value;
      dispatch(addTask(title));
   }
});

export default connect(null, mapDispatchToProps)(AddTaskModal);
