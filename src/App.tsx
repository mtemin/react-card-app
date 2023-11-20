import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar></Navbar>          
            <Routes>
              <Route path="/home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
