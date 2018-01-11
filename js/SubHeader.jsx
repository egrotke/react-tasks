// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { saveTasks, showAddModal } from './state/actionCreators';

const SubHeaderWrapper = styled.div`
   display: block;
   margin: 15px 0;
   h2 {
      font-weight: bold;
      font-size: 24px;
      color: #36435a;
   }
`;
const SubHeader = (props: {
   handleSaveTasks: Function,
   handleShowAddModal: Function
}) => (
   <SubHeaderWrapper>
      <div className="grid-row">
         <div className="row-title">
            <h2>Tasks</h2>
         </div>
         <div className="row-buttons">
            <Button
               className="btn-secondary"
               onClick={props.handleShowAddModal}
               type="button"
            >
               Add task
            </Button>
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
   },
   handleShowAddModal: () => {
      console.log('dispatch'); // eslint-disable-line no-console
      dispatch(showAddModal(true));
   }
});

export default connect(null, mapDispatchToProps)(SubHeader);
