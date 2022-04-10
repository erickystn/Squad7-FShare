import React, { useState } from 'react'
import "./style.css"

const Cadastrar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const domainFcamara = "@fcamara.com.br"

  async function handleSubmit(event) {
    event.preventDefault();
    
    if(!dataValidation()){
      return
    }

    const data = {
      email: `${email + domainFcamara}`,
      password,
      name,
      position,
    };
    alert(`cadastro aprovado`)

    console.log(data)

    clearFields()
    //await connect(data);
  }

  function clearFields() {
    setEmail("")
    setPassword("")
    setPasswordConfirmation("")
    setName("")
    setPosition("")
  }

  function dataValidation(){
    const emailRegex = /@/
    
    const nameValidated = name.trim()
    const positionValidated = position.trim()
    const emailValidated = email.trim()
    const emailRegexValidated = emailRegex.exec(emailValidated)
    const passwordValidated = password.trim()
    const passwordConfirmationValidated = passwordConfirmation.trim()


    if(nameValidated === ""){
      alert('Preencha o campo "Seu nome"')
      clearFields()
      return false
    }

    if(positionValidated === ""){
      alert('Preencha o campo "Seu cargo"')
      clearFields()
      return false
    }
    
    if(emailValidated === ""){
      alert('Preencha o campo "E-mail"')
      clearFields()
      return false
    } else if(emailRegexValidated){
      alert('Preencha apenas o login do seu e-mail')
      clearFields()
      return false
    }
    
    if(passwordValidated === ""){
      alert('Informe uma senha')
      clearFields()
      return false
    } else if( passwordConfirmationValidated === ""){
      alert('Confirmação de senha deve ser preenchida')
      clearFields()
      return false
    } else if(passwordValidated !== passwordConfirmationValidated){
      alert('Senha e confirmação de senha devem ser iguais')
      clearFields()
      return false
    }

    setEmail(emailValidated)
    setPassword(passwordValidated)
    setName(nameValidated)
    setPosition(positionValidated)

    return true
  }

  return (
    <main>
      <div className="register-page box-register" >
        <div className='col-10 col-sm-10 col-md-10 d-flex align-items-stretch flex-column'>

          <h2 className="title-register-page">
            Cadastre-se
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className='flex-column col-md-2' >
                <img src="dist/img/botaofoto.png" className="mt-4" width={130} alt="Logo" />
              </div>

              <div className='flex-column col-md-10'>
                <label
                  htmlFor="name"
                  className="label"
                >
                  Seu nome
                </label>
                <span className='star-red'>*</span>

                <div className="input">
                  <input
                    type="text"
                    id="input-name"
                    class="form-control input"
                    placeholder="Digite seu nome"
                    aria-label="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <label
                  htmlFor="position"
                  className="label"
                >
                  Seu cargo
                </label>
                <span className='star-red'>*</span>

                <div class="input-group mb-3">
                  <input
                    class="form-control input"
                    type="text"
                    id="input-position"
                    placeholder="Digite seu cargo"
                    aria-label="Digite seu cargo"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <label
              htmlFor="email"
              className="label"
            >
              E-mail
            </label>
            <span className='star-red'>*</span>

            <div class="input-group mb-3">
              <input
                class="form-control input"
                type="text"
                id="input-email"
                placeholder="Digite seu email"
                aria-label="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  {domainFcamara}
                </span>
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="password"
                className="label"
              >
                Senha
              </label>
              <span className='star-red'>*</span>

              <input
                class="form-control input"
                type="password"
                id="input-password"
                placeholder="Digite uma senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="8"
                required
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="password-confirmation"
                className="label"
              >Confirmar senha
              </label>
              <span className='star-red'>*</span>

              <input
                type="password"
                class="form-control input"
                id="input-password-confirmation"
                placeholder="Confirme a senha"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
              />
            </div>


            <div>
              <button
                type="submit"
                className="btn-signup"
              >
                Entrar
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  )
}

export default Cadastrar;

