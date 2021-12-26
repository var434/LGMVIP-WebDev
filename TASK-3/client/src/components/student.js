function Student() {
    return (
      <div style={{background:"rgb(130, 152, 175)"}}>
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

        {/* <!--Student home page--> */}

        <div class="st">
            <button class="pro"><a href="/view_profile">My Profile</a></button>
            <button class="pro"><a href="/update_profile">Update Profile</a></button>
            <button class="mark"><a href="/view_marksheet">My Marksheet</a></button>
        </div>
      </div>
    );
  }
  
  export default Student;