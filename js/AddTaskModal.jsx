// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTask, showAddModal } from './state/actionCreators';

const AddModal = styled.div`
   display: block;
   position: fixed;
   background-color: white;
   padding: 15px 20px;
   width: 420px;
   left: 50%;
   margin-left: -220px;
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
const Main = styled.div`
   text-align: center;
   `;
const Footer = styled.div`
   margin-top:20px;
   text-align: right;
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
         <AddModal
            id="add-task-modal"
            className={
               this.props.showAddTaskModal ? 'show-modal' : 'hide-modal'
            }
         >
            <header>
               <h5 id="contained-modal-title">
                  Add task
               </h5>
            </header>
            <Main>
               <form onSubmit={this.handleSubmit}>
                  <input type="text" name="task" className="input-text" />
                  <input type="submit" className="btn btn-success" />
               </form>
            </Main>
            <Footer>
               <button
                  className="btn btn-secondary"
                  onClick={this.props.handleHideModal}
               >
                  Close
               </button>
            </Footer>
         </AddModal>
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
      if (title) {
         dispatch(addTask(title));
      }
   },
   handleHideModal: () => {
      dispatch(showAddModal(false));
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskModal);
