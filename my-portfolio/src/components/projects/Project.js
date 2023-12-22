import React from 'react'
import "./projects.json"
import "../projects/project.css"


const Project = ({ name, resumen, image, onSelect, span, github }) => {
  return (
    <>
      <div className="card backdrop-blur-md shadow-xl rounded-none ">
        <figure className="w-full">
          <img src={image} alt="Shoes" className="w-full h-auto object-cover sm:h-64 md:h-48 lg:h-64"/>
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-xl font-semibold mb-2">{name}</h2>
          <div className='mb-2'>
            {span.map((span, index) => (
              <kbd className='kbd kbd-sm mx-1' key={index} dangerouslySetInnerHTML={{ __html: span }} />
            ))}
          </div>
          <p className="text-base">{resumen}</p>
          <div className="card-actions pt-2">
            <button className="btn hover:bg-violet rounded-none" onClick={() => onSelect(<Project/>)}>
              Ver detalle
              <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4h4v4m-6 2l6-6M8 20H4v-4m0 4l6-6m6 6h4v-4m-6-2l6 6M8 4H4v4m0-4l6 6"/>
              </svg>
            </button>
            
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="btn hover:bg-violet rounded-none" >Ver en GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.20 2.39.10 2.64c.65.71 1.03 1.60 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project