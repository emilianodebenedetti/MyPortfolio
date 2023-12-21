import React from 'react'
import "./project.css"
/* import technologies from './projects.json' */


const ProjectDetail = ({ project, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center rounded-none">
        {/* fondo translucido */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative bg-gray-700 rounded-none overflow-hidden shadow-xl max-w-full md:max-w-2xl lg:max-w-5xl"> 
          {/* boton cerrar */}
          <button
            className="absolute top-0 right-0 m-4 text-white hover:text-gray-900 z-10" 
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
              />
            </svg>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:h-min">
            <figure>
              <img
                className="lg:w-full lg:h-full lg:object-cover"
                src={project.mockup}
                alt="Mockup"
              />
            </figure>
            <div className="flex flex-col justify-between p-6">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="mb-4">{project.description}</p>
              {/* iconos tecnologias */}
              <div>
                <p>Tecnologias usadas:</p>
                <div className="flex items-center mb-4 ">
                  {project.technologies.map((technology, index) => (
                    <div className='mx-1 p-2 bg-white bg-opacity-10 rounded-full' key={index} dangerouslySetInnerHTML={{ __html: technology }} />
                    ))}
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                  <a
                    target='_blank'
                    rel="noreferrer"
                    href={project.link}
                    className="btn btn-primary rounded-none text-white px-4 py-2"
                    >
                    Ir al sitio
                  </a>
                  <a
                    target='_blank'
                    rel="noreferrer"
                    href={project.github}
                    className="btn rounded-none bg-gray-300 text-gray-700 px-4 py-2"
                    >
                    Ver en GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.20 2.39.10 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                        />
                    </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetail