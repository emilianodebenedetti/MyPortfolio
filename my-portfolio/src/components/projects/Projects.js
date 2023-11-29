import React, { useEffect, useState } from 'react'
import Project from './Project'
import ProjectDetail from './ProjectDetail';
import "./project.css"
import projectsData from './projects.json'

const Projects = () => {
  const [projects, setProjects ] = useState([]);
  const[selectedProject, setSelectedProject] = useState(null);

  //llamada a archivo JSON para cargar los datos
  useEffect(() => {
    setProjects(projectsData)
  }, [])

  const handleProjectSelected = (project) => (
    setSelectedProject(project)
  );

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <h2>Mis proyectos</h2>
      <div className='project-container'>
        {projects.map((project) => (   
          <Project
          key={project.id}
          name={project.name}
          span={project.span}
          description={project.description}
          image={project.image}
          onSelect={() => handleProjectSelected(project)}
          />
        ))}
        {selectedProject && (
          <ProjectDetail  
          project={selectedProject}
          onClose={closeProjectDetail}
          />
        )}
      </div>
    </div>
  );
}

export default Projects