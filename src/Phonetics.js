import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetics.audio);
  return (
    <div className="Phonetics">
      <div>{props.phonetics.text}</div>
      <ReactAudioPlayer src={props.phonetics.audio} controls />
    </div>
  );
}
