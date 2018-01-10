// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { saveTasks } from './state/actionCreators';
import AddTaskModal from './AddTaskModal';

const SubHeaderWrapper = styled.div`
   display: block;
   margin: 15px 0;
   h2 {
      font-weight: bold;
      font-size: 24px;
      color: #36435a;
   }
`;
// <Button>Add task</Button>
const SubHeader = (props: { handleSaveTasks: Function }) => (
   <SubHeaderWrapper>
      <div className="grid-row">
         <div className="row-title">
            <h2>Tasks</h2>
         </div>
         <div className="row-buttons">
            <AddTaskModal />
            <Button
               onClick={props.handleSaveTasks}
               type="button"
               className="btn-success"
            >
               Save
            </Button>
         </div>
      </div>
   </SubHeaderWrapper>
);

const mapDispatchToProps = dispatch => ({
   handleSaveTasks: () => {
      dispatch(saveTasks());
   }
});

export default connect(null, mapDispatchToProps)(SubHeader);
