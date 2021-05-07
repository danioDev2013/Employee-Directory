import React from "react";

function SearchBar(props) {
    return (
        <div className="container-flex">
            <div className="container d-flex justify-content-center my-5">
                <form className="g-3 form-width" onSubmit={props.handleFormSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search for an employee by name"
                        aria-label="default input example"
                        onChange={props.handleInputChange}
                        // value={props.search}
                        id="search" />
                </form>
            </div>
        </div>
    )
}

export default SearchBar