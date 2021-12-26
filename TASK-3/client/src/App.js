import './App.css';
import Home from './components/home';
import Contact from './components/contact';
import Register from './components/Register';
import Admin from './components/admin';
import Student from './components/student';
import AdminLogin from './components/admin_login';
import ViewReg from './components/view_reg';
import AddMarks from './components/AddMarks';
import ViewProfile from './components/view_profile';
import ViewMarksheet from './components/view_marksheet';
import UpdateProfile from './components/update_profile';
import UpdateMarks from './components/update_marksheet';
import Results from './components/All_Results';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/view_reg" element={<ViewReg />} />
        <Route path="/AddMarks" element={<AddMarks />} />
        <Route path="/view_profile" element={<ViewProfile />} />
        <Route path="/view_marksheet" element={<ViewMarksheet />} />
        <Route path="/update_profile" element={<UpdateProfile />} />
        <Route path="/update_marksheet" element={<UpdateMarks />} />
        <Route path="/All_Results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;

