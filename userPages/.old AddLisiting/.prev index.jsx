import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../home/footer/Footer";
import UserHeader from "../Userheader";
import { Card, Row, Form } from "react-bootstrap";

export default function AddListing() {
  const [formData, setFormData] = React.useState({});
  const parms = useLocation().pathname;
  const [activeCategory, setActiveCategory] = React.useState(5);
  const categories = [
    "Automobile",
    "Building & Construction",
    "Education",
    "HealthCare & Doctors",
    "Home",
    "Job", // 5
    "On Demand Services",
    "Packer & Movers",
    "Property",
    "Restaurants",
    "Sell",
    "Travel & Transport",
    "Wedding & Events",
  ];

  return (
    <>
      <UserHeader parms={parms} />
      <Breadscrumb />
      <div className="dashboard-content">
        <div className="container">
          <div className="profile-content">
            <div className="messages-form">
              <FormCategory
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={categories}
              />
            </div>
          </div>
          {activeCategory === 5 ? (
            <JobFormCategory
              categories={categories}
              activeCategory={activeCategory}
            />
          ) : 0 <= activeCategory && activeCategory <= 12 ? (
            <GeneralFormCategory
              categories={categories}
              activeCategory={activeCategory}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}



const GeneralFormCategory = ({ categories, activeCategory }) => {
  const [formData, setFormData] = React.useState({});
  const [activeSection, setActiveSection] = React.useState(0);
  const sections = [
    {
      name: "Basic Information",
      icon: "fa-solid fa-user",
    },
    {
      name: "Contact Information",
      icon: "feather-grid",
    },
    {
      name: "Business Information",
      icon: "feather-list",
    },
    {
      name: "Social Media",
      icon: "fa-solid fa-comment-dots",
    },
  ];
  return (
    <>
      <div className="">
        <ul className="dashborad-menus">
          {sections.map((section, index) => (
            <Navigation
              key={index}
              active={activeSection === index}
              icon={section.icon}
              name={section.name}
            />
          ))}
        </ul>
      </div>
      <div className="profile-content">
        <div className="messages-form">
          <Card>
            <Card.Header>For {categories[activeCategory]}</Card.Header>
            <Card.Body>
              {activeSection === 0 ? (
                <>
                  <BasicInformation
                    formData={formData}
                    setFormData={setFormData}
                    next={() => setActiveSection((prev) => prev + 1)}
                  />
                </>
              ) : activeSection === 1 ? (
                <>
                  <ContactInformation
                    formData={formData}
                    setFormData={setFormData}
                    next={() => setActiveSection((prev) => prev + 1)}
                    prev={() => setActiveSection((prev) => prev - 1)}
                  />
                </>
              ) : activeSection === 2 ? (
                <>
                  <BusinessInformation
                    activeCategory={activeCategory}
                    formData={formData}
                    setFormData={setFormData}
                    next={() => setActiveSection((prev) => prev + 1)}
                    prev={() => setActiveSection((prev) => prev - 1)}
                  />
                </>
              ) : activeSection === 3 ? (
                <>
                  <SocialMediaInformation
                    FormData={FormData}
                    setFormData={setFormData}
                    prev={() => setActiveSection((prev) => prev - 1)}
                  />
                </>
              ) : (
                <></>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
const BasicInformation = ({ formData, setFormData, next }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <h5 className="card-title">Basic Information</h5>
        </Card.Header>
        <Card.Body>
          <FormText
            formData={formData}
            setFormData={setFormData}
            ForID="name"
            Label="Name"
            Placeholder="Jhon Doe"
          />
          <FormEmail
            formData={formData}
            setFormData={setFormData}
            ForID="email"
            Label="Email"
            Placeholder="jhondoe@example.com"
          />
          <FormText
            formData={formData}
            setFormData={setFormData}
            ForID="phno"
            Label="Phone No."
            Placeholder="+91 9876543210"
          />
        </Card.Body>
        <Card.Body>
          <button
            type="buttton"
            className="btn btn-primary"
            onClick={() => (
              // saveDetails({
              //   basic_details: basicDetails,
              // }),
              next()
            )}
          >
            <span>Save & Next</span>
          </button>
        </Card.Body>
      </Card>
    </>
  );
};
const ContactInformation = ({ formData, setFormData, next, prev }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <h5 className="card-title">Contact Information</h5>
        </Card.Header>
        <Card.Body>
          <FormText
            formData={formData}
            setFormData={setFormData}
            ForID="phno1"
            Label="Phone No."
            Placeholder="+91 9876543210"
          />
          <FormText
            formData={formData}
            setFormData={setFormData}
            ForID="phno2"
            Label="Alternate Phone No."
            Placeholder="+91 9876543210"
          />
          <FormText
            formData={formData}
            setFormData={setFormData}
            ForID="wphno"
            Label="Whatsapp Phone No."
            Placeholder="+91 9876543210"
          />
          <FormEmail
            formData={formData}
            setFormData={setFormData}
            ForID="email2"
            Label="Email"
            Placeholder="jhondoe@example.com"
          />
          <FormText
            formData={formData}
            setFormData={setFormData}
            ForID="address"
            Label="Address"
            Placeholder="Dehradun Uttrakhand"
          />
          <FormText
            formData={formData}
            setFormData={setFormData}
            ForID="location"
            Label="location"
            Placeholder="Location"
          />
          <FormImageUploadMultiple
            formData={formData}
            setFormData={setFormData}
            ForID="banner"
            Label="Gallery"
          />
        </Card.Body>
        <Card.Body>
          <button
            type="buttton"
            className="btn btn-primary"
            onClick={() => (
              // saveDetails({
              //   business_details: {
              //     ...BusinessDetails,
              //     services,
              //     features,
              //   },
              //   gallery_images: galleryImages,
              // }),
              prev()
            )}
          >
            <span>Previous</span>
          </button>{" "}
          <button
            type="buttton"
            className="btn btn-primary"
            onClick={() => (
              // saveDetails({
              //   business_details: {
              //     ...BusinessDetails,
              //     services,
              //     features,
              //   },
              //   gallery_images: galleryImages,
              // }),
              next()
            )}
          >
            <span>Save & Next</span>
          </button>
        </Card.Body>
      </Card>
    </>
  );
};
const BusinessInformation = ({ activeCategory, formData, setFormData, next, prev }) => {
  const crmType = [
    {
      name: "Automobile", // done index 0
    },
    {
      name: "Building & Construction", // index 1
    },
    {
      name: "Education", // done
    },
    {
      name: "HealthCare & Doctors", // index 3 done
    },
    {
      name: "Home", // done
    },
    {
      name: "Job", // index 5 no api yet
    },
    {
      name: "On Demand Services", // done
    },
    {
      name: "Packer & Movers", // done
    },
    {
      name: "Property", // index 8 done
      role: ["Owner", "Agent", "Builder"],
      property_for: ["Sell", "Rent/Lease", "List As Pg"],
      property_type: [
        // Residential
        "Flat/Apartment",
        "Residential House",
        "Independent House/Villa",
        "Independent/Builder Floor Apartment",
        "Plot/Land",
        "Farm House", // also in Agricultural
        "Penthouse",
        "1RK/Studio Apartment",
        "Service Apartment",
        // Commercial
        "Commercial Office Space",
        "Commercial Shop",
        "Commercial Showroom",
        "Commercial Land",
        "Warehouse/Godown",
        "Industrial Land",
        "Industrial Building",
        "Industrial Shed",
        // Agricultural
        "Agriculture Land",
      ],
      property_for_rent: ["Full House", "On Sharing Basis"],
      furnished: ["Furnished", "Unfurnished", "Semi-Furnished"],
      property_status: ["Ready to Move", "Under Construction", "Ongoing"],
      age_of_construction: ["New construction", "1 year", "2 years"],
      reserved_parking_pg: ["Covered Parking", "Open Parking"],
      available_for_pg: ["Girls", "Boys", "Any"],
    },
    {
      name: "Restaurants", // done
    },
    {
      name: "Sell", // index 10
    },
    {
      name: "Travel & Transport", // done
    },
    {
      name: "Wedding & Events", // book online need to check
    },
  ];
  const [services, setServices] = React.useState([]);
  const [features, setFeatures] = React.useState([]);
  return (
    <>
      <Card>
        {0 <= activeCategory &&
        activeCategory <= 12 &&
        activeCategory != 5 &&
        activeCategory != 8 &&
        activeCategory != 10 ? (
          <>
            <Card.Body>
              <Form.Group>
                <FormText
                  formData={formData}
                  setFormData={setFormData}
                  ForID="title"
                  Label="Title"
                  Placeholder="Title"
                />
                <FormTextArea
                  formData={formData}
                  setFormData={setFormData}
                  ForID="description"
                  Label="Description"
                  Placeholder="Description"
                />
                <br />
                <div className="row">
                  <div className="col-lg-6 col-md-6 featured-img1">
                    <FormImageUpload
                      formData={formData}
                      setFormData={setFormData}
                      ForID="logo"
                      Label="Logo"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 featured-img2">
                    <FormImageUpload
                      formData={formData}
                      setFormData={setFormData}
                      ForID="banner"
                      Label="Banner"
                    />
                  </div>
                </div>
                {activeCategory == 0 ? (
                  <FormImageUploadMultiple
                    formData={formData}
                    setFormData={setFormData}
                    ForID="product_images"
                    Label="Product Images"
                  />
                ) : (
                  <></>
                )}
                <div className="row social-info">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group formlast-input">
                      <label className="col-form-label">Features</label>
                      <div className="pass-group group-img">
                        <span className="lock-icon">
                          <i className="fas fa-star" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          // defaultValue="http://youtube.com"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setServices([...services, e.target.value]);
                              // setFormData({ ...formData, [ForID]: videos });
                              e.target.value = "";
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="gallery-media">
                      <div
                        // className="galleryimg-upload"
                        style={{ paddingLeft: "1rem" }}
                      >
                        {services.map((vid, i) => (
                          <div className="" style={{ padding: "5px" }}>
                            <span key={i}>{vid}</span>{" "}
                            <button
                              // type="button"
                              className="btn bg-danger rounded-circle text-white"
                              onClick={() => {
                                const vid = services.filter(
                                  (_, index) => index !== i
                                );
                                setServices(vid);
                                // setFormData({ ...formData, [ForID]: vid });
                              }}
                            >
                              <i className="feather-trash-2" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="row social-info">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group formlast-input">
                      <label className="col-form-label">Services</label>
                      <div className="pass-group group-img">
                        <span className="lock-icon">
                          <i className="fas fa-star" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          // defaultValue="http://youtube.com"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setFeatures([...features, e.target.value]);
                              // setFormData({ ...formData, [ForID]: videos });
                              e.target.value = "";
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="gallery-media">
                      <div
                        // className="galleryimg-upload"
                        style={{ paddingLeft: "1rem" }}
                      >
                        {features.map((vid, i) => (
                          <div className="" style={{ padding: "5px" }}>
                            <span key={i}>{vid}</span>{" "}
                            <button
                              // type="button"
                              className="btn bg-danger rounded-circle text-white"
                              onClick={() => {
                                const vid = features.filter(
                                  (_, index) => index !== i
                                );
                                setFeatures(vid);
                                // setFormData({ ...formData, [ForID]: vid });
                              }}
                            >
                              <i className="feather-trash-2" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
                {activeCategory == 3 ? (
                  <>
                    <FormText
                      formData={formData}
                      setFormData={setFormData}
                      ForID="education"
                      Label="Education"
                      Placeholder="Enter education"
                    />
                    <FormText
                      formData={formData}
                      setFormData={setFormData}
                      ForID="speciality"
                      Label="Speciality"
                      Placeholder="Enter speciality"
                    />
                    <FormText
                      formData={formData}
                      setFormData={setFormData}
                      ForID="experience"
                      Label="Experience"
                      Placeholder="Enter experience"
                    />
                    <FormText
                      formData={formData}
                      setFormData={setFormData}
                      ForID="consultation_hospitals"
                      Label="Consultation Hospitals"
                      Placeholder="Enter consultation hospitals"
                    />
                    <FormText
                      formData={formData}
                      setFormData={setFormData}
                      ForID="consultation_time"
                      Label="Consultation Time"
                      Placeholder="Enter consultation time"
                    />{" "}
                  </>
                ) : (
                  <></>
                )}
              </Form.Group>
            </Card.Body>
          </>
        ) : activeCategory == 8 ? (
          <>
            <FormSelect
              formData={formData}
              setFormData={setFormData}
              FormID="role"
              Options={crmType[activeCategory].role.map((r, i) => ({
                Label: r,
                Value: i,
              }))}
              Heading="Role"
            />
            <FormRadioBox
              formData={formData}
              setFormData={setFormData}
              FormID="property-for"
              Options={crmType[activeCategory].property_for.map((f, i) => ({
                Label: f,
                Value: i,
              }))}
              Heading="Property For"
            />
            <FormSelect
              formData={formData}
              setFormData={setFormData}
              FormID="property-status"
              Options={crmType[activeCategory].property_type.map((t, i) => ({
                Label: t,
                Value: i,
              }))}
              Heading="Property Status"
            />
            <FormText
              formData={formData}
              setFormData={setFormData}
              ForID="property_name"
              Label="Property Name"
              Placeholder="Enter property name"
            />
            <FormTextArea
              formData={formData}
              setFormData={setFormData}
              ForID="property_description"
              Label="Property Description"
              Placeholder="Enter property description"
            />
            <FormRadioBox
              formData={formData}
              setFormData={setFormData}
              FormID="property_for_rent"
              Options={crmType[activeCategory].property_for_rent.map((fr, i) => ({
                Label: fr,
                Value: i,
              }))}
              Heading="Property For Rent"
            />
            <FormText
              formData={formData}
              setFormData={setFormData}
              ForID="area"
              Label="Area"
              Placeholder="Enter area"
            />
            <FormNumber
              formData={formData}
              setFormData={setFormData}
              ForID="total_no_of_flats"
              Label="Total Number of Flats"
              Placeholder="Enter total number of flats"
            />
            <FormNumber
              formData={formData}
              setFormData={setFormData}
              ForID="bedrooms"
              Label="Bedrooms"
              Placeholder="Enter number of bedrooms"
            />
            <FormNumber
              formData={formData}
              setFormData={setFormData}
              ForID="bathrooms"
              Label="Bathrooms"
              Placeholder="Enter number of bathrooms"
            />
            <FormNumber
              formData={formData}
              setFormData={setFormData}
              ForID="balconies"
              Label="Balconies"
              Placeholder="Enter number of balconies"
            />
            <FormNumber
              formData={formData}
              setFormData={setFormData}
              ForID="floor_no"
              Label="Floor Number"
              Placeholder="Enter floor number"
            />
            <FormNumber
              formData={formData}
              setFormData={setFormData}
              ForID="total_floors"
              Label="Total Floors"
              Placeholder="Enter total number of floors"
            />
            <FormText
              formData={formData}
              setFormData={setFormData}
              ForID="carpetArea"
              Label="Carpet Area"
              Placeholder="Enter carpet area"
            />
            <FormRadioBox
              formData={formData}
              setFormData={setFormData}
              FormID="furnished"
              Options={crmType[activeCategory].furnished.map((f, i) => ({
                Label: f,
                Value: i,
              }))}
              Heading="Furnished"
            />
            <FormRadioBox
              formData={formData}
              setFormData={setFormData}
              FormID="property-status"
              Options={crmType[activeCategory].property_status.map((s, i) => ({
                Label: s,
                Value: i,
              }))}
              Heading="Property Status"
            />
            <FormSelect
              formData={formData}
              setFormData={setFormData}
              FormID="ageOfConstruction"
              Options={crmType[activeCategory].age_of_construction.map((a, i) => ({
                Label: a,
                Value: i,
              }))}
              Heading="Property Status"
            />

            <div className="form-group">
              <label htmlFor="monthly_rent">Monthly Rent</label>
              <input type="number" className="form-control" id="monthly_rent" />
            </div>

            <div className="form-group">
              <label htmlFor="security_deposit">Security Deposit</label>
              <input
                type="number"
                className="form-control"
                id="security_deposit"
              />
            </div>

            <div className="form-group">
              <label htmlFor="rent_negotiable">Rent Negotiable</label>
              <input
                type="checkbox"
                className="form-control"
                id="rent_negotiable"
              />
            </div>

            <div className="form-group">
              <label htmlFor="maintenance_charges">Maintenance Charges</label>
              <input
                type="number"
                className="form-control"
                id="maintenance_charges"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gallery">Gallery</label>
              <input type="text" className="form-control" id="gallery" />
            </div>

            <div className="form-group">
              <label htmlFor="capacity_of_beds_pg">Capacity of Beds PG</label>
              <input
                type="number"
                className="form-control"
                id="capacity_of_beds_pg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="total_no_of_beds_pg">
                Total Number of Beds PG
              </label>
              <input
                type="number"
                className="form-control"
                id="total_no_of_beds_pg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="attached_bathroom_pg">Attached Bathroom PG</label>
              <input
                type="checkbox"
                className="form-control"
                id="attached_bathroom_pg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="attached_balcony_pg">Attached Balcony PG</label>
              <input
                type="checkbox"
                className="form-control"
                id="attached_balcony_pg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="other_rooms_pg">Other Rooms PG</label>
              <input type="text" className="form-control" id="other_rooms_pg" />
            </div>
            <div className="form-group">
              <label htmlFor="reservedParkingPg">
                Reserved Parking Pg <span>*</span>
              </label>
              <select className="form-control" id="reservedParkingPg">
                <option disabled selected value="">
                  select reserved parking pg
                </option>
                {crmType[activeCategory].reserved_parking_pg.map(
                  (reservedParkingPg, index) => (
                    <option key={index} value={reservedParkingPg}>
                      {reservedParkingPg}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="form-group">
              <label> Available For Pg</label>
              {crmType[activeCategory].available_for_pg.map(
                (availableForPg, index) => (
                  <>
                    <span>
                      <input
                        type="radio"
                        id={`availableForPg-${index}`}
                        name="availableForPg"
                        value={availableForPg}
                      />
                      <label htmlFor={`availableForPg-${index}`}>
                        {availableForPg}
                      </label>
                    </span>
                  </>
                )
              )}
            </div>
          </>
        ) : activeCategory == 3 ? (
          <>
            <div> not implemented yet</div>
          </>
        ) : (
          <></>
        )}
      </Card>
      
      <Card.Body>
        <button
          type="buttton"
          className="btn btn-primary"
          onClick={() =>
            // saveDetails({
            //   business_details: {
            //     ...BusinessDetails,
            //     services,
            //     features,
            //   },
            //   gallery_images: galleryImages,
            // }),
            prev()
          }
        >
          <span>Previous</span>
        </button>{" "}
        <button
          type="buttton"
          className="btn btn-primary"
          onClick={() =>
            // saveDetails({
            //   business_details: {
            //     ...BusinessDetails,
            //     services,
            //     features,
            //   },
            //   gallery_images: galleryImages,
            // }),
            next()
          }
        >
          <span>Save & Next</span>
        </button>
      </Card.Body>
    </>
  );
};
const SocialMediaInformation = ({ formData, setFormData, prev }) => {
  const [videos, setVideos] = React.useState([]);
  return (
    <>
      <Card>
        <Card.Header>
          <h5 className="card-title">Social Media Information</h5>
        </Card.Header>
        <Card.Body>
          <div className="row social-info">
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="facebook"
                formData={formData}
                setFormData={setFormData}
                Icon="fab fa-facebook-f"
                Label="Facebook"
                Placeholder="http://facebook.com"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="instagram"
                formData={formData}
                setFormData={setFormData}
                Icon="fab fa-instagram"
                Label="Instagram"
                Placeholder="http://instagram.com"
              />
            </div>
          </div>
          <div className="row social-info">
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="linkedin"
                formData={formData}
                setFormData={setFormData}
                Icon="fab fa-linkedin"
                Label="Linkedin"
                Placeholder="http://linkedin.com"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="youtube"
                formData={formData}
                setFormData={setFormData}
                Icon="fab fa-youtube"
                Label="Youtube"
                Placeholder="http://youtube.com"
              />
            </div>
          </div>
          <div className="row social-info">
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="twitter"
                formData={formData}
                setFormData={setFormData}
                Icon="fab fa-twitter"
                Label="Twitter"
                Placeholder="http://twitter.com"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="pinterest"
                formData={formData}
                setFormData={setFormData}
                Icon="fab fa-pinterest"
                Label="Pinterest"
                Placeholder="http://pinterest.com"
              />
            </div>
          </div>
          <div className="row social-info">
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="google"
                formData={formData}
                setFormData={setFormData}
                Icon="fa-brands fa-google-plus-g"
                Label="Google+"
                Placeholder="http://google.com"
              />
            </div>
          </div>
        </Card.Body>
        <br />
        <Card.Header>
          <h5 className="card-title">Video Gallery</h5>
        </Card.Header>
        <Card.Body>
          <div className="row social-info">
            <div className="col-lg-6 col-md-6">
              <div className="form-group formlast-input">
                <label className="col-form-label">Youtube Videos</label>
                <div className="pass-group group-img">
                  <span className="lock-icon">
                    <i className="fab fa-youtube" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="http://youtube.com"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setVideos([...videos, e.target.value]);
                        // setFormData({ ...formData, [ForID]: videos });
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>
              <div className="gallery-media">
                <div
                  // className="galleryimg-upload"
                  style={{ paddingLeft: "1rem" }}
                >
                  {videos.map((vid, i) => (
                    <div className="" style={{ padding: "5px" }}>
                      <span key={i}>{vid}</span>{" "}
                      <button
                        // type="button"
                        className="btn bg-danger rounded-circle text-white"
                        onClick={() => {
                          const vid = videos.filter((_, index) => index !== i);
                          setVideos(vid);
                          // setFormData({ ...formData, [ForID]: vid });
                        }}
                      >
                        <i className="feather-trash-2" />
                      </button>
                    </div>
                  ))}
                </div>
                <br />
              </div>
            </div>
          </div>
        </Card.Body>
        <Card.Body>
          <button
            type="buttton"
            className="btn btn-primary"
            onClick={() =>
              // saveDetails({
              //   business_details: {
              //     ...BusinessDetails,
              //     services,
              //     features,
              //   },
              //   gallery_images: galleryImages,
              // }),
              prev()
            }
          >
            <span>Previous</span>
          </button>{" "}
        </Card.Body>
      </Card>
    </>
  );
};
const JobFormCategory = ({ categories, activeCategory }) => {
  const [activeJobType, setActiveJobType] = React.useState(-1);
  const [activeSection, setActiveSection] = React.useState(0);
  const [formData, setFormData] = React.useState({});
  const jobTypes = [
    {
      name: "User / Find Work",
      navigation: <UserNavigation activeSection={activeSection} />,
    },
    {
      name: "Vendor / Pick Bulk Requirement",
      navigation: <VendorNavigation activeSection={activeSection} />,
    },
    {
      name: "Business / Post Requirement",
      navigation: <BusinessNavigation activeSection={activeSection} />,
    },
  ];
  const proofOfDocument = [
    "Gst Copy",
    "Incorporation Certificate",
    "PAN Card",
    "Adhaar Card",
    "Driving License",
    "Ration Card", // for user only
  ];
  const bussiness = {
    workMode: ["Work From Home", "Work From Office", "Field Job"],
    typeOfWork: [
      "Pamphlets Distribution",
      "Zomato Walker",
      "Flipkart Auditing",
    ],
    shiftType: ["Day Shift", "Night Shift"],
    paymentType: ["Day", "Weekly", "Monthly"],
    salaryType: ["Day Box", "Weekly Box", "Monthly Salary Box"],
  };

  return (
    <>
      <div className="profile-content">
        <div className="messages-form">
          <Card>
            <Card.Header>Job Type</Card.Header>
            <Card.Body>
              <Form.Group>
                <select
                  className="form-control"
                  onChange={(e) => {
                    const selectedIndex = e.target.options.selectedIndex;
                    setActiveJobType(selectedIndex - 1);
                  }}
                  value={`${activeJobType}`}
                >
                  <option disabled value={-1}>
                    {" "}
                    Select Job Type
                  </option>
                  {jobTypes.map((type, index) => (
                    <option key={index} value={index}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="">
        <ul className="dashborad-menus">
          {jobTypes[activeJobType]?.navigation}
        </ul>
      </div>
      <div className="profile-content">
        <div className="messages-form">
          <Card>
            <Card.Header>For {categories[activeCategory]}</Card.Header>
            <Card.Body>

            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
const Navigation = ({ active, icon, name }) => {
  return (
    <li>
      <Link to="#" className={active ? "bg-danger text-white" : ""}>
        <i className={icon} /> <span>{name}</span>
      </Link>
    </li>
  );
};
const UserNavigation = ({ activeSection }) => {
  const sections = [
    {
      name: "Basic Details",
      icon: "fa-solid fa-user",
    },
    {
      name: "Contact Details",
      icon: "feather-grid",
    },
    {
      name: "Other Details",
      icon: "",
    },
  ];
  return sections.map((section, index) => (
    <Navigation
      key={index}
      active={activeSection === index}
      icon={section.icon}
      name={section.name}
    />
  ));
};
const VendorNavigation = ({ activeSection }) => {
  const sections = [
    {
      name: "Basic Details",
      icon: "fa-solid fa-user",
    },
    {
      name: "Contact Details",
      icon: "feather-grid",
    },
    {
      name: "Company Details",
      icon: "",
    },
  ];

  return sections.map((section, index) => (
    <Navigation
      key={index}
      active={activeSection === index}
      icon={section.icon}
      name={section.name}
    />
  ));
};
const BusinessNavigation = ({ activeSection }) => {
  const sections = [
    {
      name: "Job Details",
      icon: "fas fa-briefcase",
    },
    {
      name: "Candidate Details",
      icon: "fa-solid fa-user",
    },
    {
      name: "Compensation Details",
      icon: "fas fa-money-bill-wave",
    },
    {
      name: "Interview Details",
      icon: "fa-solid fa-comment-dots",
    },
  ];

  return sections.map((section, index) => (
    <Navigation
      key={index}
      active={activeSection === index}
      icon={section.icon}
      name={section.name}
    />
  ));
};
const FormSocial = ({
  formData,
  setFormData,
  ForID,
  Label,
  Placeholder,
  Icon,
}) => {
  return (
    <>
      <Form.Group className="formlast-input">
        <Form.Label className="col-form-label">{Label}</Form.Label>
        <div className="pass-group group-img">
          <span className="lock-icon">
            <i className={Icon} />
          </span>
          <Form.Control type="text" placeholder={Placeholder} />
        </div>
      </Form.Group>
    </>
  );
};
const FormSelect = ({ formData, setFormData, FormID, Options, Heading }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [FormID]: e.target.value });
  };
  return (
    <>
      <Form.Group>
        <Form.Label className="col-form-label">{Heading}</Form.Label>
        <Form.Control as="select" onChange={handleChange}>
          <option value="" disabled selected>
            Select Option
          </option>
          {Options.map((item, index) => (
            <option key={index} value={item.Value}>
              {item.Label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <br />
    </>
  );
};
const LabelHeading = ({ Label }) => (
  <label className="col-form-label label-heading">{Label} </label>
);
const RadioBox = ({ Label, Value, Checked, handleCheck }) => {
  return (
    <li>
      <label>
        <input
          type="radio"
          value={Value}
          checked={Checked === Value}
          onChange={handleCheck}
        />
        <span className="checkmark" /> {Label}
      </label>
    </li>
  );
};
const CheckBox = ({ Label, Value, Checked, handleCheck }) => {
  return (
    <li>
      <label className="custom_check">
        <input
          type="checkbox"
          value={Value}
          checked={Checked.includes(Value)}
          onChange={handleCheck}
        />
        <span className="checkmark" /> {Label}
      </label>
    </li>
  );
};
const FormText = ({ formData, setFormData, ForID, Label, Placeholder }) => {
  return (
    <>
      <Form.Group>
        <Form.Label className="col-form-label">
          {Label} <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          className="input-pass"
          type="text"
          id={ForID}
          name={ForID}
          value={formData[ForID]}
          onChange={(e) =>
            setFormData({ ...formData, [ForID]: e.target.value })
          }
          placeholder={Placeholder}
        />
      </Form.Group>
      <br />
    </>
  );
};
const FormEmail = ({ formData, setFormData, ForID, Label, Placeholder }) => {
  return (
    <>
      <Form.Group>
        <Form.Label className="col-form-label">
          {Label} <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          className="input-pass"
          type="email"
          id={ForID}
          name={ForID}
          value={formData[ForID]}
          onChange={(e) =>
            setFormData({ ...formData, [ForID]: e.target.value })
          }
          placeholder={Placeholder}
        />
      </Form.Group>
      <br />
    </>
  );
};
const FormNumber = ({ formData, setFormData, ForID, Label, Placeholder }) => {
  return (
    <>
      <Form.Group>
        <Form.Label className="col-form-label">
          {Label} <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          className="input-pass"
          type="number"
          id={ForID}
          name={ForID}
          value={formData[ForID]}
          onChange={(e) =>
            setFormData({ ...formData, [ForID]: e.target.value })
          }
          placeholder={Placeholder}
        />
      </Form.Group>
      <br />
    </>
  );
};
const FormRadioBox = ({ formData, setFormData, FormID, Options, Heading }) => {
  // split the options into two columns
  // const half = Math.ceil(Options.length / 2);
  // const leftColumn = Options.slice(0, half);
  // const rightColumn = Options.slice(half, Options.length);
  const [Checked, setChecked] = React.useState("");
  const handleCheck = (e) => {
    setChecked(e.target.value);
    setFormData({ ...formData, [FormID]: e.target.value });
  };
  return (
    <Form.Group>
      <LabelHeading Label={Heading} />
      <Row>
        <div className="col-md-4">
          <ul>
            {Options.map((item, index) => (
              <RadioBox
                key={index}
                Label={item.Label}
                Value={item.Value}
                Checked={Checked}
                handleCheck={handleCheck}
              />
            ))}
          </ul>
        </div>
        {/* <div className="col-md-4">
          <ul>
            {rightColumn.map((item, index) => (
              <RadioBox
                key={index}
                Label={item.Label}
                Value={item.Value}
                Checked={Checked}
                handleCheck={handleCheck}
              />
            ))}
          </ul>
        </div> */}
      </Row>
    </Form.Group>
  );
};
const FormCheckBox = ({ formData, setFormData, FormID, Options, Heading }) => {
  const half = Math.ceil(Options.length / 2);
  const leftColumn = Options.slice(0, half);
  const rightColumn = Options.slice(half, Options.length);
  const [Checked, setChecked] = React.useState([]);
  const handleCheck = (e) => {
    if (e.target.checked) {
      setChecked([...Checked, e.target.value]);
    } else {
      setChecked(Checked.filter((item) => item !== e.target.value));
    }
    setFormData({ ...formData, [FormID]: Checked });
  };
  return (
    <Form.Group>
      <LabelHeading Label={Heading} />
      <Row
      // className="category-listing"
      >
        <div className="col-lg-4">
          <ul>
            {leftColumn.map((item, index) => (
              <CheckBox
                key={index}
                Label={item.Label}
                Value={item.Value}
                Checked={Checked}
                handleCheck={handleCheck}
              />
            ))}
          </ul>
        </div>
        <div className="col-lg-4">
          <ul>
            {rightColumn.map((item, index) => (
              <CheckBox
                key={index}
                Label={item.Label}
                Value={item.Value}
                Checked={Checked}
                handleCheck={handleCheck}
              />
            ))}
          </ul>
        </div>
      </Row>
    </Form.Group>
  );
};
const FormTextArea = ({ formData, setFormData, ForID, Label, Placeholder }) => {
  return (
    <>
      <Form.Group>
        <Form.Label className="col-form-label">
          {Label} <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          id={ForID}
          name={ForID}
          value={formData[ForID]}
          onChange={(e) =>
            setFormData({ ...formData, [ForID]: e.target.value })
          }
          placeholder={Placeholder}
        />
      </Form.Group>
      <br />
    </>
  );
};
const FormImagePreview = ({ image, deleteImage }) => {
  return (
    <div className="gallery-upload">
      <img
        src={image}
        alt=""
        className="img-thumbnail"
        style={{ maxHeight: "8rem" }}
      />
      <Link to="#" className="profile-img-del" onClick={() => deleteImage()}>
        <i className="feather-trash-2" />
      </Link>
    </div>
  );
};
const FormImageUpload = ({ formData, setFormData, ForID, Label }) => {
  const [image, setImage] = React.useState(null);
  return (
    <div className="form-group">
      <h6 className="media-title">{Label}</h6>
      <div className="galleryimg-upload">
        <FormImagePreview
          image={image || "https://via.placeholder.com/150"}
          deleteImage={() => setImage(null)}
        />
      </div>
      <div className="settings-upload-btn">
        <input
          type="file"
          accept="image/*"
          name="image"
          className="hide-input image-upload"
          id={ForID}
          onChange={(e) => {
            console.log("image: ", e.target.files[0]);
            const img = URL.createObjectURL(e.target.files[0]);
            setImage(img);
            setFormData({ ...formData, [ForID]: img });
          }}
        />
        {/* {image && <label htmlFor={ForID} className="file-upload">Change</label>} */}
        <label htmlFor={ForID} className="file-upload">
          {!image ? "Upload" : "Change"}
        </label>
      </div>
    </div>
  );
};
const FormImageUploadMultiple = ({ formData, setFormData, ForID, Label }) => {
  const [images, setImages] = React.useState([]);
  return (
    <div className="form-group">
      <div className="gallery-media">
        <h6 className="media-title">{Label}</h6>
        <div className="galleryimg-upload">
          {images.map((img, i) => (
            <FormImagePreview
              key={i}
              image={img}
              deleteImage={() => {
                const img = images.filter((_, index) => index !== i);
                setImages(img);
                setFormData({ ...formData, [ForID]: img });
              }}
            />
          ))}
        </div>
        <br />
      </div>
      <div className="settings-upload-btn">
        <input
          type="file"
          accept="image/*"
          name="image"
          className="hide-input image-upload"
          id={ForID}
          onChange={(e) => {
            console.log("image: ", e.target.files[0]);
            const img = URL.createObjectURL(e.target.files[0]);
            setImages([...images, img]);
            setFormData({ ...formData, [ForID]: images });
          }}
        />
        <label htmlFor={ForID} className="file-upload">
          {images.length === 0 ? "Upload" : "Add More"}
        </label>
      </div>
    </div>
  );
};
const FormVideoPreview = ({ video, deleteVideo }) => {
  return (
    <div className="gallery-upload">
      {/* <video src={video} controls className="img-thumbnail" /> */}
      <div className="video-preview">
        <span>{video}</span>
      </div>
      <button
        type="button"
        className="profile-img-del"
        onClick={() => deleteVideo()}
      >
        <i className="feather-trash-2" />
      </button>
    </div>
  );
};
const FormVideoUploadUrl = ({ formData, setFormData, ForID, Label }) => {
  const [videos, setVideos] = React.useState([]);
  return (
    <div className="form-group">
      <div className="gallery-media">
        <h6 className="media-title">{Label}</h6>
        <div className="galleryimg-upload">
          {videos.map((vid, i) => (
            <FormVideoPreview
              key={i}
              video={vid}
              deleteVideo={() => {
                const vid = videos.filter((_, index) => index !== i);
                setVideos(vid);
                setFormData({ ...formData, [ForID]: vid });
              }}
            />
          ))}
        </div>
        <br />
      </div>
      <div className="settings-upload-btn">
        <input
          type="url"
          className="form-control"
          id={ForID}
          placeholder="Enter video URL"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setVideos([...videos, e.target.value]);
              setFormData({ ...formData, [ForID]: videos });
              e.target.value = "";
            }
          }}
        />
        <label htmlFor={ForID} className="file-upload">
          {videos.length === 0 ? "Upload" : "Add More"}
        </label>
      </div>
    </div>
  );
};



