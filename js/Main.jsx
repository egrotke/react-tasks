// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchTasks } from './state/actionCreators';
import SubHeader from './SubHeader';
import TaskList from './TaskList';
import ServerAlert from './ServerAlert';
import AddTaskModal from './AddTaskModal';

const ContentWrapper = styled.div`
   max-width: 800px;
   width: 90%;
   height: 100%;
   margin: 10px auto;
   padding: 10px;
`;
const Header = styled.div`
   display: block;
   width: 100%;
   height: 50px;
   background-color: #2d3e51;
`;
class Main extends React.Component {
   componentWillMount() {
      this.props.getTasks();
   }
   props: {
      getTasks: Function
   };
   render() {
      return (
         <div className="index">
            <Header />
            <ContentWrapper>
               <SubHeader />
               <TaskList />
            </ContentWrapper>
            <ServerAlert />
            <AddTaskModal />
         </div>
      );
   }
}

const mapStateToProps = state => ({
   tasks: state.tasks
});

const mapDispatchToProps = dispatch =>
   bindActionCreators(
      {
         getTasks: fetchTasks
      },
      dispatch
   );

export default connect(mapStateToProps, mapDispatchToProps)(Main);
