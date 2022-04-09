import React, { Component } from 'react'
import "./style.css"

export default class Cadastrar extends Component {
  render() {

    return (
      <div>
        <div className="register-page box-register" >
          <div className='col-10 col-sm-10 col-md-10 d-flex align-items-stretch flex-column'>
            <form>
              <div>
                <h2>Cadastre-se</h2>
              </div>
              <div className="row">
                <div className='flex-column col-md-2'>
                  <img src="dist/img/botaofoto.png" className="mt-4" width={130} alt="Logo" />
                </div>
                <div className='flex-column col-md-10'>
                  <label htmlFor="name" className="label">Seu nome</label><span className='star-red'>*</span>
                  <div class="input-group mb-3">
                    <input type="text" id="name" class="form-control input" placeholder="" aria-label="Digite seu nome" aria-describedby="basic-addon2" />
                  </div>
                  <label htmlFor="position" className="label">Seu cargo</label><span className='star-red'>*</span>
                  <div class="input-group mb-3">
                    <input type="text" id="position" class="form-control input" placeholder="" aria-label="Digite seu cargo" aria-describedby="basic-addon2" />
                  </div>
                </div>
              </div>
              <label htmlFor="email" className="label">E-mail</label><span className='star-red'>*</span>
              <div class="input-group mb-3">
                <input type="text" class="form-control input" placeholder="" aria-label="Digite seu email" id="email" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">@fcamara.com.br</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="label">Senha</label><span className='star-red'>*</span>
                <input type="password" class="form-control input" id="password" placeholder="" />
              </div>

              <div className="form-group">
                <label htmlFor="password-confirmation" className="label">Confirmar senha</label><span className='star-red'>*</span>
                <input type="password" class="form-control input" id="password-confirmation" placeholder="" />
              </div>


              <div>
                <div>
                  <button type="submit" className="btn-signup">ENTRAR</button>
                </div>

              </div>
            </form>
          </div>
        </div>



      </div>
    )
  }
}

