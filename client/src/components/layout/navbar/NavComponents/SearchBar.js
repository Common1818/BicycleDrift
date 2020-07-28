import React from "react";
import $ from "jquery";

const SearchBar = () => {
  const closeSearchNav = () => {
    $(".searchBar").addClass("hiddenTransform");
    setTimeout(() => {
      $(".searchBar").addClass("hidden-xs");
    }, 300);
  };

  return (
    <div className="searchBar hidden-xs hiddenTransform" id="searchBar">
      <button
        className="defaultButton secondaryBlack visible-xs closerButton"
        onClick={closeSearchNav}
        id="closeSearchBar"
      >
        <img
          src="https://choosemybicycle.s3.ap-south-1.amazonaws.com/static/icons/buttons/x-mark-black.svg"
          className="img-responsive center-block"
          alt="Close"
          title="Close"
        />
      </button>
      <form
        className="form searchForm"
        id="appNavSearchForm"
        autoComplete="off"
      >
        <div className="form-group positionRelative">
          <input
            style={{ borderRadius: "20px" }}
            type="text"
            className="defaultInput"
            id="appSearch"
            name="appSearch"
            placeholder="Search on CycleDrift"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
