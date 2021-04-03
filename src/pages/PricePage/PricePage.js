import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PricePage = ({
  brandName,
  navList,
  currentYear,
  reactDocsUrl,
  githubProfileUrl,
}) => {
  return (
    <>
      <Header brandName={brandName} topicList={navList} />
      <div style={{height: "82vh"}}>
        
      </div>
      <Footer
        year={currentYear}
        ReactUrl={reactDocsUrl}
        GithubUrl={githubProfileUrl}
      />
    </>
  );
};

export default PricePage;
