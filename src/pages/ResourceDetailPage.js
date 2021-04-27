import React, { useState } from "react";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import ContentHeader from "../components/ContentHeader/ContentHeader";
import ContentInfo from "../components/ContentInfo/ContentInfo";
import Image from "react-bootstrap/Image";
import Index from "../components/Index/Index";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

const ResourceDetailPage = ({
  resource,
  loading,
  error,
  errorTitle,
  errorDescription,
  headerIndexText,
}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);

  if (loading) return <Loading />;
  if (error)
    return (
      <Error errorTitle={errorTitle} errorDescription={errorDescription} />
    );
  return (
    <>
      <div className="m-5">
        <Image src={resource.image} fluid />
      </div>
      <ContentHeader contentHeaderText={resource.title} />
      <ContentInfo contentText={resource.description} />
      <Index topics={resource.topics} headerIndexText={headerIndexText} />
      {/*  {resource.topics.map((topic, index) => {
        return (
          <>
            <h5
              key={topic._id}
              id={topic._id}
              className="my-5 d-flex justify-content-center"
            >
              {topic.topic}
            </h5>
            <p
              key={index}
              id="topicExplain"
              className="d-flex justify-content-center"
            >
              {topic.explanation}
            </p>
            <CardColumns id="paddingColumns" className="mx-5 mb-5">
              {topic.images.map((image, index) => {
                images.push(image);
                return (
                  <Card
                    key={`${topic._id}${index++}`}
                    onClick={() => {
                      setIsOpen(true);
                      setPhotoIndex(images.indexOf(image));
                    }}
                  >
                    <Card.Img
                      style={{ width: "100%" }}
                      src={image}
                    />
                  </Card>
                );
              })}
            </CardColumns>
          </>
        );
      })} */}
      <h6 id="conclusion">Conclusión</h6>
      <ContentInfo contentText={resource.conclusion} />
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
      <hr id="line" />
      <h6 id="link" className="d-flex justify-content-center">
        Links
      </h6>
      <ul>
       {/*  {resource.links.map((link, index) => {
          return (
            <>
              <li
                key={index}
                className="d-flex justify-content-center linkElement"
                style={{ listStyleType: "none" }}
              >
                {link.name}:&nbsp;
                <a
                  key={link._id}
                  href={link.link}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  {link.link}
                </a>
              </li>
            </>
          );
        })} */}
      </ul>
    </>
  );
};

export default ResourceDetailPage;
