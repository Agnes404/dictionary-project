import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div>{props.phonetics.text}</div>
      <a href="{props.phonetics.audio}">Listen here</a>
    </div>
  );
}
