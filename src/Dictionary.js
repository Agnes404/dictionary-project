import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(keyword);

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
