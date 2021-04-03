import React, { useEffect, useState } from "react";
import PricePage from "../../pages/PricePage/PricePage";

const PriceContainer = () => {
  const brandName = "Dev | Tools";
  const navList = [
    {
      id: 2,
      title: "Recursos",
      route: "resources",
    },
    {
      id: 3,
      title: "Contacto",
      route: "contact",
    },
  ];
  const reactDocsUrl = "https://es.reactjs.org/";
  const githubProfileUrl = "https://github.com/devyeison";
  const [currentYear, setYear] = useState("2021");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [currentYear]);
  
  return (
    <PricePage
      brandName={brandName}
      navList={navList}
      currentYear={currentYear}
      reactDocsUrl={reactDocsUrl}
      githubProfileUrl={githubProfileUrl}
    />
  );
};

export default PriceContainer;
