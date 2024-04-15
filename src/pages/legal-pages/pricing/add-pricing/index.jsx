import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addPricing, updatePricing } from "../../../../apis/pricing";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pricingData, setPricingData] = useState({
    pricing_type: location?.state?.item?.pricing_type || "",
    price_per_month: location?.state?.item?.price_per_month || "",
    description: location?.state?.item?.description || "",
    benefits: location?.state?.item?.benefits || [],
  });

  // Function to handle adding a new row
  const handleAddRow = () => {
    setPricingData((prevData) => ({
      ...prevData,
      benefits: [...prevData.benefits, ""],
    }));
  };

  // Function to handle input change
  const handleChange = (index) => (e) => {
    const { name, value } = e.target;
    if (name === "benefits") {
      const updatedBenefits = [...pricingData.benefits];
      updatedBenefits[index] = value;
      setPricingData((prevData) => ({
        ...prevData,
        benefits: updatedBenefits,
      }));
    } else {
      setPricingData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Function to handle deleting a row
  const handleDeleteRow = (index) => {
    const updatedBenefits = [...pricingData.benefits];
    updatedBenefits.splice(index, 1);
    setPricingData((prevData) => ({
      ...prevData,
      benefits: updatedBenefits,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      if (location?.pathname === "/pricing/new") {
        await addPricing(pricingData);
      } else {
        await updatePricing(location?.state?.item?._id, pricingData);
      }
      console.log("Operation successful");
      navigate("/pricing");
    } catch (error) {
      console.error("Error:", error);
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
                  {location?.pathname === "/pricing/new" ? "Add" : "Edit"}{" "}
                  Pricing
                </h5>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Pricing Type</label>
                    <input
                      type="text"
                      name="pricing_type"
                      className="form-control"
                      value={pricingData.pricing_type}
                      onChange={handleChange()}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price Per Month</label>
                    <input
                      type="text"
                      name="price_per_month"
                      className="form-control"
                      value={pricingData.price_per_month}
                      onChange={handleChange()}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      value={pricingData.description}
                      onChange={handleChange()}
                    ></textarea>
                  </div>
                  {pricingData.benefits.map((benefit, index) => (
                    <div className="form-group" key={index}>
                      <label>Benefit</label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="benefits"
                          className="form-control"
                          value={benefit}
                          onChange={handleChange(index)}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => handleDeleteRow(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleAddRow}
                    >
                      Add Benefit
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="btn-path">
                  <Link to="/pricing" className="btn btn-cancel me-3">
                    Cancel
                  </Link>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-submit"
                  >
                    {location?.pathname === "/pricing/new" ? "Add" : "Update"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
