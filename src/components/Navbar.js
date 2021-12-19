import React from "react";

function Navbar() {

const handleLogout=()=>{
    localStorage.removeItem("logged")
    window.location.href="/";
}

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <button type="button" className="btn btn-danger  ms-auto" onClick={()=>handleLogout()}>Logout <i className="bi bi-power"></i></button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
