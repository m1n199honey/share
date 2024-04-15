import "./style.css";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { addLegal, getLegal, updateLegal } from "../../../apis/legal";

const Index = () => {
  console.log("params", useParams());
  const params = useParams();
  let dynamicPath =
    params?.policyType === "privacy"
      ? "privacy_policy"
      : params?.policyType === "copyright"
      ? "copyright_policy"
      : params?.policyType === "listing"
      ? "listing_policy"
      : "terms_policy";
  let dynamicName =
    params?.policyType === "privacy"
      ? "Privacy Policy"
      : params?.policyType === "copyright"
      ? "Copyright Policy"
      : params?.policyType === "listing"
      ? "Listing Policy"
      : "Terms";
  const [legalData, setLegalData] = useState({
    legal_type: dynamicPath,
    legal_title: dynamicName,
    legal_content: [{ title: "", description: "" }],
  });
  const [isDataPresent, setIsDataPresent] = useState(false);

  useEffect(() => {
    getLegal(dynamicPath)
      .then((res) => {
        if (res.data) {
          setIsDataPresent(true);
          setLegalData(res.data);
        } else {
          setIsDataPresent(false);
          setLegalData({
            legal_type: dynamicPath,
            legal_title: dynamicName,
            legal_content: [{ title: "", description: "" }],
          });
        }
      })
      .catch((err) => console.log(err));
  }, [params.policyType]);

  // Function to handle adding a new row
  const handleAddRow = () => {
    setLegalData({
      ...legalData,
      legal_content: [
        ...legalData.legal_content,
        { title: "", description: "" },
      ],
    });
  };

  // Function to handle input change
  const handleChange = (index) => (e) => {
    const { name, value } = e.target;
    const updatedContent = [...legalData.legal_content];
    updatedContent[index][name] = value;
    setLegalData({
      ...legalData,
      legal_content: updatedContent,
    });
  };

  // Function to handle deleting a row
  const handleDeleteRow = (index) => {
    if (legalData.legal_content.length === 1) {
      // Prevent deletion if only one row is present
      return;
    }
    const updatedContent = [...legalData.legal_content];
    updatedContent.splice(index, 1);
    setLegalData({
      ...legalData,
      legal_content: updatedContent,
    });
  };

  const handleSubmit = () => {
    if (isDataPresent) {
      updateLegal(legalData._id, legalData)
        .then((res) => {
          console.log("updated successfully");
        })
        .catch((err) => console.log(err));
    } else {
      addLegal(legalData)
        .then((res) => {
          console.log("added successfully");
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
                <h5>{dynamicName}</h5>
              </div>
              {legalData.legal_content.map((content, index) => (
                <div className="row" key={index}>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Heading</label>
                      <input
                        type="text"
                        name="title"
                        value={content.title}
                        onChange={handleChange(index)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        type="text"
                        name="description"
                        value={content.description}
                        onChange={handleChange(index)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  {legalData.legal_content.length > 1 && (
                    <div className="col-lg-12">
                      <button
                        onClick={() => handleDeleteRow(index)}
                        type="button"
                        className="btn btn-submit mb-4"
                      >
                        Delete Row
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <div className="col-lg-12">
                <div className="btn-path">
                  <Link to="/city" className="btn btn-cancel me-3">
                    Cancel
                  </Link>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-submit"
                  >
                    {isDataPresent ? "Update" : "Add"}
                  </button>
                  <button
                    onClick={handleAddRow}
                    type="button"
                    className="btn btn-submit ms-3"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
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
