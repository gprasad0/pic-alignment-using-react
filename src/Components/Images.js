import React from "react";

const ImageList = props => {
  const imagesList = props.images.map(image => {
    return (
      <img
        alt={image.alt_description}
        key={image.id}
        src={image.urls.regular}
      />
    );
  });

  console.log("this is the images", props.images);
  return <div>{imagesList}</div>;
};

export default ImageList;
