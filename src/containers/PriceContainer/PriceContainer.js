import React from "react";
import PricePage from '../../pages/PricePage/PricePage';

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
  return <PricePage brandName={brandName} navList={navList} />;
};
    
    
    


export default PriceContainer;
