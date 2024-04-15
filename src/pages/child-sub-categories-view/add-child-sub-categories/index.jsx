import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAllSubCategories } from "../../../apis/sub-categories";
import {
  addChildSubCategory,
  updateChildSubCategory,
} from "../../../apis/child-sub-categories";

export default function AddChildSubCategory(params) {
  const location = useLocation();
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [childSubCategoryData, setChildSubCategoryData] = useState({
    child_sub_category_name:
      location.state?.item?.child_sub_category_name || "",
    slug: location.state?.item?.slug || "",
    sub_category: location.state?.item?.sub_category || {
      sub_category_id: "",
      sub_category_name: "",
    },
    category: location.state?.item?.category || {
      category_id: "",
      category_name: "",
    },
  });

  useEffect(() => {
    getAllSubCategories()
      .then((res) => {
        setSubCategoryData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (location.pathname === "/childsub-categories/new") {
      addChildSubCategory(childSubCategoryData)
        .then((res) => {
          navigate("/childsub-categories");
        })
        .catch((err) => console.log(err));
    } else {
      updateChildSubCategory(location.state?.item?._id, childSubCategoryData)
        .then((res) => {
          navigate("/childsub-categories");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSubCategoryChange = (e) => {
    const [subCategoryId, subCategoryName, categoryId, categoryName] =
      e.target.value.split(":");
    setChildSubCategoryData({
      ...childSubCategoryData,
      sub_category: {
        sub_category_id: subCategoryId,
        sub_category_name: subCategoryName,
      },
      category: {
        category_id: categoryId,
        category_name: categoryName,
      },
    });
  };

  useEffect(() => {
    // axios
    //   .get(`${process.env.REACT_APP_BACKEND}subcategories`)
    //   .then(function (response) {
    //     console.log(response);
    //     setSubCategoryData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  return (
    <div className="w-full">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-lg-7 col-sm-12 m-auto">
              <div class="content-page-header">
                <h5>
                  {location.pathname === "/childsub-categories/new"
                    ? "Add"
                    : "Edit"}{" "}
                  Child Sub Category
                </h5>
              </div>
              <div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Sub Category</label>
                      <select
                        class="select m-4"
                        value={`${childSubCategoryData.sub_category.sub_category_id}:${childSubCategoryData.sub_category.sub_category_name}:${childSubCategoryData.category.category_id}:${childSubCategoryData.category.category_name}`}
                        onChange={handleSubCategoryChange}
                      >
                        <option value="">Select Sub Category</option>
                        {subCategoryData?.map((item) => {
                          return (
                            <option
                              value={`${item._id}:${item.sub_category_name}:${item.category.category_id}:${item.category.category_name}`}
                            >
                              {item?.sub_category_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>Slug</label>
                      <input
                        value={childSubCategoryData.slug}
                        type="text"
                        class="form-control"
                        placeholder="Slug"
                        onChange={(e) => {
                          setChildSubCategoryData({
                            ...childSubCategoryData,
                            slug: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label>
                        Child Sub Category <span>(English)</span>
                      </label>
                      <input
                        value={childSubCategoryData.child_sub_category_name}
                        type="text"
                        class="form-control"
                        placeholder="Category Name"
                        onChange={(e) => {
                          setChildSubCategoryData({
                            ...childSubCategoryData,
                            child_sub_category_name: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="btn-path">
                      <Link
                        to="/childsub-categories"
                        class="btn btn-cancel me-3"
                      >
                        Cancel
                      </Link>
                      <button
                        onClick={() => {
                          handleSubmit();
                        }}
                        class="btn btn-submit "
                      >
                        {location.pathname === "/childsub-categories/edit"
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
