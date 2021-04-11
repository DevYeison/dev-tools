import React, { useState } from "react";
import PricePage from "../../pages/PricePage/PricePage";

const PriceContainer = () => {

 /*  const [formQuestions, setFormQuestions] = useState([
    {
      id: 1,
      name: "Estado del proyecto",
        checkList: [{
          id: 1,
          check: "Idea",
        },
        {
          id: 2,
          check: "Desarrollo"
        },
        {
          id: 3,
          check: "Producción"
        }] 
    },
    {
      id: 2,
      name: "Idea",
       checkList: ["No tengo una idea", "Tengo una idea", "Tengo una idea y un modelo de negocio"]
    }
  ]); */

  const contentHeader = "Formulario";
  const headingText = "Cotización";
  const contentInfo = "Este formulario está hecho con la intención de dar una cotización aproximada del valor real del proyecto, por favor elija las opciones que más se ajustan a su proyecto"
  return (
    <PricePage
      headingText={headingText}
      contentHeader={contentHeader}
    /*   questions={formQuestions} */
      contentText={contentInfo}
    />
  );
};

export default PriceContainer;
