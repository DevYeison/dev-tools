import React from "react";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
import FormPrice from '../../components/FormPrice/FormPrice';
import ContentHeader from '../../components/ContentHeader/ContentHeader';
import ContentInfo from '../../components/ContentInfo/ContentInfo';

const PricePage = ({headingText,contentHeader, contentText, /* questions */}) => {
  return (
    <>
    <GradientBackground headingText={headingText}/>
    <ContentHeader contentHeaderText={contentHeader}/>
    <ContentInfo contentText={contentText}/>
    <FormPrice /* formQuestions={questions} */ />
    </>
  );
};

export default PricePage;
