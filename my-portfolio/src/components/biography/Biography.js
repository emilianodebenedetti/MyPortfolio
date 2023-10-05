import React from 'react'
import '../biography/Biography.css'

const Biography = () => {
  return (
    <div className='biography-section'>
      <div className='container'>
        <div className='biography-content'>
          <div className='biography-image'>
            {/* {<img src='https://media.licdn.com/dms/image/C4D03AQFXbVGPEG6Rmw/profile-displayphoto-shrink_800_800/0/1643927218787?e=1701302400&v=beta&t=brib1W8mUJ1IJ3Vej1DTp4CHpRYWPp6GwzDGjQVLpjc' alt='Imagen de biografia'/>} */}
            {<img src='https://data.pixiz.com/output/user/frame/preview/400x400/6/0/7/3/1233706_6b7ea.jpg' alt='Imagen de biografia'/>}
          </div>

          <div className='biography-description '>
            <h1>Emiliano Debenedetti</h1>
            <p>
              lorem45sdfnslfsl sdfjsdlkf ñdjfskfjls jsflkdjfsf
              fdsfnlsd lsf ldkfndsfnlk dnlkfnslf dfnlnflsdkfndn 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Biography