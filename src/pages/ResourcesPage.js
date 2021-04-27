import React from "react";
import ContentHeader from "../components/ContentHeader/ContentHeader";
import ContentInfo from "../components/ContentInfo/ContentInfo";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import CardWithImage from "../components/CardWithImage/CardWithImage";
import ResourceDetailContainer from "../containers/ResourceDetailContainer";

import { Switch, Route, useRouteMatch } from "react-router-dom";

const ResourcesPage = ({
  contentHeaderText,
  contentText,
  resources,
  loading,
  error,
  errorTitle,
  errorDescription,
}) => {
  let { path, url } = useRouteMatch();

  const renderResources = () => {
    if (loading) return <Loading />;
    if (error)
      return (
        <Error errorTitle={errorTitle} errorDescription={errorDescription} />
      );
    return resources.map((resource, index) => (
      <CardWithImage
        key={index}
        image={resource.image}
        cardTitle={resource.title}
        index={index}
        resourceUrl={`${url}/${resource._id.toLowerCase()}`}
      />
    ));
  };

  return (
    <Switch>
      <Route exact path={`${path}/:resourceId`}>
        <ResourceDetailContainer />
      </Route>
      <Route exact path={`${path}`}>
        <>
          <ContentHeader contentHeaderText={contentHeaderText} />
          <ContentInfo contentText={contentText} />
          {renderResources()}
        </>
      </Route>
    </Switch>
  );
};

export default ResourcesPage;
