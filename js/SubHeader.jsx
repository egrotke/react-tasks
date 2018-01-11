// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
   handleShowAddModal: Function,
   stateMatchesServer: Boolean
}) => (
   <SubHeaderWrapper>
      <div className="grid-row">
         <div className="row-title">
            <h2>Tasks</h2>
         </div>
         <div className="row-buttons">
            <button
               className="btn btn-secondary"
               onClick={props.handleShowAddModal}
               type="button"
            >
               Add task
            </button>
            <button
               onClick={props.handleSaveTasks}
               type="button"
               disabled={!props.stateMatchesServer}
               className="btn btn-success"
            >
               Save
            </button>
         </div>
      </div>
   </SubHeaderWrapper>
);

const mapStateToProps = state => ({
   stateMatchesServer: state.changesMade
});

const mapDispatchToProps = dispatch => ({
   handleSaveTasks: () => {
      dispatch(saveTasks());
   },
   handleShowAddModal: () => {
      dispatch(showAddModal(true));
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
