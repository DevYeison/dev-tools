import React from "react";

import GradientBackground from "../../components/GradientBackground/GradientBackground";
import CardWithImage from "../../components/CardWithImage/CardWithImage";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Quote from "../../components/Quote/Quote";
import ContentInfo from "../../components/ContentInfo/ContentInfo";
import CardGroup from "react-bootstrap/CardGroup";

const HomePage = ({
  topicList,
  backgroundImageText,
  contentHeaderPhilosophy,
  contentHeaderTools,
  philosophy,
  quoteHeader,
  quoteText,
  author,
  profession
}) => {
  return (
    <>
      <GradientBackground headingText={backgroundImageText}/>
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
            <CardWithImage
              key={cardInfo.id}
              img={cardInfo.img}
              title={cardInfo.title}
              description={cardInfo.description}
            />
          ))}
        </>
      </CardGroup>
    </>
  );
};

export default HomePage;
