import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAllCategories, deleteCategory } from "../../apis/categories";

const Index = (params) => {
  const [category, setCategoryData] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategoryData(res.data);
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
        deleteCategory(_id)
          .then((res) => {
            setCategoryData(category.filter((item) => item._id != _id));
            console.log("deleted succesfully");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="w-full">
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit mb-0">
            <h5>Categories</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <a className="btn-filters active" href="categories.html">
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
                  <Link className="btn btn-primary" to="/categories/new">
                    <i className="fa fa-plus me-2"></i>Add Categories{" "}
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
                      <th>Category</th>
                      <th>Category Slug</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <div className="table-imgname">
                              <span>{item.category_name}</span>
                            </div>
                          </td>
                          <td>{item.slug}</td>
                          <td>
                            <div className="table-actions d-flex">
                              <Link
                                className="delete-table me-2"
                                to="/categories/edit"
                                state={{
                                  item: item,
                                }}
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
