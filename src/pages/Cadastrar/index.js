import React, { Component } from 'react'
import "./style.css"

export default class Cadastrar extends Component {
  render() {

    return (
      <div>
        <div className="register-page" >
          <div className='card-register  col-12 col-sm-8 col-md-8'>
            <div className='card card-solid'>
              <div className='card-body pb-0'>
                <div className='row justify-content-center'>
                  <div className='col-12 col-sm-12 col-md-12 d-flex align-items-stretch flex-column'>
                    <form>
                      <div>
                        <h2 class="title-register">Cadastre-se</h2>
                      </div>
                      <div className="row">
                        <div className='flex-column col-md-4'>
                          <img src="dist/img/logo.png" className="mt-4" width={130} />
                        </div>
                        <div className='flex-column col-md-8'>
                          <div className="form-group ">
                            <label htmlFor="name">Seu nome</label><span className='star-red'>*</span>
                            <div class="input-group mb-3">
                              <input type="text" id="name" class="form-control input" placeholder="" aria-label="Digite seu email" aria-describedby="basic-addon2" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="position">Seu cargo</label><span className='star-red'>*</span>
                            <div class="input-group mb-3">
                              <input type="text" id="position" class="form-control input" placeholder="" aria-label="Digite seu email" aria-describedby="basic-addon2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">E-mail</label><span className='star-red'>*</span>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control input" placeholder="" aria-label="Digite seu email" id="email" aria-describedby="basic-addon2" />
                          <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">@fcamara.com.br</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Senha</label><span className='star-red'>*</span>
                        <input type="password" class="form-control input" id="password" placeholder="" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password-confirmation">Confirmar senha</label><span className='star-red'>*</span>
                        <input type="password" class="form-control input" id="password-confirmation" placeholder="" />
                      </div>


                      <div class="text-center ">
                        <button type="submit" className="btn btn-signup">ENTRAR</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    )
  }
}

