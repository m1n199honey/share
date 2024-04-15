import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getBlogs, deleteBlog } from "../../../apis/blogs";

const Index = (params) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getBlogs()
      .then((res) => {
        setBlogData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      sblogDataCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(_id)
          .then((res) => {
            setBlogData(blogData.filter((item) => item._id != _id));
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
            <h5>Blogs</h5>
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
                  <Link className="btn btn-primary" to="/blogs/new">
                    <i className="fa fa-plus me-2"></i>Add Blog{" "}
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
                      <th>Title</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogData.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <div className="table-imgname">
                              <span>{item?.blog_title}</span>
                            </div>
                          </td>
                          <td>
                            <div className="table-actions d-flex">
                              <Link
                                className="delete-table me-2"
                                to="/how-it-works/edit"
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
