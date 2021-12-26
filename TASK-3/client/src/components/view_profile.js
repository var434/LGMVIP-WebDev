import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';


function ViewProfile() {
    const email = localStorage.getItem('data');
    const [singledata, setSingleData] = useState([]);
    
    console.log(email);
    useEffect(() => {
     async function FetchData() {
      let apiUrl = `http://localhost:4000/registrations/${email}`;
      console.log(apiUrl);
      try {
        const response = await axios.get(apiUrl);
        console.log(response);
        setSingleData([response.data]);
        console.log([response.data]);
       
      } catch (error) {
          console.error(error);
          console.log("catch", error);
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
        <br/><br/><br/>

          <h1 style={{textAlign:"center"}}><u>My Profile</u></h1>
          <br/><br/>
       
        <div style={{marginRight:"230px", marginLeft:"230px"}}>
          {singledata.map((em) => {
            return (
              <table class="table table-bordered table-primary">
                <tbody>
                  <tr>
                    <th scope="row">First Name</th>
                    <td>{em.firstName}</td>
                  </tr>
                  <tr>
                    <th scope="row">Last Name</th>
                    <td>{em.lastName}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{em.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td>{em.phone}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>{em.address}</td>
                  </tr>
                  <tr>
                    <th scope="row">Semester</th>
                    <td>{em.semester}</td>
                  </tr>
                  <tr>
                    <th scope="row">Rollno</th>
                    <td>{em.Roll}</td>
                  </tr>
                </tbody>
              </table>
            )

          })}
           
        </div> 
             
      </div>
    )
}

export default ViewProfile;