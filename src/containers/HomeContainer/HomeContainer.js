import React, { useEffect, useState } from "react";
import PriceImg from "../../../src/assets/images/price.png";
import ResourceImg from "../../../src/assets/images/resources.png";
import ContactImg from "../../../src/assets/images/contact.png";
import HomePage from "../../pages/HomePage/HomePage";

const Home = () => {
  const brandName = "Dev | Tools";
  const backgroundImageText =
    "Herramientas gratuitas para cualquier desarrollador";
  const contentHeaderPhilosophy = "Filosofía";
  const contentHeaderTools = "Herramientas";
  const philosophy =
    "El propósito de este sitio es compartir información adquirida como desarrollador para futuros visitantes interesados en aumentar sus habilidades como programadores y aportar algunas herramientas para gestionar mejor sus proyectos.";
  const quoteHeader = "Motivación";
  const quoteText =
    "El conocimiento es el arma más poderosa para cambiar el mundo y así como increíbles personas me ayudaron a mejorar, considero que puedo aportar un granito de arena al desarrollo de Software.";
  const author = "Yeison Garzón Toro.";
  const profession = "Javascript Developer";
  const reactDocsUrl = "https://es.reactjs.org/";
  const githubProfileUrl = "https://github.com/devyeison";

  const [currentYear, setYear] = useState("2021");
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [currentYear]);

  useEffect(() => {
    setTopicList([
      {
        id: 1,
        title: "Cotización",
        route: "price",
        img: PriceImg,
        description:
          "Herramienta para elaborar una estimación (aproximada) del precio de un producto de Software, ya sea aplicación móvil, web, escritorio, plataforma etc.",
      },
      {
        id: 2,
        title: "Recursos",
        route: "resources",
        img: ResourceImg,
        description:
          "Recursos útiles para desarrolladores, tales como documentación de lenguajes de programación y/o frameworks simplificada, explicación de temas dificiles de comprender, herramientas y diseño para desarrollos ágiles, etc.",
      },
      {
        id: 3,
        title: "Contacto",
        route: "contact",
        img: ContactImg,
        description:
          "Información de contacto personal y equipo de desarrollo en caso de que busques crear un producto y no cuentes con el personal capacitado.",
      },
    ]);
  }, []);
  return (
    <HomePage
      brandName={brandName}
      topicList={topicList}
      backgroundImageText={backgroundImageText}
      contentHeaderPhilosophy={contentHeaderPhilosophy}
      contentHeaderTools={contentHeaderTools}
      philosophy={philosophy}
      quoteHeader={quoteHeader}
      quoteText={quoteText}
      author={author}
      profession={profession}
      currentYear={currentYear}
      reactDocsUrl={reactDocsUrl}
      githubProfileUrl={githubProfileUrl}
    />
  );
};

export default Home;
