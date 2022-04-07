import React, { Component } from 'react'
import "./style.css"

export default class Cadastrar extends Component {
  render() {

    const options = [
      { value: 'nodejs', label: 'NodeJS' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Cadastrar</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>

          <section class="content">

            <form>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Seu nome</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="" aria-label="Digite seu email" aria-describedby="basic-addon2" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Seu cargo</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="" aria-label="Digite seu email" aria-describedby="basic-addon2" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">E-mail</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="" aria-label="Digite seu email" aria-describedby="basic-addon2" />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">@fcamara.com.br</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirmar senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
              </div>


              <div class="text-center">
                <button type="submit" className="btn btn-signup">ENTRAR</button>
              </div>
            </form>

          </section>
        </div>



      </div>
    )
  }
}
