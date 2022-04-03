import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div>
        {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="/" className="brand-link">
  <img src="dist/img/logo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Technical Share</span>
        </Link>
    {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/usuario.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Usuário Laranja</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
        <li className="nav-item">
        <Link to="/" className="nav-link active">
        <i className="nav-icon fas fa-tachometer-alt" />
          Home
        </Link>
        </li>
        
        
        
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Layout Options
              <i className="fas fa-angle-left right" />
              <span className="badge badge-info right">6</span>
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="pages/layout/top-nav.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Top Navigation</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Top Navigation</p>
              </a>
            </li>
            
            
          </ul>
        </li>

      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
      </div>
    )
  }
}
