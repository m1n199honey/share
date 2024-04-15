import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addSitemap, updateSitemap } from "../../../../apis/sitemap";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sitemapData, setSitemapData] = useState({
    title: location?.state?.item?.title || "",
    links: location?.state?.item?.links || [],
  });

  // Function to handle adding a new row
  const handleAddRow = () => {
    const newLinks = [...sitemapData.links, ""];
    setSitemapData({ ...sitemapData, links: newLinks });
  };

  // Function to handle input change
  const handleChange = (index) => (e) => {
    const newLinks = [...sitemapData.links];
    newLinks[index] = e.target.value;
    setSitemapData({ ...sitemapData, links: newLinks });
  };

  // Function to handle deleting a row
  const handleDeleteRow = (index) => {
    const newLinks = [...sitemapData.links];
    newLinks.splice(index, 1);
    setSitemapData({ ...sitemapData, links: newLinks });
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (location?.pathname === "/sitemap/new") {
      addSitemap(sitemapData)
        .then((res) => {
          console.log("added successfully");
          navigate("/sitemap");
        })
        .catch((err) => console.log(err));
    } else {
      updateSitemap(location?.state?.item?._id, sitemapData)
        .then((res) => {
          console.log("added successfully");
          navigate("/sitemap");
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
                  {location?.pathname === "/sitemap/new" ? "Add" : "Edit"}{" "}
                  Sitemap
                </h5>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Sitemap Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={sitemapData.title}
                      onChange={(e) =>
                        setSitemapData({
                          ...sitemapData,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Sitemap Links</label>
                    {sitemapData.links.map((link, index) => (
                      <div key={index} className="d-flex mb-2">
                        <input
                          type="text"
                          name="links"
                          className="form-control me-2"
                          value={link}
                          onChange={handleChange(index)}
                        />
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDeleteRow(index)}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="btn-path">
                  <Link to="/sitemap" className="btn btn-cancel me-3">
                    Cancel
                  </Link>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-submit"
                  >
                    {location?.pathname === "/sitemap/new" ? "Add" : "Update"}
                  </button>
                  <button
                    onClick={handleAddRow}
                    type="button"
                    className="btn btn-submit ms-3"
                  >
                    Add Link
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
