// @flow
import React from 'react';
import { connect } from 'react-redux';
// import { CSSTransitionGroup } from 'react-transition-group';
import { deleteTask } from './state/actionCreators';
import Task from './Task';
// <CSSTransitionGroup
// transitionName="item"
// transitionEnterTimeout={500}
// transitionLeaveTimeout={300}
// >
// </CSSTransitionGroup>

const TaskList = (props: {
   handleDeleteClick: Function,
   tasks: Array<Task>
}) => {
   const handleDelete = props.handleDeleteClick;
   return (
      <div>
         {props.tasks.map((taskItem: Task) => (
            <Task
               {...taskItem}
               // key={taskItem.uid}
               id={taskItem.id}
               onDelete={() => handleDelete(taskItem.id)}
            />
         ))}
      </div>
   );
};

const mapStateToProps = state => ({
   tasks: state.tasks || []
});
const mapDispatchToProps = dispatch => ({
   handleDeleteClick: id => {
      dispatch(deleteTask(id));
   }
});
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
