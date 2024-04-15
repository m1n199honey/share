import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { addBlog, updateBlog } from "../../../../apis/blogs";
import { useSelector } from "react-redux";

const Index = () => {
  const userInfo = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // State variables for form fields
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [images, setImages] = useState([]);
  const [blogType, setBlogType] = useState("");
  const [tags, setTags] = useState([""]);
  const [requirements, setRequirements] = useState([""]);

  const handleSubmit = async () => {
    // Form data to be sent
    const formData = new FormData();
    formData.append("banner_image", bannerImage);
    images.forEach((image) => formData.append("images", image));

    formData.append("blog_title", blogTitle);
    formData.append("blog_description", blogDescription);
    formData.append("blog_type", blogType);
    formData.append("tags", JSON.stringify(tags));
    formData.append("requirements", JSON.stringify(requirements));
    formData.append("posted_by", userInfo?.user?._id);

    try {
      if (location.pathname === "/blogs/new") {
        // Call your addBlog API with formData
        await addBlog(formData);
      } else {
        // Call your updateBlog API with formData
        await updateBlog(formData);
      }
      navigate("/blogs");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  // Function to handle file input change for banner image
  const handleBannerImageChange = (event) => {
    setBannerImage(event.target.files[0]);
  };

  // Function to handle file input change for multiple images
  const handleImagesChange = (event) => {
    // Convert FileList to Array
    const filesArray = Array.from(event.target.files);
    // Update state with the array of files
    setImages(filesArray);
  };

  // Function to handle change in tag input field
  const handleTagChange = (index, event) => {
    const newTags = [...tags];
    newTags[index] = event.target.value;
    setTags(newTags);
  };

  // Function to add a new tag input field
  const handleAddTag = () => {
    setTags([...tags, ""]);
  };

  // Function to handle change in requirement input field
  const handleRequirementChange = (index, event) => {
    const newRequirements = [...requirements];
    newRequirements[index] = event.target.value;
    setRequirements(newRequirements);
  };

  // Function to add a new requirement input field
  const handleAddRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  return (
    <div className="w-full">
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-7 col-sm-12 m-auto">
              <div className="content-page-header">
                <h5>
                  {location?.pathname === "/blogs/new" ? "Add" : "Edit"} Blog
                </h5>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Blog Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={blogTitle}
                      onChange={(e) => setBlogTitle(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Blog Description</label>
                    <textarea
                      className="form-control"
                      value={blogDescription}
                      onChange={(e) => setBlogDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Banner Image</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={handleBannerImageChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Images</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      multiple
                      onChange={handleImagesChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Blog Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={blogType}
                      onChange={(e) => setBlogType(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Tags</label>
                    {tags.map((tag, index) => (
                      <div key={index} className="d-flex mb-2">
                        <input
                          type="text"
                          className="form-control me-2"
                          value={tag}
                          onChange={(e) => handleTagChange(index, e)}
                        />
                        {index === tags.length - 1 && (
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleAddTag}
                          >
                            Add More
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Requirements</label>
                    {requirements.map((requirement, index) => (
                      <div key={index} className="d-flex mb-2">
                        <input
                          type="text"
                          className="form-control me-2"
                          value={requirement}
                          onChange={(e) => handleRequirementChange(index, e)}
                        />
                        {index === requirements.length - 1 && (
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleAddRequirement}
                          >
                            Add More
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="btn-path">
                  <Link to="/blogs" className="btn btn-cancel me-3">
                    Cancel
                  </Link>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="btn btn-submit"
                  >
                    {location?.pathname === "/blogs/new" ? "Add" : "Update"}
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
