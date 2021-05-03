import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div>
            <div className="row">
              {props.photos.map((photo, index) => {
                return (
                  <div className="col-4" key={index}>
                    <a
                      href={photo.src.original}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={photo.src.tiny}
                        alt={props.keyword}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
