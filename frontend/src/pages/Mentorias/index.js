

import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export default function Mentorias() {
  return (
    <div>

      <section class="content padding-header">


        <div>
          <div className='row justify-content-between'>
            <h2>Buscar mentor</h2>
            <Link to="/">
              <div className='row'>
                <p className='text-logout'>Logout</p>
                <img className='icon-logout' src='dist/img/logout.png' />
              </div>
            </Link>
          </div>

          <div class="row search-bar">
            <div class="col-12 col-sm-12 col-md-12 d-flex align-items-stretch flex-column">

              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Buscar por nome" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button"><i className="fas fa-search fa-fw" /></button>
                </div>
              </div>

            </div>
          </div>


          <div class="col-12 col-sm-12 col-md-12 d-flex row  justify-content-between">
            <button className='btn btn-stacks col-5 col-md-2 col-sm-6'>NodeJS</button>
            <button className='btn btn-stacks col-5 col-md-2 col-sm-6'>React</button>
            <button className='btn btn-stacks col-5 col-md-2 col-sm-6'>CSS</button>
            <button className='btn btn-stacks col-5 col-md-2 col-sm-6'>MySQL</button>
            <button className='btn btn-stacks col-5 col-md-2 col-sm-6'>C#</button>
          </div>

          <div className='row'>
            <div className='col-12 col-md-6 col-sm-12'>
              <div class="card shadow-card">
                <div class="row">
                  <div class="col-4 p-3">
                    <img src="dist/img/rihana.png" alt="user-avatar" class="img-circle img-fluid profile-img" />
                  </div>
                  <div class="col-5 p-3 info-card">
                    <h2 class="mentor-name"><b>Rihanna Silva</b></h2>
                    <p class="text-muted text-sm">Dev na BoysCry</p>
                    <a href="/" class="btn btn-sm btn-profile">
                      Ver perfil
                    </a>
                  </div>

                  <div class="col-3 d-flex flex-column justify-content-center padding-stacks">
                    <div class="chip">
                      Oracle
                    </div>
                    <div class="chip">
                      Python
                    </div>
                    <div class="chip">
                      C#
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-sm-12'>
              <div class="card shadow-card">
                <div class="row">
                  <div class="col-4 p-3">
                    <img src="dist/img/fabio.png" alt="user-avatar" class="img-circle img-fluid profile-img" />
                  </div>
                  <div class="col-5 p-3 info-card">
                    <h2 class="mentor-name"><b>Fabio Costa</b></h2>
                    <p class="text-muted text-sm">Dev na FCamara</p>
                    <a href="/" class="btn btn-sm btn-profile">
                      Ver perfil
                    </a>
                  </div>

                  <div class="col-3 d-flex flex-column justify-content-center padding-stacks">
                    <div class="chip">
                      NodeJS
                    </div>
                    <div class="chip">
                      Java
                    </div>
                    <div class="chip">
                      SQL
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>

        <div class="card-footer">
          <nav aria-label="Contacts Page Navigation">
            <ul class="pagination justify-content-center m-0">
              <li class="page-item active"><a class="page-link" href="/">1</a></li>
              <li class="page-item"><a class="page-link" href="/">2</a></li>
              <li class="page-item"><a class="page-link" href="/">3</a></li>
              <li class="page-item"><a class="page-link" href="/">4</a></li>
              <li class="page-item"><a class="page-link" href="/">5</a></li>
              <li class="page-item"><a class="page-link" href="/">6</a></li>
              <li class="page-item"><a class="page-link" href="/">7</a></li>
              <li class="page-item"><a class="page-link" href="/">8</a></li>
            </ul>
          </nav>
        </div>



      </section>
    </div >
  )
}




