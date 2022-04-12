import React from 'react'
import Calendly from '../../components/Calendly'
import "./style.css"


export default function Perfil() {
  return (

    <div className='total row flex-row col-12'>
      <div className='col-12 col-sm-8 col-md-8'>

        <div>
          <img src='dist/img/fabio.png' className='img-profile' />
          <div className='col-12'>
            <h2 className='title-profile'>Fabio Costa</h2>
          </div>
        </div>

        <div>
          <div className='col-12'>
            <p className='about-profile'>Atua como</p>
            <div>

            </div>
            <p className='about-profile'>Dev sênior</p>
          </div>
          <div>
            <p className='about-profile'>na FCamara</p>
          </div>
        </div>
      </div>

      <div className=' col-12 col-sm-4 col-md-4 box-calendly'>
        <Calendly />
      </div>
    </div >

  )
}

