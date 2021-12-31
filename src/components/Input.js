import React, { useState } from "react";

const Input = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (query) => {
    setText(query);
    // console.log(query);
    getQuery(query);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(text);
  };

  return (
    <div className="input">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          className="form-control"
          placeholder="Search Word"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Input;
