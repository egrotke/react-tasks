// @flow
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TaskWrapper = styled.div`
   display: block;
   min-height: 150px;
   background-color: white;
   padding: 7px 15px;
   margin: 10px 0;
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
`;

const TrashIcon = styled.a`
   cursor: pointer;
   color: #555;
`;

const Task = (props: { title: string, onDelete: Function }) => (
   <TaskWrapper>
      <div className="grid-row">
         <div className="row-title">
            <h5>{props.title}</h5>
         </div>
         <div className="row-buttons">
            <TrashIcon onClick={props.onDelete} role="button" tabIndex="-1">
               <i className="fa fa-trash-o" aria-hidden="true" />
            </TrashIcon>
         </div>
      </div>
   </TaskWrapper>
);

Task.propTypes = {
   onDelete: PropTypes.func.isRequired
};

export default Task;
