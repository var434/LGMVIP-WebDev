import {useState, useEffect} from "react";
import axios from 'axios';

function UpdateMarks() {

  const details = JSON.parse(localStorage.getItem("dat"));
  
  const [Roll, setRoll] = useState(details.Roll);
  const [email, setemail] = useState(details.email);
  const [subject1, setsubject1] = useState(details.subject1);
  const [subject2, setsubject2] = useState(details.subject2);
  const [subject3, setsubject3] = useState(details.subject3);
  const [subject4, setsubject4] = useState(details.subject4);
  const [subject5, setsubject5] = useState(details.subject5);
  const [subject6, setsubject6] = useState(details.subject6);

  

  function ResultUpdate(){
    
    const userdata = {
      Roll : Roll,
      email: email,
      subject1: subject1,
      subject2: subject2,
      subject3: subject3,
      subject4: subject4,
      subject5: subject5,
      subject6: subject6
    };


    axios.put(`http://localhost:4000/update-marksheet/${email}`,userdata)
      .then((res) => {
        localStorage.setItem("dat", JSON.stringify(res.data));
        console.log(res.data);
        alert("Result Updated!!!");
        window.location = "/All_Results";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

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
              </div>
            </div>
        </nav>

        {/* <!--add marks--> */}
        <div class="register">
            <center>
                <fieldset class="f1">
                    <legend>Update Marks</legend>
                    <div class="reg">
                  
                        <form method="post" enctype="multipart/form-data"><br/>
                            <h4>Rollno  <input type="text" defaultValue={details.Roll}
                              onChange={(e) => {setRoll(e.target.value)}} 
                              required/>
                            </h4><br/>
                            <h4>Email <input type="email"
                              onChange={(e) => {setemail(e.target.value)}} 
                              required/>
                            </h4><br/>
                            <h4>Subject1 <input type="text" defaultValue={details.subject1}
                              onChange={(e) => {setsubject1(e.target.value)}}
                              required/> 
                            </h4><br/>
                            <h4>Subject2 <input type="text" defaultValue={details.subject2}
                              onChange={(e) => {setsubject2(e.target.value)}} 
                              required/>
                            </h4><br/>
                            <h4>Subjec3 <input type="text" defaultValue={details.subject3}
                              onChange={(e) => {setsubject3(e.target.value)}}
                              required/>
                            </h4><br/>
                            <h4>Subject4 <input type="text" defaultValue={details.subject4}
                              onChange={(e) => {setsubject4(e.target.value)}} 
                              required/>
                            </h4><br/>
                            <h4>Subject5 <input type="text" defaultValue={details.subject5}
                              onChange={(e) => {setsubject5(e.target.value)}} 
                              required/>
                            </h4><br/>
                            <h4>Subject6 <input type="text" defaultValue={details.subject6}
                              onChange={(e) => {setsubject6(e.target.value)}} 
                              required/>
                            </h4>
                            
                            <br/>
                            <button class="sb" type="submit" onClick={ResultUpdate} name="submit">Update</button>
                        </form>

                    </div>
                </fieldset>
            </center>
        </div>
    </div>
  );
}

export default UpdateMarks;








