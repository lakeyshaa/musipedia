import { render } from '@testing-library/react';
import { convertTransitionToAnimationOptions } from 'framer-motion/types/animation/utils/transitions';
import './App.css';
import Footer from './sections/footer/footer';
import Header from './sections/Header/Header';
import Main from './sections/Main/Main';

 function mapStateToProps(state){
   return {
  currentUser: state.currentUser
   }
 }

function mapDispatchToProps(dispatch){
  return {
    setUser: (userObj) => {
      dispatch({type: "SET_USER", })
    }
  }
}

componentDidMount = () => {
  const user = {
    name: 'Key'
  }
  this.props.setUser(user)
}

render() {
      console.log(this.props.currentUser)
  return (
    <div>
    <h1>Redux Works</h1>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <Header />  
      <Main />
      <Footer />
    </div> 
  );
}

export default App;
