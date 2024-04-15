import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addCity, updateCity } from "../../../apis/city";

export default function Addcity() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cityData, setCityData] = useState({
    city_name: location?.state?.item?.city_name || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (location.pathname === "/city/edit") {
      updateCity(location?.state?.item?._id, cityData)
        .then((res) => {
          navigate("/city");
        })
        .catch((err) => console.log(err));
    } else {
      addCity(cityData)
        .then((res) => {
          navigate("/city");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="w-full">
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-7 col-sm-12 m-auto">
              <div className="content-page-header">
                <h5>
                  {location.pathname === "/city/edit" ? "Edit" : "Add"} City
                </h5>
              </div>
              <div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Location Name <span>(English)</span>
                      </label>
                      <input
                        type="text"
                        name="city_name"
                        value={cityData.city_name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="City Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn-path">
                      <Link to="/locations" className="btn btn-cancel me-3">
                        Cancel
                      </Link>
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="btn btn-submit "
                      >
                        {location.pathname === "/location/edit" ? "Update" : "Add"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
