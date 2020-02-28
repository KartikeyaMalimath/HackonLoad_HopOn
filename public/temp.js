document.write(`<div class="sidebar" data-color="rose" data-background-color="black" data-image="../assets/img/sidebar-1.jpg">
<!--
  Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

  Tip 2: you can also add an image using data-image tag
-->
<div class="logo">
  <center><a href="" class="simple-text logo-normal">
    Hop-On
  </a></center>
</div>
<div class="sidebar-wrapper">
  <div class="user">
    <div class="photo">
      <img src="../assets/img/faces/avatar.jpg" />
    </div>
    <div class="user-info">
      <a data-toggle="collapse" href="#collapseExample" class="username">
        <span>
          Tania Andrew
          <b class="caret"></b>
        </span>
      </a>
      <div class="collapse" id="collapseExample">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="sidebar-mini"> MP </span>
              <span class="sidebar-normal"> My Profile </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="sidebar-mini"> EP </span>
              <span class="sidebar-normal"> Edit Profile </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="sidebar-mini"> S </span>
              <span class="sidebar-normal"> Settings </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ul class="nav">
    <li class="nav-item ">
      <a class="nav-link" href="../examples/about_us.html">
        <i class="material-icons">description</i>
        <p> About Us </p>
      </a>
    </li>
  </ul>
</div>
</div>
<div class="main-panel">
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
  <div class="container-fluid">
    <div class="navbar-wrapper">
      <div class="navbar-minimize">
        <button id="minimizeSidebar" class="btn btn-just-icon btn-white btn-fab btn-round">
          <i class="material-icons text_align-center visible-on-sidebar-regular">more_vert</i>
          <i class="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
        </button>
      </div>
      <a class="navbar-brand" href="#pablo">Source - Destination</a>
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
      <span class="sr-only">Toggle navigation</span>
      <span class="navbar-toggler-icon icon-bar"></span>
      <span class="navbar-toggler-icon icon-bar"></span>
      <span class="navbar-toggler-icon icon-bar"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end">
      <form class="navbar-form">
        <div class="input-group no-border">
          <input type="text" value="" class="form-control" placeholder="Search...">
          <button type="submit" class="btn btn-white btn-round btn-just-icon">
            <i class="material-icons">search</i>
            <div class="ripple-container"></div>
          </button>
        </div>
      </form>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#pablo">
            <i class="material-icons">dashboard</i>
            <p class="d-lg-none d-md-block">
              Stats
            </p>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons">notifications</i>
            <span class="notification">5</span>
            <p class="d-lg-none d-md-block">
              Some Actions
            </p>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Mike John responded to your email</a>
            <a class="dropdown-item" href="#">You have 5 new tasks</a>
            <a class="dropdown-item" href="#">You're now friend with Andrew</a>
            <a class="dropdown-item" href="#">Another Notification</a>
            <a class="dropdown-item" href="#">Another One</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#pablo" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons">person</i>
            <p class="d-lg-none d-md-block">
              Account
            </p>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Log out</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>`);



