import React from "react";
import "./Index.css";
import { scrollTo } from "../../helpers/scrollTo";

const Index = ({ topics, headerIndexText }) => {
  const handleClick = (topicId) => {
    scrollTo({ id: topicId, duration: 200 });
  };

  const renderTopics = () =>
    topics.map((topic, index) => (
      <li
        onClick={() => handleClick(topic._id)}
        className="listItem"
        key={index}
      >
        {topic.topic}
      </li>
    ));

  return (
    <>
      <hr id="line" />
      <div id="listContainer">
        <h4 id="headerIndex">{headerIndexText}</h4>
        <div className="d-flex justify-content-center">
          <ol>
            <>{renderTopics()}</>
          </ol>
        </div>
      </div>
      <hr id="line" />
    </>
  );
};

export default Index;
