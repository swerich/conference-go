


function Nav() {
    
        return (
          
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Conference GO!</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div id="liveAlertPlaceholder"></div>
                <button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="new-location.html">New Location</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="new-conference.html">New Conference</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="new-presentation.html">New Presentation</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
          
        );
      }
    
  
  export default Nav;