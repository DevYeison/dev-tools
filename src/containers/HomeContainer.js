import React, { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";

import * as animationPrice from '../assets/lutties_json/price-animation.json';
import * as animationResources from '../assets/lutties_json/resources-animation.json';
import * as animationContact from '../assets/lutties_json/contact-animation.json';
import * as defaultOptions from '../helpers/default-options-lottie';

const HomeContainer = () => {
  
  const backgroundImageText =
    "Herramientas gratuitas para cualquier desarrollador";
  const contentHeaderPhilosophy = "Filosofía";
  const contentHeaderTools = "Herramientas";
  const philosophy =
    "El propósito de este sitio es compartir información adquirida como desarrollador para futuros visitantes interesados en aumentar sus habilidades como programadores y aportar algunas herramientas para gestionar mejor sus proyectos.";
  const quoteHeader = "Motivación";
  const quoteText =
    "El conocimiento es el arma más poderosa para cambiar el mundo. Así como increíbles personas me ayudaron a mejorar, yo puedo aportar un granito de arena en cada persona interesada en nunca parar de aprender.";
  const author = "Yeison Garzón Toro.";
  const profession = "Javascript Developer";

  const [topicList, setTopicList] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  const handleAnimationClick = ()=>{
    setIsPaused(!isPaused);
  }

  useEffect(() => {
    setTopicList([
      {
        id: 1,
        title: "Cotización",
        animation: animationPrice,
        description:
          "Herramienta para elaborar una estimación (aproximada) del precio de un producto de Software, ya sea aplicación móvil, web, escritorio, plataforma etc.",
      },
      {
        id: 2,
        title: "Recursos",
        animation: animationResources,
        description:
          "Recursos útiles para desarrolladores, tales como documentación de lenguajes de programación y/o frameworks simplificada, explicación de temas dificiles de comprender, herramientas y diseño para desarrollos ágiles, etc.",
      },
      {
        id: 3,
        title: "Contacto",
        animation: animationContact,
        description:
          "Información de contacto personal y equipo de desarrollo en caso de que busques crear un producto y no cuentes con el personal capacitado.",
      },
    ]);
  }, []);
  return (
    <HomePage
      topicList={topicList}
      backgroundImageText={backgroundImageText}
      contentHeaderPhilosophy={contentHeaderPhilosophy}
      contentHeaderTools={contentHeaderTools}
      philosophy={philosophy}
      quoteHeader={quoteHeader}
      quoteText={quoteText}
      author={author}
      profession={profession}
      options={defaultOptions}
      isPaused={isPaused}
      handleAnimationClick={handleAnimationClick}
    />
  );
};

export default HomeContainer;
