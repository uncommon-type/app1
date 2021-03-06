import React, { useContext } from "react";
import { Link } from "react-router-dom";

import DispatchContext from "../DispatchContext";

import AddButton from "./AddButton";
import StarIcon from "../Icons/Star.js";

const MovieListItem = ({ id, title, year, isAdded }) => {
  const appDispatch = useContext(DispatchContext);

  const handleAdd = () => {
    appDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { id, title, year },
    });
  };

  return (
    <li className="movie-item">
      <div className="movie-item__body">
        <Link to={`/movie/${id}`}>
          <div className="movie-item__body__inner">
            <StarIcon id="star" />
            <p className="movie-item__title">
              {title} ({year})
            </p>
          </div>
        </Link>
        <AddButton onClick={handleAdd} isAdded={isAdded} />
      </div>
    </li>
  );
};

export default MovieListItem;
