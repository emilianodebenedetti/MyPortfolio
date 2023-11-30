import React from 'react'
import '../biography/Biography.css'

const Biography = () => {
  return (
    <>
      <h1>Sobre mi</h1>
      <div className='biography-section'>
        <div className=''>
          <div className='biography-content'>
            <div className='biography-image'>
              <img src='https://data.pixiz.com/output/user/frame/preview/400x400/6/0/7/3/1233706_6b7ea.jpg' alt='Imagen de biografia'/>
            </div>
            <div className='biography-description '>
              <h2>Mi nombre es Emiliano</h2>
              <p>
                lorem45sdfnslfsl sdfjsdlkf ñdjfskfjls jsflkdjfsf
                fdsfnlsd lsf ldkfndsfnlk dnlkfnslf dfnlnflsdkfndn 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Biography