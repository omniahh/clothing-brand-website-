import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    
 
  <div className="dropdown me-3">
      
  <a className="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    menu
  </a>

 
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
  
     <li className="nav-item">
            <Link  href="menu/women">
          <a className="nav-link text-dark">women</a>
          </Link>
        </li>
        <li className="nav-item">
            <Link  href="menu/men">
          <a className="nav-link text-dark">men</a>
          </Link>
        </li>
        <li className="nav-item">
            <Link  href="menu/kids">
          <a className="nav-link text-dark">kids</a>
          </Link>
        </li>
  
  </ul>
</div>
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">LOGO</a>
        </li>
    <li>
    <Link  href="landing">
          <a className="nav-link">Home</a>
          </Link>
    </li>
        </ul>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
  </div>
  <div className="container-fluid">
   
    <form className="d-flex">
      <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success me-4" type="submit">Search</button>
    
    </form>
  </div>
  <ul className="navbar-nav d-flex">

        <li className="nav-item">
            <Link href="login">
          <a className="nav-link active me-2" aria-current="page" >Login</a>
          </Link>
        </li>

        <li className="nav-item me-3">
        <Link href="/signUp">
          <a className="nav-link active" aria-current="page">SignUp</a>
          </Link>
        </li>
        </ul>
</nav>


    );
};

export default Navbar;