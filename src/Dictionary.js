import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // documentation: https://www.pexels.com/api/documentation/
    const pexelsApiKey =
      "563492ad6f91700001000001843844ed782746d8bf34df1742339829";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = {
      Authorization: `Bearer ${pexelsApiKey}`,
    };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Type the word to look up...</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control"
                autoFocus={true}
                onChange={handleKeyword}
                defaultValue={props.defaultKeyword}
              />
              <input type="button" value="Search" className="btn btn-primary" />
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
