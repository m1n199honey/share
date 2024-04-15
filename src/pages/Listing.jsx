
export default function Listing(params) {
  return (
    <div class="main-wrapper">
      <div class="page-wrapper page-settings">
        <div class="content">
          <div class="content-page-header content-page-headersplit">
            <h5>All Listings</h5>
            <div class="list-btn">
              <ul>
                <li>
                  <a class="btn-filters active" href="listings.html">
                    <i class="fe fe-list"></i>{" "}
                  </a>
                </li>
                <li>
                  <a class="btn-filters" href="javascript:void(0);">
                    <i class="fe fe-grid"></i>{" "}
                  </a>
                </li>
                <li>
                  <a class="btn-filters" href="localization.html">
                    <i class="fe fe-settings"></i>{" "}
                  </a>
                </li>
                <li>
                  <div class="filter-sorting">
                    <ul>
                      <li>
                        <a href="javascript:void(0);" class="filter-sets">
                          <img
                            src="assets/img/icons/filter1.svg"
                            class="me-2"
                            alt="img"
                          />
                          Filter
                        </a>
                      </li>
                      <li>
                        <span>
                          <img
                            src="assets/img/icons/sort.svg"
                            class="me-2"
                            alt="img"
                          />
                        </span>
                        <div class="review-sort">
                          <select
                            class="select select2-hidden-accessible"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option>Sort by A - Z</option>
                            <option>Sort by Z - A</option>
                          </select>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a class="btn btn-primary" href="add-listing">
                    <i class="fa fa-plus me-2"></i>Add Listing{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="tab-sets">
                <div class="tab-contents-sets">
                  <ul>
                    <li>
                      <a href="listings.html" class="active">
                        All Listings
                      </a>
                    </li>
                    <li>
                      <a href="pending-listings.html">Pending Listings</a>
                    </li>
                    <li>
                      <a href="approved-listings.html">Approved Listings</a>
                    </li>
                    <li>
                      <a href="rejected-listings.html">Rejected Listings</a>
                    </li>
                  </ul>
                </div>
                <div class="tab-contents-count">
                  <h6>Showing 8-10 of 84 results</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 ">
              <div class="table-resposnive table-div">
                <table class="table datatable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Listing</th>
                      <th>Category</th>
                      <th>Sub Category</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Created By</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div>
                          <a href="view-listing.html" class="table-imgname">
                            <img
                              src="assets/img/services/service-03.jpg"
                              class="me-2"
                              alt="img"
                            />
                            <span>Computer Repair</span>
                          </a>
                        </div>
                      </td>
                      <td>Computer</td>
                      <td>Other</td>
                      <td>$80</td>
                      <td>28 Sep 2022</td>
                      <td>
                        <h6 class="badge-pending">Pending</h6>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="table-profileimage"
                        >
                          <img
                            src="assets/img/customer/user-09.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Provider</span>
                        </a>
                      </td>
                      <td>
                        <div class="table-actions d-flex">
                          <a class="delete-table me-2" href="view-listing.html">
                            <img src="assets/img/icons/eye.svg" alt="svg" />
                          </a>
                          <a class="delete-table me-2" href="edit-listing.html">
                            <img src="assets/img/icons/edit.svg" alt="svg" />
                          </a>
                          <a
                            class="delete-table"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-item"
                          >
                            <img src="assets/img/icons/delete.svg" alt="svg" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <a href="view-listing.html" class="table-imgname">
                          <img
                            src="assets/img/services/service-02.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Car Repair Services</span>
                        </a>
                      </td>
                      <td>Automobile</td>
                      <td>Other</td>
                      <td>$50</td>
                      <td>17 Sep 2022</td>
                      <td>
                        <h6 class="badge-active">Active</h6>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="table-profileimage"
                        >
                          <img
                            src="assets/img/customer/user-02.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Admin</span>
                        </a>
                      </td>
                      <td>
                        <div class="table-actions d-flex">
                          <a class="delete-table me-2" href="view-listing.html">
                            <img src="assets/img/icons/eye.svg" alt="svg" />
                          </a>
                          <a class="delete-table me-2" href="edit-listing.html">
                            <img src="assets/img/icons/edit.svg" alt="svg" />
                          </a>
                          <a
                            class="delete-table"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-item"
                          >
                            <img src="assets/img/icons/delete.svg" alt="svg" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <a href="view-listing.html" class="table-imgname">
                          <img
                            src="assets/img/services/service-04.png"
                            class="me-2"
                            alt="img"
                          />
                          <span>Steam Car Wash</span>
                        </a>
                      </td>
                      <td>Car Wash</td>
                      <td>Other</td>
                      <td>$14</td>
                      <td>13 Sep 2022</td>
                      <td>
                        <h6 class="badge-inactive">Inactive</h6>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="table-profileimage"
                        >
                          <img
                            src="assets/img/customer/user-05.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Provider</span>
                        </a>
                      </td>
                      <td>
                        <div class="table-actions d-flex">
                          <a class="delete-table me-2" href="view-listing.html">
                            <img src="assets/img/icons/eye.svg" alt="svg" />
                          </a>
                          <a class="delete-table me-2" href="edit-listing.html">
                            <img src="assets/img/icons/edit.svg" alt="svg" />
                          </a>
                          <a
                            class="delete-table"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-item"
                          >
                            <img src="assets/img/icons/delete.svg" alt="svg" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <a href="view-listing.html " class="table-imgname">
                          <img
                            src="assets/img/services/service-09.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>House Cleaning </span>
                        </a>
                      </td>
                      <td>Cleaning</td>
                      <td>Other</td>
                      <td>$100</td>
                      <td>07 Sep 2022</td>
                      <td>
                        <h6 class="badge-delete">Delete</h6>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="table-profileimage"
                        >
                          <img
                            src="assets/img/customer/user-02.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Admin</span>
                        </a>
                      </td>
                      <td>
                        <div class="table-actions d-flex">
                          <a class="delete-table me-2" href="view-listing.html">
                            <img src="assets/img/icons/eye.svg" alt="svg" />
                          </a>
                          <a class="delete-table me-2" href="edit-listing.html">
                            <img src="assets/img/icons/edit.svg" alt="svg" />
                          </a>
                          <a
                            class="delete-table"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-item"
                          >
                            <img src="assets/img/icons/delete.svg" alt="svg" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <a href="view-listing.html" class="table-imgname">
                          <img
                            src="assets/img/services/service-08.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Building Construction</span>
                        </a>
                      </td>
                      <td>Cleaning</td>
                      <td>Other</td>
                      <td>$100</td>
                      <td>07 Sep 2022</td>
                      <td>
                        <h6 class="badge-delete">Delete</h6>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="table-profileimage"
                        >
                          <img
                            src="assets/img/customer/user-02.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Admin</span>
                        </a>
                      </td>
                      <td>
                        <div class="table-actions d-flex">
                          <a class="delete-table me-2" href="view-listing.html">
                            <img src="assets/img/icons/eye.svg" alt="svg" />
                          </a>
                          <a class="delete-table me-2" href="edit-listing.html">
                            <img src="assets/img/icons/edit.svg" alt="svg" />
                          </a>
                          <a
                            class="delete-table"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-item"
                          >
                            <img src="assets/img/icons/delete.svg" alt="svg" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <a href="view-listing.html" class="table-imgname">
                          <img
                            src="assets/img/services/service-07.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Interior Designing</span>
                        </a>
                      </td>
                      <td>Interior</td>
                      <td>Other</td>
                      <td>$100</td>
                      <td>07 Sep 2022</td>
                      <td>
                        <h6 class="badge-pending">Pending</h6>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="table-profileimage"
                        >
                          <img
                            src="assets/img/customer/user-09.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Provider</span>
                        </a>
                      </td>
                      <td>
                        <div class="table-actions d-flex">
                          <a class="delete-table me-2" href="view-listing.html">
                            <img src="assets/img/icons/eye.svg" alt="svg" />
                          </a>
                          <a class="delete-table me-2" href="edit-listing.html">
                            <img src="assets/img/icons/edit.svg" alt="svg" />
                          </a>
                          <a
                            class="delete-table"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-item"
                          >
                            <img src="assets/img/icons/delete.svg" alt="svg" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <a href="view-listing.html" class="table-imgname">
                          <img
                            src="assets/img/services/service-09.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Commercial Painting </span>
                        </a>
                      </td>
                      <td>Painting</td>
                      <td>Other</td>
                      <td>$500</td>
                      <td>22 Aug 2022</td>
                      <td>
                        <h6 class="badge-inactive">Inactive</h6>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="table-profileimage"
                        >
                          <img
                            src="assets/img/customer/user-06.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Provider</span>
                        </a>
                      </td>
                      <td>
                        <div class="table-actions d-flex">
                          <a class="delete-table me-2" href="view-listing.html">
                            <img src="assets/img/icons/eye.svg" alt="svg" />
                          </a>
                          <a class="delete-table me-2" href="edit-listing.html">
                            <img src="assets/img/icons/edit.svg" alt="svg" />
                          </a>
                          <a
                            class="delete-table"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-item"
                          >
                            <img src="assets/img/icons/delete.svg" alt="svg" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <a href="view-listing.html" class="table-imgname">
                          <img
                            src="assets/img/services/service-12.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Plumbing Services</span>
                        </a>
                      </td>
                      <td>Plumbing</td>
                      <td>Other</td>
                      <td>$150</td>
                      <td>15 Aug 2022</td>
                      <td>
                        <h6 class="badge-delete">Delete</h6>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="table-profileimage"
                        >
                          <img
                            src="assets/img/customer/user-02.jpg"
                            class="me-2"
                            alt="img"
                          />
                          <span>Admin</span>
                        </a>
                      </td>
                      <td>
                        <div class="table-actions d-flex">
                          <a class="delete-table me-2" href="view-listing.html">
                            <img src="assets/img/icons/eye.svg" alt="svg" />
                          </a>
                          <a class="delete-table me-2" href="edit-listing.html">
                            <img src="assets/img/icons/edit.svg" alt="svg" />
                          </a>
                          <a
                            class="delete-table"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete-item"
                          >
                            <img src="assets/img/icons/delete.svg" alt="svg" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
