import React, { useEffect, useState } from 'react'
import projectsData from './projects.json'
import Project from './Project'
import ProjectDetail from './ProjectDetail';

const Projects = () => {

  const [projects, setProjects ] = useState([]);

  //Seteo estado del proyecto seleccionado
  const[selectedProject, setSelectedProject] = useState(null);

  //llamada a archivo JSON para cargar los datos
  useEffect(() => {
    setProjects(projectsData)
    console.log(projectsData)
  }, [])

  const handleProjectSelected = (project) => (
    setSelectedProject(project)
  );

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className='project-container'>
      {projects.map((project) => (   
        <Project 
          name={project.name}
          description={project.description}
          key={project.id}
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
  );
}

export default Projects