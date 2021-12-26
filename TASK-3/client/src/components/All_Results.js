import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Results() {
    const [pins, setPins] = useState([]);
    useEffect(() => {
        const getPins = async () => {
          try {
            const allPins = await axios.get("/results");
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

        
          <div class="container" style={{marginRight:"90px", marginLeft:"90px"}}>
            <table class="table table-striped">
              <tr>
                <th>Roll no.</th>
                <th>Subject 1</th>
                <th>Subject 2</th>
                <th>Subject 3</th>
                <th>Subject 4</th>
                <th>Subject 5</th>
                <th>Subject 6</th>
              </tr>
              {
              Object.entries(pins).map(([key, ps]) => 
              <tr key={key}>
                <td><input style={{width:"140px"}} value={ps.Roll} /></td>
                <td><input style={{width:"180px"}} value={ps.subject1}/></td>
                <td><input style={{width:"140px"}} value={ps.subject2} /></td>
                <td><input style={{width:"180px"}} value={ps.subject3} /></td>
                <td><input value={ps.subject4} /></td>
                <td><input value={ps.subject5} /></td>
                <td><input style={{width:"200px"}} value={ps.subject6} /></td>
              </tr>
              ) 
             }
            </table>
          </div> 
         

        
      </div>
    )
}

export default Results;