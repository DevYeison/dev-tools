import React from "react";
import ResourcesPage from "../pages/ResourcesPage";
import * as defaultOptions from "../helpers/default-options-lottie";
import useFetch from "../hooks/useFetch";

const ResourcesContainer = () => {
  const contentHeaderText = "Recursos";
  const contentText =
    "En esta página vas a poder encontrar recursos de programación como documentación, links útiles de alguna explicación interesante, cursos de un lenguaje, tecnología o framework, etc.";
  const errorTitle = "Error en el servidor";
  const errorDescription =
    "La información que estaba buscando no pudo ser encontrada, intente refrescar la página o comuniquese con soporte.";
  const resourcesUrl = "http://localhost:4000/1/api/resource";
  const { data, loading, error } = useFetch(resourcesUrl);

  return (
    <ResourcesPage
      contentHeaderText={contentHeaderText}
      contentText={contentText}
      resources={data}
      loading={loading}
      error={error}
      errorTitle={errorTitle}
      errorDescription={errorDescription}
      defaultOptions={defaultOptions}
    />
  );
};

export default ResourcesContainer;
