import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarruselTecnologias = () => {
    const technologies = [
        { src:"https://firebasestorage.googleapis.com/v0/b/portfolio-personal-dac18.appspot.com/o/tecnologias%2Fhtml.svg?alt=media&token=0098c9a9-bb4b-4c06-8c39-28b99341a104", alt:"Icono HTML" },
        { src:"https://firebasestorage.googleapis.com/v0/b/portfolio-personal-dac18.appspot.com/o/tecnologias%2Fcss.svg?alt=media&token=fee681bc-9a32-413a-8aca-f56e2428579a", alt:"Icono CSS" },
        { src:"https://firebasestorage.googleapis.com/v0/b/portfolio-personal-dac18.appspot.com/o/tecnologias%2Fjavascript.svg?alt=media&token=4b6b27c5-eb4c-496e-9ab8-38875d198892", alt:"Icono JavaScript"},
        { src:"https://firebasestorage.googleapis.com/v0/b/portfolio-personal-dac18.appspot.com/o/tecnologias%2Freactjs.svg?alt=media&token=d27e6c7d-a642-439d-80ba-a4c26c8d1520", alt:"Icono React Js" },
        { src:"https://firebasestorage.googleapis.com/v0/b/portfolio-personal-dac18.appspot.com/o/tecnologias%2Fnodejs.svg?alt=media&token=dd879a85-3284-4a31-afee-d9fa5ebafec9", alt:"Icono Node Js"},
        { src:"https://firebasestorage.googleapis.com/v0/b/portfolio-personal-dac18.appspot.com/o/tecnologias%2Ftailwindcss.svg?alt=media&token=41d6536d-e125-4f82-8793-a4f7dca4ac25", alt:"Icono Tailwind CSS"},
        { src:"https://firebasestorage.googleapis.com/v0/b/portfolio-personal-dac18.appspot.com/o/tecnologias%2Ffirebase.svg?alt=media&token=44893e11-58e3-41ec-bea8-a65c544ae93f", alt:"Icono Firebase"}
    ];

    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      arrows: false,
    };

    return (
      <>
        <div className="technology-carousel">
        <h2 className='text-lg text-center py-8'>Mi stack de habilidades ...</h2>
            <Slider {...settings}>
            {technologies.map((tech, index) => (
              <div className="technology-icon">
                  <img key={index} src={tech.src} alt={tech.alt} />
                </div>
            ))}
            </Slider>
        </div>
      </>
  )
}

export default CarruselTecnologias