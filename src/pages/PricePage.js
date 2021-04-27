import React  from "react";
import FormPrice from '../components/FormPrice/FormPrice';
import ContentHeader from '../components/ContentHeader/ContentHeader';
import ContentInfo from '../components/ContentInfo/ContentInfo';

const PricePage = ({contentHeader, contentText, /* questions */}) => {
  return (
    <>
    <ContentHeader contentHeaderText={contentHeader}/>
    <ContentInfo contentText={contentText}/>
    <FormPrice /* formQuestions={questions} */ />
    </>
  );
};

export default PricePage;
