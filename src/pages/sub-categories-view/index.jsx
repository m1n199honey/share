import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getAllSubCategories,
  deleteSubCategory,
} from "../../apis/sub-categories";

const Index = (params) => {
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    getAllSubCategories()
      .then((res) => {
        setSubCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSubCategory(_id)
          .then((res) => {
            setSubCategory(subCategory.filter((item) => item._id != _id));
            console.log("deleted succesfully");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit mb-0">
            <h5>Sub Categories</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <a className="btn-filters active" href="sub-categories.html">
                    <i className="fe fe-list"></i>{" "}
                  </a>
                </li>
                <li>
                  <a className="btn-filters" href="javascript:void(0);">
                    <i className="fe fe-grid"></i>{" "}
                  </a>
                </li>
                <li>
                  <a className="btn-filters" href="localization.html">
                    <i className="fe fe-settings"></i>{" "}
                  </a>
                </li>
                <li>
                  <div className="filter-sorting">
                    <ul>
                      <li>
                        <a href="javascript:void(0);" className="filter-sets">
                          <img
                            src="assets/img/icons/filter1.svg"
                            className="me-2"
                            alt="img"
                          />
                          Filter
                        </a>
                      </li>
                      <li>
                        <span>
                          <img
                            src="assets/img/icons/sort.svg"
                            className="me-2"
                            alt="img"
                          />
                        </span>
                        <div className="review-sort">
                          <select
                            className="select select2-hidden-accessible"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option>Sort by A - Z</option>
                            <option>Sort by A - Z</option>
                          </select>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    to="/sub-categories/new"
                    className="btn btn-primary"
                    href="add-subcategories.html"
                  >
                    <i className="fa fa-plus me-2"></i>Add Sub Categories{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive table-div">
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Sub Category</th>
                      <th>Category</th>
                      <th>Sub Category Slug</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subCategory.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="table-imgname">
                              <span>{item?.sub_category_name}</span>
                            </div>
                          </td>
                          <td>{item?.category?.category_name}</td>
                          <td>{item.slug}</td>
                          <td>
                            <div className="table-actions d-flex">
                              <Link
                                className="delete-table me-2"
                                to="/sub-categories/edit"
                                state={{ item: item }}
                              >
                                <img
                                  src="assets/img/icons/edit.svg"
                                  alt="svg"
                                />
                              </Link>
                              <div
                                className="delete-table"
                                onClick={() => {
                                  deleteHandler(item?._id);
                                }}
                              >
                                <img
                                  src="assets/img/icons/delete.svg"
                                  alt="svg"
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
