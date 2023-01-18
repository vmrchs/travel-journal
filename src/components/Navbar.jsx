import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <FontAwesomeIcon icon={faBicycle} className="icon" />
        &nbsp;MyTravelJournal
      </h1>
    </nav>
  );
}
