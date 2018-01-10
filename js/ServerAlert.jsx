// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { hideSavedMessage } from './state/actionCreators';

const ServerAlertWrapper = styled.div`
   display: block;
   position: fixed;
   right: 50px;
   bottom: 80px;
   border-radius: 5px;
   color: #60c796;
   border: 1px solid #60c796;
   background-color: #f7fefa;
   transition: all 0.5s ease;
   .grid-row {
      height: 35px;
      padding: 0 1em 2px 1em;
      width: 400px;
   }
   a:hover {
      color: #222;
   }
`;

// class ServerAlert extends React.Component {
//    render() {
//       return (
const ServerAlert = (props: {
   showAlert?: boolean,
   handleDismiss: Function
}) => (
   <ServerAlertWrapper className={props.showAlert ? 'show' : 'hide'}>
      <div className="grid-row">
         <div className="row-title">Tasks saved succesfully</div>
         <div className="row-buttons">
            <a onClick={props.handleDismiss} role="button" tabIndex="-1">
               x
            </a>
         </div>
      </div>
   </ServerAlertWrapper>
);

ServerAlert.defaultProps = {
   showAlert: false
};
const mapStateToProps = state => ({ showAlert: state.showAlert });
const mapDispatchToProps = (dispatch: Function) => ({
   handleDismiss: () => {
      dispatch(hideSavedMessage());
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerAlert);
