import './App.css';
import Footer from './sections/footer/footer';
import Header from './sections/Header/Header';
import Main from './sections/Main/Main';

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
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
