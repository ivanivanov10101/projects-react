import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import myApi from "./api/myApi";
import AsyncSelect from "react-select/async";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const fetchUsers = () => {
    return myApi.get("/users?page=1").then((result) => {
      return result.data.data;
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"> </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <AsyncSelect
            cacheOptions
            defaultOptions
            value={selectedValue}
            getOptionLabel={(e) => e.first_name + " " + e.last_name}
            getOptionValue={(e) => e.id}
            loadOptions={fetchUsers}
            onInputChange={handleInputChange}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="row userDetails">
        <div className="col-md-6 img">
          <img
            src={selectedValue && selectedValue.avatar}
            className="img-rounded"
          />
        </div>

        <div className="col-md-6">
          <blockquote>
            <h5>
              {selectedValue && selectedValue.first_name}{" "}
              {selectedValue && selectedValue.last_name}
            </h5>
            <small>
              <cite title="Source Title">
                {" "}
                {selectedValue && selectedValue.email}
                <i className="icon-map-marker"></i>
              </cite>
            </small>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default App;
