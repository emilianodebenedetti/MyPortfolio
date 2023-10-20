import React from 'react'

const ProjectDetail = ({ project, onClose, selectedProject }) => {
  console.log(" Mostrando ProjectDetail")
  return (
    <div className='project-detail'> 
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href='linkguthub' target='_blank' rel='noopener noreferrer'>Ver en github</a>
      <button onClick={onClose}>Cerrar</button>
    </div>
  )
}

export default ProjectDetail