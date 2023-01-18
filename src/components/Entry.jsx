import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faMapPin } from "@fortawesome/free-solid-svg-icons";

export default function Entry() {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <span>
          <FontAwesomeIcon icon={faMapPin} />
          &nbsp; Japan &nbsp;
          <a href="">View on Google Maps</a>
        </span>
        <h2>Mount Fuji</h2>
        <span>12 Jan, 2021 - 24 Jan, 2021</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          harum culpa, ducimus accusamus repellat corrupti eaque illo provident
          hic exercitationem autem quasi ex rem aut error qui, quaerat quas.
          Voluptates.
        </p>
      </div>
    </div>
  );
}
