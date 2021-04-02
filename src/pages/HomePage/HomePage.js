import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import TopicCard from "../../components/TopicCard/TopicCard";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Quote from "../../components/Quote/Quote";
import ContentInfo from "../../components/ContentInfo/ContentInfo";
import CardGroup from "react-bootstrap/CardGroup";

const HomePage = ({
  brandName,
  topicList,
  backgroundImageText,
  contentHeaderPhilosophy,
  contentHeaderTools,
  philosophy,
  quoteHeader,
  quoteText,
  author,
  profession,
  currentYear,
  reactDocsUrl,
  githubProfileUrl,
}) => {
  return (
    <>
      <Header brandName={brandName} topicList={topicList} />
      <BackgroundImage heading={backgroundImageText} />
      <ContentHeader contentHeaderText={contentHeaderPhilosophy} />
      <ContentInfo contetText={philosophy} />
      <Quote
        quoteHeader={quoteHeader}
        quoteText={quoteText}
        author={author}
        profession={profession}
      />
      <ContentHeader contentHeaderText={contentHeaderTools} />
      <CardGroup className="px-3 pb-5">
        <>
          {topicList.map((cardInfo) => (
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
        ReactUrl={reactDocsUrl}
        GithubUrl={githubProfileUrl}
      />
    </>
  );
};

export default HomePage;
