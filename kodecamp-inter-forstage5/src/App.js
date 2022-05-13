import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Aboutpage from './Components/Aboutpage';
import Contactpage from './Components/Contactpage';
import Navbar from './Components/Navbar';
import Datapage from './Components/Datapage';
import Details from './Components/Details';

function App() {
  return (
    <HashRouter  >
       <div>
         <Navbar />
         <Routes>
           <Route path='/' element={<Datapage />} />
           <Route path='/about' element={<Aboutpage />} />
           <Route path='/contact' element={<Contactpage />} />
           <Route path='/details/:id' element={<Details />} />
         </Routes>
      </div>
    
    </HashRouter>
 
  );
}

export default App;
