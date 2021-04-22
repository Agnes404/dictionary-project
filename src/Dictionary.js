import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(keyword);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>You are looking for...</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            autoFocus={true}
            onChange={handleKeyword}
          />
          <input type="button" value="Search" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
