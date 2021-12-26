
function Admin() {
  return (
    <div style={{background: "rgb(130, 152, 175)"}}>
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
                  <li class="nav-item">
                    <a class="nav-link" href="/">Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>

        {/* <!--Admin home page--> */}

        <form class="admin_work" method="POST">
            <button class="view" ><a  href="/view_reg">All Registrations</a></button>
            <button class="add_ms"><a href="/AddMarks">Add &nbsp;&nbsp; Marksheet</a></button>
            <button class="view" ><a  href="/All_Results">&nbsp;View <br/>Results</a></button>
            <button class="view" ><a  href="/update_marksheet">Update Marksheet</a></button>
        </form>
    
    
    </div>
  );
}

export default Admin;
