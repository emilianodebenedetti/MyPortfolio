import React from 'react'
import '../home/Home.css'
import { saveAs } from 'file-saver';

const handleDownloadPdf = () => {
  // URL del archivo PDF
  const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-personal-dac18.appspot.com/o/Curriculum%2FCVEmiliano%20Debeneetti.pdf?alt=media&token=69517b44-80cc-4c41-af81-fe2eeb04ffef';

  // Nombre del archivo al descargar
  const fileName = 'documento.pdf';

  // Descargar el archivo
  saveAs(pdfUrl, fileName);
};

const Home = () => {
  return (
    <div className="home-class">
      <div>
        <p>Hola, soy</p>
        <div className='flex flex-col items-center'>
          <h1 className='mb-2'>Emiliano<br/>Debenedetti.</h1>
        </div>
        <p>Estudiante de Desarrollo Web, especializado en Frontend.</p>
      </div>
      
      <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-2 pt-8'>
        <a className="my-2">
          {/* Descargar CV */}
          <button onClick={handleDownloadPdf} className="btn sm:btn-sm md:btn-md lg:btn-lg rounded-sm text-white">
            Descarga mi CV
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20px" 
              height="20px" 
              viewBox="0 0 24 24"
            >
              <path 
                fill="currentColor" 
                d="M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z"
              />
            </svg>
          </button>            
        </a>
        {/* Mensaje a whatsapp */}
        <a className="my-2" href="https://api.whatsapp.com/send?phone=59899460931" target="_blank" rel="noreferrer">
          <button className="btn  sm:btn-sm md:btn-md lg:btn-lg rounded-sm text-white">
            Contactame 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20px" 
              height="20px" 
              viewBox="0 0 24 24"
            >
              <path 
                fill="currentColor"
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z"
              />
            </svg>
          </button>            
        </a>
      </div>
    </div>
  )
}
export default Home