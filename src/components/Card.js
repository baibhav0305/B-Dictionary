import React from "react";
import Mean from "./Mean";

const Card = ({ word, phonetic, audio, origin, meaning }) => {
  let wor = word;

  return (
    <div className="card container">
      <div className="scroll">
        <h3>{wor.toUpperCase()}</h3>
        <div
          className="phonetics"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <p style={{ color: "darksalmon", fontWeight: "bold" }}>{phonetic}</p>
          <audio src={audio} controls />
        </div>
        {origin && (
          <p>
            <strong>Origin:</strong> {origin}
          </p>
        )}
        {meaning.map((mean) => {
          return (
            <Mean speech={mean.partOfSpeech} definitions={mean.definitions} />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
// {/* <h5>Cards</h5> */}
