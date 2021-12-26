import './App.css';
import Header from './components/Header';
import Loader from './components/Loader';
import CardsFetch from './components/CardsFetch';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
       <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Loader />} /> 
          <Route path="/CardsFetch" element={<CardsFetch />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
