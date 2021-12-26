import {useRef} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef= useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
  const RollRef = useRef();
  const semesterRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      address: addressRef.current.value,
      Roll: RollRef.current.value,
      semester: semesterRef.current.value,
    };

    
    try {
        await axios.post("/register", newUser)
        .then(
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Registered',
          showConfirmButton: false,
          timer: 1800
        })
        )
        //.then(window.location = "/");
      } catch (err) {
        console.log(err);
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
               <a class="navbar-brand" href="/">
                  <img class="logo" src="assets/img/logo.png" alt="logo"/>
               </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <button class="btn btn-outline-success" href="/Register">Sign Up</button>
                </form>
              </div>
            </div>
        </nav>

        {/* <!--Register--> */}
        <div class="register">
            <center>
                <fieldset class="f1">
                    <legend>REGISTER FORM</legend>
                    <div class="reg">
                        <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data"><br/>
                            <h4>First Name : </h4><input type="text" name="newName" ref={firstNameRef} required/>
                            <h4>Last Name : </h4><input type="text" name="newlast" ref={lastNameRef} required/>
                            <h4>Email Address : </h4><input type="text" name="newMail" ref={emailRef} required/>
                            <h4>Phone Number : </h4><input type="text" name="newPhone" ref={phoneRef} required/>
                            <h4>Password : </h4><input type="password" name="password" ref={passwordRef} required/>
                            <h4>Address : </h4><input type="text" name="newAdd" ref={addressRef} required/>
                            <h4>RollNo : </h4><input type="text" name="newAdd" ref={RollRef} required/>
                            <h4>Semester : </h4>
                            <select name="newSem" ref={semesterRef}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                            <br/><br/>
                            <button class="sb" type="submit" name="submit" onClick={handleSubmit} >Submit</button>
                        </form>
                    </div>
                </fieldset>
            </center>
        </div>
    </div>
  );
}

export default Register;

