import {useRef} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function AdminLogin() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await axios.post("/st-login", user);
      console.log("login successfull" ,res);
     
      navigate('/admin');
    
    } catch (err) {
     
      console.log(err);
      console.log(err.res);
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
                  <a class="nav-link" href="./#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
              {/* <form class="d-flex">
                <button class="btn btn-outline-success" href="./Register">Sign Up</button>
              </form> */}
            </div>
          </div>
      </nav>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="assets/img/c1.jpg" class="d-block w-100" id="caro-img" alt="home img" height="600px" width="1200px"/>
            <div class="carousel-caption d-none d-md-block">
              <div class="login">
                <center>
                  <div class="f2">
                    <legend style={{color:"black",fontWeight:"bold"}}>ADMIN LOGIN</legend>
                    <div class="log">
                      <form onSubmit={handleSubmit}>
                        <div class="txt">
                            <h4>Email : </h4><input class="ut" type="text" name="logUS" ref={emailRef} required/>
                            <h4>Password : </h4><input class="pt" type="Password" name="logPS" ref={passwordRef} required/>
                          </div>
                          <br/>
                          <button class="lb" type="submit" name="login">Login</button><br/><br/>
                          {/* <p>Not Registerd? <a href="./Register">Sign Up</a></p> */}
                      </form>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminLogin;