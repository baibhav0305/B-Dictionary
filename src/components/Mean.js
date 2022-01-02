import React from "react";

const Mean = ({ speech, definitions }) => {
  return (
    <div>
      <h5>{speech}</h5>
      {definitions.map((def) => {
        return (
          <li key={def.definition}>
            <span>{def.definition}</span>
            {def.example && (
              <p>
                <em style={{ color: "goldenrod" }}>Example: {def.example}</em>
              </p>
            )}
          </li>
        );
      })}
    </div>
  );
};

export default Mean;
