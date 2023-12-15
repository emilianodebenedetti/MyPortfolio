import React from 'react'
import '../biography/Biography.css'
import CarruselTecnologias from './Carrusel/CarruselTecnologias'

const Biography = () => {
  return (
    <>
      <div className='biography-section'>
        <div className='biography-content flex flex-col md:flex-row items-center md:items-start'>
          <div className='biography-image'>
            <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-personal-dac18.appspot.com/o/foto-perfil%2Fperfil-img.png?alt=media&token=59e2e078-137d-49b5-b69d-b8cd831580ea' alt='Imagen de biografía'/>
          </div>
          <div className='biography-description mt-4 md:mt-0 md:ml-8'>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Mi nombre es Emiliano</h2>
            <p className="text-lg my-2 md:my-4">Desde niño me atrae la informática, actualmente estudio desarrollo web frontend utilizando tecnologías como HTML, CSS, JavaScript, React JS.</p>
            <p className='text-lg my-2 md:my-4'>Me enfoco en construir sitios que no solo sean visualmente atractivos, sino también intuitivos y eficientes.</p>
            <p className='text-lg my-2 md:my-4'>Desde el año 2022 encuentro en constante aprendizaje y dispuesto a aprender e interiorizar cada día más!.</p>
          </div>
        </div>
      </div>
      <div>
        <CarruselTecnologias />
      </div>
    </>
  )
}

export default Biography
