import {useRef} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

function AddMarks() {

  const RollRef = useRef();
  const emailRef = useRef();
  const subject1Ref = useRef();
  const subject2Ref = useRef();
  const subject3Ref = useRef();
  const subject4Ref = useRef();
  const subject5Ref = useRef();
  const subject6Ref = useRef();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      Roll : RollRef.current.value,
      email: emailRef.current.value,
      subject1: subject1Ref.current.value,
      subject2: subject2Ref.current.value,
      subject3: subject3Ref.current.value,
      subject4: subject4Ref.current.value,
      subject5: subject5Ref.current.value,
      subject6: subject6Ref.current.value,
    };

    
    try {
        await axios.post("/addmarks", newUser)
        .then(
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Marks successfully added',
          showConfirmButton: false,
          timer: 1800
        })
        )
        //.then(window.location.reload());
        //localStorage.setItem('marks',newUser.email);
      } catch (err) {
        console.log(err);
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
               <a class="navbar-brand" href="#">
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
                  <li class="nav-item">
                    <a class="nav-link" href="/">Log Out</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <button class="btn btn-outline-success" href="/Register">Sign Up</button>
                </form>
              </div>
            </div>
        </nav>

        {/* <!--add marks--> */}
        <div class="register">
            <center>
                <fieldset class="f1">
                    <legend>Add Marks</legend>
                    <div class="reg">
                        <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data"><br/>
                            <h3>Rollno : </h3><input type="text" name="newAdd" ref={RollRef} required/>
                            <h3>Email : </h3><input type="email" name="newAdd" ref={emailRef} required/>
                            <h4>Subject1 : </h4><input type="text" name="newName" ref={subject1Ref} required/>
                            <h4>Subject2 : </h4><input type="text" name="newlast" ref={subject2Ref} required/>
                            <h4>Subjec3 : </h4><input type="text" name="newMail" ref={subject3Ref} required/>
                            <h4>Subject4 : </h4><input type="text" name="newPhone" ref={subject4Ref} required/>
                            <h4>Subject5 : </h4><input type="text" name="password" ref={subject5Ref} required/>
                            <h4>Subject6 : </h4><input type="text" name="newAdd" ref={subject6Ref} required/>
                            
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

export default AddMarks;

