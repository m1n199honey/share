import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addHowItWorks, updateHowItWorks } from "../../../../apis/pricing";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [stepNumber, setStepNumber] = useState("");
  const [image, setImage] = useState(null); // Store file object for image
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle file input change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("step_number", stepNumber);
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);

    if (location?.pathname === "/how-it-works/new") {
      addHowItWorks(formData)
        .then((res) => {
          console.log("added successfully");
          navigate("/how-it-works");
        })
        .catch((err) => console.log(err));
    } else {
      updateHowItWorks(location?.state?.item?._id, formData)
        .then((res) => {
          console.log("updated successfully");
          navigate("/how-it-works");
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
                  {location?.pathname === "/how-it-works/new" ? "Add" : "Edit"}{" "}
                  How It Works
                </h5>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Step Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value={stepNumber}
                      onChange={(e) => setStepNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="btn-path">
                  <Link to="/how-it-works" className="btn btn-cancel me-3">
                    Cancel
                  </Link>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-submit"
                  >
                    {location?.pathname === "/how-it-works/new"
                      ? "Add"
                      : "Update"}
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
