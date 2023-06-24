import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark p-2">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#" >CRUD USUARIOS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white" href="#">Registros</a>
        <a className="nav-link text-white" href="#">Home</a>
      </div>
    </div>
  </div>
</nav>
  )
}
