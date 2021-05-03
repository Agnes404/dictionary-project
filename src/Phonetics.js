import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="pronunciation">{props.phonetics.text}</div>
      <ReactAudioPlayer
        src={props.phonetics.audio}
        controls
        className="audio"
      />
    </div>
  );
}
