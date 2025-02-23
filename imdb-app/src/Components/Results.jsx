import "../app/globals.css";
import React from "react";
import Card from "./common/Card";

const Results = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mx-w-6xl m-auto">
      {results?.map((ele, i) => (
        <div key={i}>
          <Card singleCardEle={ele} key={i} />
        </div>
      ))}
    </div>
  );
};

export default Results;
