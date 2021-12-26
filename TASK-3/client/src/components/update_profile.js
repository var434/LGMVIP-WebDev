import {useState,useEffect} from "react";
import axios from 'axios';

function UpdateProfile() {

  const details = JSON.parse(localStorage.getItem("dat"));

  const [firstName, setfirstName] = useState(details.firstName);
  const [lastName, setlastName] = useState(details.lastName);
  const [email, setemail] = useState(details.email);
  const [phone, setphone] = useState(details.phone);
  const [address, setaddress] = useState(details.address);
  const [Roll, setRoll] = useState(details.Roll);
  const [semester, setsemester] = useState(details.semester);
  
  console.log(details);

  function ProfileUpdate(){
    
    const userdata = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
      Roll: Roll,
      semester: semester
    };
    const id = details._id;
    console.log(id);

    axios.put(`http://localhost:4000/update-profile/${id}`,userdata)
      .then((res) => {
        localStorage.setItem("dat", JSON.stringify(res.data));
        console.log(res.data);
        alert("Profile Updated!!!");
        window.location = "/view_profile";
      })
      .catch((err) => {
        console.log(err);
      });
   }
  
  

  const ema = localStorage.getItem('data');
  const [singledata, setSingleData] = useState([]);

  useEffect(() => {
    async function FetchData() {
     let apiUrl = `http://localhost:4000/registrations/${email}`;
     try {
       const response = await axios.get(apiUrl);
       setSingleData([response.data]);
       console.log([response.data]);
      
     } catch (error) {
        console.error(error);
     } 
    }
    FetchData();
  }, []);




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
              </div>
            </div>
      </nav>

        {/* <!--Update--> */}
        <div class="register">
            <center>
                <fieldset class="f1">
                    <legend>Update Your Profile</legend>
                    <div class="reg">
                    {singledata.map((em) => {
                      return(
                        <form method="post" enctype="multipart/form-data"><br/>
                          <h4>First Name <input type="text" defaultValue={em.firstName} 
                             onChange={(e) => {setfirstName(e.target.value)}} required/>
                          </h4>
                          <br/>
                          <h4>Last Name <input type="text" defaultValue={em.lastName}
                            onChange={(e) => {setlastName(e.target.value)}} required/>
                          </h4>
                          <br/>
                          <h4>Email  <input type="text" name="newMail" defaultValue={em.email}
                            onChange={(e) => {setemail(e.target.value)}}
                             required/>
                          </h4>
                          <br/>
                          <h4>Phone  <input type="text" name="newPhone" defaultValue={em.phone}
                            onChange={(e) => {setphone(e.target.value)}} required/>
                          </h4>
                          <br/>
                          <h4>Address <input type="text" name="newAdd" defaultValue={em.address}
                            onChange={(e) => {setaddress(e.target.value)}} required/>
                          </h4>
                          <br/>
                          <h4>RollNo <input type="text" name="newAdd" defaultValue={em.Roll}
                            onChange={(e) => {setRoll(e.target.value)}} required/>
                          </h4>
                          <br/>
                          <h4>Semester </h4>
                          <select name="newSem" defaultValue={em.semester}
                            onChange={(e) => {setsemester(e.target.value)}}>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                          </select>
                          <br/><br/>
                          <button class="sb" type="submit" name="submit" onClick={ProfileUpdate} >Update</button>
                        </form>
                      )
                    })}
                    </div>
                </fieldset>
            </center>
        </div>
    </div>
  );
}

export default UpdateProfile;

