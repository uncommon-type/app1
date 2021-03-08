import React, { useContext } from "react";

import DispatchContext from "../DispatchContext";

import RemoveButton from "./RemoveButton";
import StarIcon from "../Icons/Star.js";

const PlayListItem = ({ id, title, year }) => {
  const appDispatch = useContext(DispatchContext);

  const handleRemove = () => {
    appDispatch({ type: "REMOVE_FROM_PLAYLIST", payload: { id } });
  };

  return (
    <li className="playlist__item">
      <div className="playlist__item__body">
        <div className="playlist-item__body__inner">
          <StarIcon id="star" />
          <p className="playlist__item__text" data-movie-title="">
            {title} ({year})
          </p>
        </div>
        <RemoveButton onClick={handleRemove} id={id} />
      </div>
    </li>
  );
};

export default PlayListItem;
