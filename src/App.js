import './App.css'; 
import Header from './sections/Header/Header'
import Footer from './sections/footer/footer';
import Main from './sections/Main/Main';
import Search from './components/Search'


function App() {
  return (
    <div className="App">
      <Header />  
      <Search />
      <Main />
      <Footer />
    </div> 
  );
}

export default App;
