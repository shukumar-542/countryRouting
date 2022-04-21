import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import NoMatch from './Components/NoMatch/NoMatch';
import CountryDetails from './CountryDetails/CountryDetails';

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/country' element={<Home/>}></Route>
       <Route path={'/name/:countryname'} element={<CountryDetails/>}></Route>
       <Route path='*' element={<NoMatch/>}></Route>

     </Routes>
   </BrowserRouter>
  );
}

export default App;
