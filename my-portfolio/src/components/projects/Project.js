import React, { useState } from 'react'

const Project = ({ onSelect, name, description }) => {
  console.log("Mostrando Project")
/*   const [showDetail, setShowDetail] = useState(false);
  
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
   */
  return (
    <div className='project-card'>
      <img src="" alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <button onClick={() => onSelect(<Project/>)}>Ver Detalle</button>
    </div>
  )
}

export default Project