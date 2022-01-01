import React from "react";
import Card from "./Card";

const Definition = ({ result }) => {
  return (
    <div className="definition">
      {result.map((res) => {
        return (
          <Card
            word={res.word}
            phonetic={res.phonetic}
            audio={res.phonetics[0].audio}
            origin={res.origin}
            meaning={res.meanings}
          />
        );
      })}
    </div>
  );
};

export default Definition;
