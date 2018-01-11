// @flow
import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from './state/actionCreators';
import Task from './Task';

const TaskList = (props: {
   handleDeleteClick: Function,
   tasks: Array<Task>
}) => {
   const handleDelete = props.handleDeleteClick;
   return (
      <div>
         {props.tasks.map((taskItem: Task) => (
            <div>
               <Task
                  {...taskItem}
                  key={taskItem.id}
                  onDelete={() => handleDelete(taskItem.id)}
               />
            </div>
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
export const Unwrapped = TaskList;
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
