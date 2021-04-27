import React from "react";

import GradientBackground from "../components/GradientBackground/GradientBackground";
import CardWithAnimation from "../components/CardWithAnimation/CardWithAnimation";
import ContentHeader from "../components/ContentHeader/ContentHeader";
import Quote from "../components/Quote/Quote";
import ContentInfo from "../components/ContentInfo/ContentInfo";
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
  profession,
  options,
  handleAnimationClick,
  isPaused
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
            <CardWithAnimation
              key={cardInfo.id}
              title={cardInfo.title}
              description={cardInfo.description}
              animation={cardInfo.animation}
              defaultOptions={options}
              isPaused={isPaused}
              handleAnimationClick={handleAnimationClick}
            />
          ))}
        </>
      </CardGroup>
    </>
  );
};

export default HomePage;
