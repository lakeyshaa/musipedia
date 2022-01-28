import { Routes, Route } from "react-router-dom";
import Home from '../../Routes/Home';
import Search from '../../Routes/Search';
import Favorites from '../../Routes/Favorites';

const Main = () => {
 
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    );
}

export default Main;