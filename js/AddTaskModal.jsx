// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { addTask, showAddModal } from './state/actionCreators';

const AddModalWrapper = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
    justify-content: center;
   `;
const AddModal = styled.div`
   display: block;
   position: fixed;
   background-color: white;
   padding: 20px;
   margin: 10px auto;
   border: 1px solid #ebedf1;
   border-radius: 4px;
   -webkit-box-shadow: 1px 2px 1px 0px rgba(222, 222, 222, 1);
   -moz-box-shadow: 1px 2px 1px 0px rgba(222, 222, 222, 1);
   box-shadow: 1px 2px 1px 0px rgba(222, 222, 222, 1);
   h5 {
      font-size: 12px;
      color: #909fae;
      text-transform: uppercase;
      font-weight: bold;
   }
   transition: all 0.5s ease;
`;

class AddTaskModal extends React.Component {
   props: {
      handleAddTask: Function,
      handleHideModal: Function,
      showAddTaskModal: Boolean
   };

   handleSubmit = e => {
      this.props.handleAddTask(e);
      this.props.handleHideModal();
   };
   render() {
      return (
         <AddModalWrapper>
            <AddModal
               className={
                  this.props.showAddTaskModal ? 'show-modal' : 'hide-modal'
               }
            >
               <header closeButton>
                  <h5 id="contained-modal-title">
                     Add task
                  </h5>
               </header>
               <main>
                  <form onSubmit={this.handleSubmit}>
                     <input type="text" name="task" className="input-text" />
                     <input type="submit" />
                  </form>
               </main>
               <footer>
                  <Button onClick={this.props.handleHideModal}>Close</Button>
               </footer>
            </AddModal>
         </AddModalWrapper>
      );
   }
}
const mapStateToProps = state => ({
   showAddTaskModal: state.showAddTaskModal
});
const mapDispatchToProps = dispatch => ({
   handleAddTask: e => {
      e.preventDefault();

      const title = e.target.querySelector('input').value;
      dispatch(addTask(title));
   },
   handleHideModal: () => {
      dispatch(showAddModal(false));
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskModal);
