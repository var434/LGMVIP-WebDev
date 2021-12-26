import {useRef} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

function Contact() {
  const NameRef = useRef();
  const emailRef = useRef();
  const phoneRef= useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      Name: NameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value
    };
    

    try {
        await axios.post("/contacts", newUser)
        .then(
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Message sent successfully',
          showConfirmButton: false,
          timer: 1800
        })
        )
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
                    <a class="nav-link" href="../#about">About</a>
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

        {/* <!--Contact--> */}
        <div class="container" id="contact">
            <div class="section_title text-center mb-5">
                <h1 class="text-capitalize"><u>Contact Us</u></h1>
            </div>
            <div class="row">
                <div class="col-md-8 col-10 mx-auto mb-3 my-5 py-5 border shadow">
                    <h3 class="text-center mb-3">Form</h3>
                    <form method="POST" id="form" onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label>Name</label>
                            <input name="name" id="name" ref={NameRef} type="text" placeholder="Name" class="form-control"/>
                        </div>
                        <br/>
                        <div class="form-group">
                            <label>Email address</label>
                            <input name="email" id="email" ref={emailRef} type="email" placeholder="Email" class="form-control"/>
                        </div>
                        <br/>
                        <div class="form-group">
                            <label>Phone</label>
                            <input name="phone" id="phone" type="text" ref={phoneRef} placeholder="Phone no." class="form-control"/>
                        </div>
                        <br/>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea name="msg" id="msg" ref={messageRef} class="form-control" placeholder="Message"></textarea>
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  