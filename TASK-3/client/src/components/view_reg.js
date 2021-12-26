import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

function ViewReg() {
    const [pins, setPins] = useState([]);
    useEffect(() => {
        const getPins = async () => {
          try {
            const allPins = await axios.get("/registrations");
            console.log(allPins);
            console.log(typeof allPins);
            setPins(allPins.data.users);
          } catch (err) {
            console.log(err);
          }
        };
        getPins();
      }, []);
      console.log('all pins data', pins);
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
                  <a class="nav-link" href="./">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
             
            </div>
          </div>
        </nav>
         
         <br/><br/><br/><br/>

          
          <div class="container" style={{marginRight:"40px", marginLeft:"90px"}}>
            <table class="table table-success table-striped">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Roll no.</th>
                <th>Semester</th>
              </tr>
              {
              Object.entries(pins).map(([key, ps]) => 
              <tr key={key}>
                <td>{ps.firstName}</td>
                <td>{ps.lastName} </td>
                <td>{ps.email} </td>
                <td>{ps.phone} </td>
                <td>{ps.address} </td>
                <td>{ps.Roll} </td>
                <td>{ps.semester} </td>
              </tr>
              ) 
             }
            </table>
          </div> 
         

        
      </div>
    )
}

export default ViewReg;