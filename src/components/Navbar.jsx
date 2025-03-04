import React from "react";
import PixabayContext from "../context/PixabayContext";
import { useContext } from "react";

const Navbar = () => {
  const { fetchImageByCategory, setQuery, query } = useContext(PixabayContext);

  const handleClear = () => {
    setQuery(""); 
  };


  return (
    <>
      <div className="container text-center my-5">
        <button
          onClick={() => fetchImageByCategory("fashion")}
          type="button"
          className="btn btn-outline-primary my-3 mx-2"
        >
          Fashion
        </button>
        <button
          onClick={() => fetchImageByCategory("nature")}
          type="button"
          className="btn btn-outline-secondary my-2 mx-2"
        >
          Nature
        </button>
        <button
          onClick={() => fetchImageByCategory("science")}
          type="button"
          className="btn btn-outline-success my-2 mx-2"
        >
          Science
        </button>
        <button
          onClick={() => fetchImageByCategory("education")}
          type="button"
          className="btn btn-outline-danger my-2 mx-2"
        >
          Education
        </button>
        <button
          onClick={() => fetchImageByCategory("places")}
          type="button"
          className="btn btn-outline-warning my-2 mx-2"
        >
          Places
        </button>
        <button
          onClick={() => fetchImageByCategory("animals")}
          type="button"
          className="btn btn-outline-info my-2 mx-2"
        >
          Animals
        </button>
        <button
          onClick={() => fetchImageByCategory("industry")}
          type="button"
          className="btn btn-outline-secondary my-2 mx-2"
        >
          Industry
        </button>
        <button
          onClick={() => fetchImageByCategory("computer")}
          type="button"
          className="btn btn-outline-dark my-2 mx-2"
        >
          Computer
        </button>
        <button
          onClick={() => fetchImageByCategory("food")}
          type="button"
          className="btn btn-outline-warning my-2 mx-2"
        >
          Food
        </button>
        <button
          onClick={() => fetchImageByCategory("sports")}
          type="button"
          className="btn btn-outline-danger my-2 mx-2"
        >
          Sports
        </button>
        <button
          onClick={() => fetchImageByCategory("travel")}
          type="button"
          className="btn btn-outline-success my-2 mx-2"
        >
          Travel
        </button>
        <button
          onClick={() => fetchImageByCategory("people")}
          type="button"
          className="btn btn-outline-primary my-2 mx-2"
        >
          People
        </button>
      </div>

      <div className="container my-5" style={{ width: "600px", display:"flex" }}>
        <input
          value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            class="form-control text-dark"
          />
            <button onClick={handleClear} className="btn btn-outline-primary mx-3 my">Clear</button>
      </div>
    </>
  );
};

export default Navbar;
