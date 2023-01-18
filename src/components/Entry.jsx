import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import Japan from "../assets/japan.jpg";

export default function Entry(props) {
  return (
    <div>
      <div className="entry">
        <img src={props.coverImg} alt="" className="entry--img" />
        <div className="entry--content">
          <span>
            <FontAwesomeIcon icon={faMapPin} className="entry--map-marker" />
            &nbsp; {props.location} &nbsp;
            <a href={props.link} className="entry--link-to-google">
              View on Google Maps
            </a>
          </span>
          <h2 className="entry--title">{props.title}</h2>
          <span className="entry--stay">
            {props.date.arrived} - {props.date.left}
          </span>
          <p className="entry--text">{props.text}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
