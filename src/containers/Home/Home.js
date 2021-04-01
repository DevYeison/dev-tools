import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import TopicCard from "../../components/TopicCard/TopicCard";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Quote from "../../components/Quote/Quote";
import ContentInfo from '../../components/ContentInfo/ContentInfo';
import CardGroup from "react-bootstrap/CardGroup";

import PriceImg from "../../../src/assets/images/price.png";
import ResourceImg from "../../../src/assets/images/resources.png";
import ContactImg from "../../../src/assets/images/contact.png";

const Home = () => {
  const brandName = "Dev | Tools";
  const ReactDocsUrl = "https://es.reactjs.org/";
  const GithubProfileUrl = "https://github.com/devyeison";
  const [currentYear, setYear] = useState("2021");
  const [topic, setTopic] = useState([]);
  const quoteText =
    "El conocimiento es el arma más poderosa para cambiar el mundo y así como increíbles personas me ayudaron a mejorar, considero que puedo aportar un granito de arena al desarrollo de Software.";
  const philosophy =
    "El propósito de este sitio es compartir información adquirida como desarrollador para futuros visitantes interesados en aumentar sus habilidades como programadores y aportar algunas herramientas para gestionar mejor sus proyectos.";
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [currentYear]);

  useEffect(() => {
    setTopic([
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
        route: "resources",
        img: ContactImg,
        description:
          "Información de contacto personal y equipo de desarrollo en caso de que busques crear un producto y no cuentes con el personal capacitado.",
      },
    ]);
  }, []);
  return (
    <>
      <Header brandName={brandName} topicList={topic} />
      <BackgroundImage heading="Herramientas gratuitas para cualquier desarrollador" />
      <ContentHeader contentHeaderText="Filosofía" />
      <ContentInfo contetText={philosophy}/>
      <Quote
        quoteHeader="Motivación"
        quoteText={quoteText}
        author="Yeison Garzón Toro"
        profession="Javascript Developer"
      />
      <ContentHeader contentHeaderText="Herramientas" />
      <CardGroup className="px-3 pb-5">
        <>
          {topic.map((cardInfo) => (
            <TopicCard
              key={cardInfo.id}
              img={cardInfo.img}
              title={cardInfo.title}
              description={cardInfo.description}
            />
          ))}
        </>
      </CardGroup>
      <Footer
        year={currentYear}
        ReactUrl={ReactDocsUrl}
        GithubUrl={GithubProfileUrl}
      />
    </>
  );
};

export default Home;
