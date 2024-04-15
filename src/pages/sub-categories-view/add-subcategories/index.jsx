import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAllCategories } from "../../../apis/categories";
import {
  addSubCategory,
  updateSubCategory,
} from "../../../apis/sub-categories";

const Index = () => {
  const location = useLocation();
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState({
    sub_category_name: location?.state?.item?.sub_category_name || "",
    slug: location?.state?.item?.slug || "",
    category: location?.state?.item?.category || {
      category_id: "",
      category_name: "",
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllCategories();
        setCategoryData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      const [categoryId, categoryName] = value.split(":");
      setSubCategoryData((prevData) => ({
        ...prevData,
        category: { category_id: categoryId, category_name: categoryName },
      }));
    } else {
      setSubCategoryData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    if (location.pathname === "/sub-categories/new") {
      // Handle form submission
      addSubCategory(subCategoryData)
        .then((res) => {
          navigate("/sub-categories");
        })
        .catch((err) => console.log(err));
    } else {
      updateSubCategory(location?.state?.item?._id, subCategoryData)
        .then((res) => {
          navigate("/sub-categories");
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
                  {location.pathname === "/sub-categories/edit"
                    ? "Edit"
                    : "Add"}{" "}
                  Sub Category
                </h5>
              </div>
              <div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Category</label>
                      <select
                        className="select m-4"
                        name="category"
                        value={`${subCategoryData.category.category_id}:${subCategoryData.category.category_name}`}
                        onChange={handleChange}
                      >
                        <option>Select Category Type</option>
                        {categoryData.map((item) => (
                          <option
                            key={item._id}
                            value={`${item._id}:${item.category_name}`}
                          >
                            {item.category_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Sub Category Name <span>(English)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sub Category Name"
                        name="sub_category_name"
                        value={subCategoryData.sub_category_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Sub Category Slug <span>(Ex:test-slug)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Category Slug"
                        name="slug"
                        value={subCategoryData.slug}
                        onChange={handleChange}
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
                      <Link
                        to="/sub-categories"
                        className="btn btn-cancel me-3"
                      >
                        Cancel
                      </Link>
                      <button onClick={handleSubmit} className="btn btn-submit">
                        {location.pathname === "/sub-categories/edit"
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
};

export default Index;
