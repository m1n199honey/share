import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addCategory, updateCategory } from "../../../apis/categories";

export default function AddCategory() {
  const location = useLocation();
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState({
    category_name: location?.state?.item?.category_name || "",
    slug: location?.state?.item?.slug || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (location.pathname === "/categories/edit") {
      updateCategory(location?.state?.item?._id, categoryData)
        .then((res) => {
          navigate("/categories");
        })
        .catch((err) => console.log(err));
    } else {
      addCategory(categoryData)
        .then((res) => {
          navigate("/categories");
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
                  {location.pathname === "/categories/edit" ? "Edit" : "Add"}{" "}
                  Categories
                </h5>
              </div>
              <div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Category Name <span>(English)</span>
                      </label>
                      <input
                        type="text"
                        name="category_name"
                        value={categoryData.category_name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Category Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Category Slug <span>(Ex:test-slug)</span>
                      </label>
                      <input
                        type="text"
                        name="slug"
                        value={categoryData.slug}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Category Slug"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-0">
                      <label>Category Image</label>
                    </div>
                    <div className="form-uploads mb-4">
                      <div className="form-uploads-path">
                        <img src="assets/img/icons/upload.svg" alt="img" />
                        <div className="file-browse">
                          <h6>Drag & drop image or </h6>
                          <div className="file-browse-path">
                            <input type="file" />
                            <a href="javascript:void(0);"> Browse</a>
                          </div>
                        </div>
                        <h5>Supported formats: JPEG, PNG</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn-path">
                      <Link to="/categories" className="btn btn-cancel me-3">
                        Cancel
                      </Link>
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="btn btn-submit "
                      >
                        {location.pathname === "/categories/edit"
                          ? "Update"
                          : "Add"}
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
