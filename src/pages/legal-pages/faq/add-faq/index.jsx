import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addFaq, updateFaq } from "../../../../apis/faq";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initializing state based on FaqSchema
  const [faqData, setFaqData] = useState({
    faq_title: location?.state?.item?.faq_title || "",
    faq_content: location?.state?.item?.faq_content || [],
  });

  // Function to handle adding a new row
  const handleAddRow = () => {
    setFaqData((prevState) => ({
      ...prevState,
      faq_content: [
        ...prevState.faq_content,
        { heading: "", accordion_content: [{ title: "", description: "" }] },
      ],
    }));
  };

  // Function to handle input change for FAQ title or accordion content
  // Function to handle input change for FAQ title or accordion content
  const handleChange = (index, key, subKey) => (e) => {
    const { value } = e.target;
    setFaqData((prevState) => ({
      ...prevState,
      faq_content: prevState.faq_content.map((item, i) => {
        if (i === index) {
          if (subKey !== undefined) {
            // If subKey is defined, it means we're updating accordion content
            return {
              ...item,
              accordion_content: item.accordion_content.map((content, j) => {
                if (j === subKey) {
                  return { ...content, [key]: value };
                }
                return content;
              }),
            };
          } else {
            // If subKey is undefined, it means we're updating FAQ item heading
            return { ...item, [key]: value };
          }
        }
        return item;
      }),
    }));
  };

  // Function to handle deleting a row
  const handleDeleteRow = (index) => {
    setFaqData((prevState) => ({
      ...prevState,
      faq_content: prevState.faq_content.filter((_, i) => i !== index),
    }));
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (location?.pathname === "/faq/new") {
      addFaq(faqData)
        .then((res) => {
          console.log("added successfully");
          navigate("/faq");
        })
        .catch((err) => console.log(err));
    } else {
      updateFaq(location?.state?.item?._id, faqData)
        .then((res) => {
          console.log("added successfully");
          navigate("/faq");
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
                  {location?.pathname === "/faq/new" ? "Add" : "Edit"} Faq
                </h5>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Faq Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={faqData.faq_title}
                      onChange={(e) =>
                        setFaqData({ ...faqData, faq_title: e.target.value })
                      }
                    />
                  </div>
                </div>
                {faqData.faq_content.map((item, index) => (
                  <div key={index} className="col-lg-12">
                    <div className="form-group">
                      <label>Faq item heading</label>
                      <input
                        type="text"
                        className="form-control"
                        value={item.heading}
                        onChange={handleChange(index, "heading")}
                      />
                    </div>
                    {item.accordion_content.map((content, subIndex) => (
                      <div key={subIndex} className="form-group">
                        <label>Faq item Content</label>
                        <div className="d-flex mb-2">
                          <input
                            type="text"
                            className="form-control me-2"
                            value={content.title}
                            placeholder="title"
                            onChange={handleChange(index, "title", subIndex)}
                          />
                          <input
                            type="text"
                            className="form-control me-2"
                            placeholder="description"
                            value={content.description}
                            onChange={handleChange(
                              index,
                              "description",
                              subIndex
                            )}
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-danger mb-4"
                      onClick={() => handleDeleteRow(index)}
                    >
                      Delete Item
                    </button>
                  </div>
                ))}
              </div>
              <div className="col-lg-12">
                <div className="btn-path">
                  <Link to="/faq" className="btn btn-cancel me-3">
                    Cancel
                  </Link>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-submit"
                  >
                    {location?.pathname === "/faq/new" ? "Add" : "Update"}
                  </button>
                  <button
                    onClick={handleAddRow}
                    type="button"
                    className="btn btn-submit ms-3"
                  >
                    Add Item
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
