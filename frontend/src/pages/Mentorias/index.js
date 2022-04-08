import React, { Component } from 'react'
import "../../style.css"
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

export default class Mentorias extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <div class="content-wrapper">

          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Buscar mentores</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/">Buscar mentores</a></li>
                    <li class="breadcrumb-item active">Mentorias</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section class="content">

            <div class="card card-solid">
              <div class="card-body pb-0">
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-8 d-flex align-items-stretch flex-column">

                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Buscar por nome" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"><i className="fas fa-search fa-fw" /></button>
                      </div>
                    </div>

                  </div>

                  <div class="col-3 col-sm-3 col-md-2 d-flex align-items-stretch flex-column">

                    <button type="button" class="btn btn-redefined">Redefinir</button>

                  </div>
                  <div class="col-3 col-sm-3 col-md-2 d-flex align-items-stretch flex-column">

                    <button type="button" class="btn btn-search">Buscar</button>

                  </div>



                </div>
                <br />
                <div class="row">

                  {/* Mentor Card */}
                  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                    <div class="card bg-light d-flex flex-fill">

                      <div class="card-body pt-0 mt-3">
                        <div class="row">
                          <div class="col-12 text-center">
                            <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" class="img-circle img-fluid" />
                          </div>
                          <div class="col-12 text-center">
                            <h2 class="lead"><b>Fábio Camara</b></h2>
                            <p class="text-muted text-sm">CEO da FCamara </p>

                          </div>
                        </div>

                        <div class="row justify-content-center">
                          <div class="chip">
                            JavaScript
                          </div>
                          <div class="chip">
                            CSS
                          </div>
                          <div class="chip">
                            HTML
                          </div>
                          <div class="chip">
                            React
                          </div>
                        </div>
                      </div>

                      <div class="card-footer">
                        <div class="text-center">
                          <a href="/" class="btn btn-sm btn-agend">
                            Agendar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                    <div class="card bg-light d-flex flex-fill">

                      <div class="card-body pt-0 mt-3">
                        <div class="row">
                          <div class="col-12 text-center">
                            <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" class="img-circle img-fluid" />
                          </div>
                          <div class="col-12 text-center">
                            <h2 class="lead"><b>Fábio Camara</b></h2>
                            <p class="text-muted text-sm">CEO da FCamara </p>

                          </div>

                        </div>
                        <div class="row justify-content-center">
                          <div class="chip">
                            JavaScript
                          </div>
                          <div class="chip">
                            CSS
                          </div>
                          <div class="chip">
                            HTML
                          </div>
                          <div class="chip">
                            React
                          </div>
                        </div>
                      </div>

                      <div class="card-footer">
                        <div class="text-center">
                          <a href="/" class="btn btn-sm btn-agend">
                            Agendar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                    <div class="card bg-light d-flex flex-fill">

                      <div class="card-body pt-0 mt-3">
                        <div class="row">
                          <div class="col-12 text-center">
                            <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" class="img-circle img-fluid" />
                          </div>
                          <div class="col-12 text-center">
                            <h2 class="lead"><b>Fábio Camara</b></h2>
                            <p class="text-muted text-sm">CEO da FCamara </p>

                          </div>


                        </div>
                        <div class="row justify-content-center">
                          <div class="chip">
                            JavaScript
                          </div>
                          <div class="chip">
                            CSS
                          </div>
                          <div class="chip">
                            HTML
                          </div>
                          <div class="chip">
                            React
                          </div>
                        </div>
                      </div>

                      <div class="card-footer">
                        <div class="text-center">
                          <a href="/" class="btn btn-sm btn-agend">
                            Agendar
                          </a>
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

            </div>

          </section>

        </div >
        <Footer />
      </div >
    )
  }
}

