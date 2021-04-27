import React from "react";
import ResourceDetailPage from "../pages/ResourceDetailPage";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ResourceDetailContainer = () => {
  let { resourceId } = useParams();
  const resourceUrl = `http://localhost:4000/1/api/resource/${resourceId}`;

  const { data, loading, error } = useFetch(resourceUrl);
  const errorTitle = "Error en el servidor";
  const errorDescription =
    "La información que estaba buscando no pudo ser encontrada, intente refrescar la página o comuniquese con soporte.";
  const headerIndexText = "Índice";

  return (
    <ResourceDetailPage
      resource={data}
      loading={loading}
      error={error}
      errorTitle={errorTitle}
      errorDescription={errorDescription}
      headerIndexText={headerIndexText}
    />
  );
};

export default ResourceDetailContainer;
