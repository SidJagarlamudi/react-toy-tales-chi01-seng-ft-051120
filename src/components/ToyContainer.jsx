import React from "react";
import ToyCard from "./ToyCard";

const ToyContainer = (props) => {
  return (
    <div id="toy-collection">
      {props.data.map((toy, index) => (
        <ToyCard
          key={index}
          toy={toy}
          handleLike={props.handleLike}
          handleDonate={props.handleDonate}
        />
      ))}
    </div>
  );
};

export default ToyContainer;
