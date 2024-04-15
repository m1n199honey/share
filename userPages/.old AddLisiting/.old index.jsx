import React from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../home/footer/Footer";
import UserHeader from "../Userheader";
import { Card, Row, Form } from "react-bootstrap";

// TODO: Select Cateogary Business Information above
// Form Section need to shown bellow
// social media will not be visible for businness
// contact details need to be updated according to bussiness

export default function AddLisiting(){
  const parms = useLocation().pathname;
  const [activeFormSection, setActiveFormSection] = React.useState(2);
  const NextFormSection = () => setActiveFormSection((prev) => prev + 1);
  const PrevFormSection = () => setActiveFormSection((prev) => prev - 1);
  const GotoFormSection = (i) => setActiveFormSection(i);
  const [FormData, setFormData] = React.useState({});
  const FormSections = [
    {
      name: "Basic Information",
      icon: "fa-solid fa-user",
      component: (
        <BasicInformation
          FormData={FormData}
          setFormData={setFormData}
          next={NextFormSection}
        />
      ),
    },
    {
      name: "Contact Information",
      icon: "feather-grid",
      component: (
        <ContactInformation
          FormData={FormData}
          setFormData={setFormData}
          next={NextFormSection}
          prev={PrevFormSection}
        />
      ),
    },
    {
      name: "Business Information",
      icon: "feather-list",
      component: (
        <BusinessInformation
          FormData={FormData}
          setFormData={setFormData}
          next={NextFormSection}
          prev={PrevFormSection}
        />
      ),
    },
    {
      name: "Social Media",
      icon: "fa-solid fa-comment-dots",
      component: (
        <SocialMediaInformation
          FormData={FormData}
          setFormData={setFormData}
          prev={PrevFormSection}
        />
      ),
    },
  ];
  return (
    <>
      <UserHeader parms={parms} />
      <Breadscrumb />
      <FormNavigation
        GotoFormSection={GotoFormSection}
        FormSections={FormSections}
        activeFormSection={activeFormSection}
      />
      <Footer />
    </>
  );
};
const Breadscrumb = () => {
  return (
    <div className="breadcrumb-bar">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title">Add Listing</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
const FormNavigation = ({
  GotoFormSection,
  FormSections,
  FormData,
  setFormData,
  activeFormSection,
}) => {
  return (
    <div className="dashboard-content">
      <div className="container">
        <div className="">
          <ul className="dashborad-menus">
            {FormSections.map((section, i) => {
              const { name, icon } = section;
              return (
                <li key={i}>
                  <Link to="#" onClick={() => GotoFormSection(i)}>
                    <i className={icon} /> <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="profile-content">
          <div className="messages-form">
            {FormSections[activeFormSection].component}
          </div>
        </div>
      </div>
    </div>
  );
};
const BasicInformation = ({FormData, setFormData, next }) => {
  return (
    <>
      <Card>
        <Card.Header>
          <h5 className="card-title">Basic Information</h5>
        </Card.Header>
        <Card.Body>
          <FormText
            FormData={FormData}
            setFormData={setFormData}
            ForID="name"
            Label="Name"
            Placeholder="Jhon Doe"
          />
          <FormEmail
            FormData={FormData}
            setFormData={setFormData}
            ForID="email"
            Label="Email"
            Placeholder="jhondoe@example.com"
          />
          <FormText
            FormData={FormData}
            setFormData={setFormData}
            ForID="phno"
            Label="Phone No."
            Placeholder="+91 9876543210"
          />
        </Card.Body>
      </Card>
    </>
  );
};
const ContactInformation = ({ FormData, setFormData, next, prev}) => {
  return (
    <>
      <Card>
        <Card.Header>
          <h5 className="card-title">Contact Information</h5>
        </Card.Header>
        <Card.Body>
          <FormText
            FormData={FormData}
            setFormData={setFormData}
            ForID="phno1"
            Label="Phone No."
            Placeholder="+91 9876543210"
          />
          <FormText
            FormData={FormData}
            setFormData={setFormData}
            ForID="phno2"
            Label="Alternate Phone No."
            Placeholder="+91 9876543210"
          />
          <FormText
            FormData={FormData}
            setFormData={setFormData}
            ForID="wphno"
            Label="Whatsapp Phone No."
            Placeholder="+91 9876543210"
          />
          <FormEmail
            FormData={FormData}
            setFormData={setFormData}
            ForID="email2"
            Label="Email"
            Placeholder="jhondoe@example.com"
          />
          <FormText
            FormData={FormData}
            setFormData={setFormData}
            ForID="address"
            Label="Address"
            Placeholder="Dehradun Uttrakhand"
          />
          <FormText
            FormData={FormData}
            setFormData={setFormData}
            ForID="location"
            Label="location"
            Placeholder="Location"
          />
          <FormImageUploadMultiple
            FormData={FormData}
            setFormData={setFormData}
            ForID="banner"
            Label="Gallery"
          />
        </Card.Body>
      </Card>
    </>
  );
};
const BusinessInformation = ({ FormData, setFormData, next, prev}) => {
    const [CRMType, setCRMType] = React.useState(5);
    const [jobTypeSelect, setJobTypeSelect] = React.useState(-1);
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
        jobType: [
          "User / Find Work ",
          "Vendor / Pick Bulk Requirement",
          "Business / Post Requirement",
        ],
        drivingLicense: ["Yes", "No"],
        bike: ["Yes", "No"],
        proofOfDocument: [
          "Gst Copy",
          "Incorporation Certificate",
          "PAN Card",
          "Adhaar Card",
          "Driving License",
          "Ration Card",
        ],
        bussiness: {
          workMode: ["Work From Home", "Work From Office", "Field Job"],
          typeOfWork: [
            "Pamphlets Distribution",
            "Zomato Walker",
            "Flipkart Auditing",
          ],
          shiftType: ["Day Shift", "Night Shift"],
          paymentType: ["Day", "Weekly", "Monthly"],
          salaryType: ["Day Box", "Weekly Box", "Monthly Salary Box"],
        },
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
        <Card.Header>
          <h5 className="card-title">Business Information</h5>
        </Card.Header>
        <Card.Body>
          <Form.Group>
            <select
              className="form-control"
              onChange={(e) => {
                const selectedIndex = e.target.options.selectedIndex;
                setCRMType(selectedIndex - 1);
              }}
              defaultValue=""
            >
              <option disabled selected value="">
                {" "}
                Select Arm Type
              </option>
              {crmType.map((type, index) => (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </Form.Group>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <h5 className="card-title">
            {0 <= CRMType && CRMType <= 12 ? crmType[CRMType].name : ""}
          </h5>
        </Card.Header>
        {0 <= CRMType &&
        CRMType <= 12 &&
        CRMType != 5 &&
        CRMType != 8 &&
        CRMType != 10 ? (
          <>
            <Card.Body>
              <Form.Group>
                <FormText
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="title"
                  Label="Title"
                  Placeholder="Title"
                />
                <FormTextArea
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="description"
                  Label="Description"
                  Placeholder="Description"
                />
                <br />
                <div className="row">
                  <div className="col-lg-6 col-md-6 featured-img1">
                    <FormImageUpload
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="logo"
                      Label="Logo"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 featured-img2">
                    <FormImageUpload
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="banner"
                      Label="Banner"
                    />
                  </div>
                </div>
                {CRMType == 0 ? (
                  <FormImageUploadMultiple
                    FormData={FormData}
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
                              // setFormData({ ...FormData, [ForID]: videos });
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
                                // setFormData({ ...FormData, [ForID]: vid });
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
                              // setFormData({ ...FormData, [ForID]: videos });
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
                                // setFormData({ ...FormData, [ForID]: vid });
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
                {CRMType == 3 ? (
                  <>
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="education"
                      Label="Education"
                      Placeholder="Enter education"
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="speciality"
                      Label="Speciality"
                      Placeholder="Enter speciality"
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="experience"
                      Label="Experience"
                      Placeholder="Enter experience"
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="consultation_hospitals"
                      Label="Consultation Hospitals"
                      Placeholder="Enter consultation hospitals"
                    />
                    <FormText
                      FormData={FormData}
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
        ) : CRMType == 8 ? (
          <>
            <FormSelect
              FormData={FormData}
              setFormData={setFormData}
              FormID="role"
              Options={crmType[CRMType].role.map((r, i) => ({
                Label: r,
                Value: i,
              }))}
              Heading="Role"
            />
            <FormRadioBox
              FormData={FormData}
              setFormData={setFormData}
              FormID="property-for"
              Options={crmType[CRMType].property_for.map((f, i) => ({
                Label: f,
                Value: i,
              }))}
              Heading="Property For"
            />
            <FormSelect
              FormData={FormData}
              setFormData={setFormData}
              FormID="property-status"
              Options={crmType[CRMType].property_type.map((t, i) => ({
                Label: t,
                Value: i,
              }))}
              Heading="Property Status"
            />
            <FormText
              FormData={FormData}
              setFormData={setFormData}
              ForID="property_name"
              Label="Property Name"
              Placeholder="Enter property name"
            />
            <FormTextArea
              FormData={FormData}
              setFormData={setFormData}
              ForID="property_description"
              Label="Property Description"
              Placeholder="Enter property description"
            />
            <FormRadioBox
              FormData={FormData}
              setFormData={setFormData}
              FormID="property_for_rent"
              Options={crmType[CRMType].property_for_rent.map((fr, i) => ({
                Label: fr,
                Value: i,
              }))}
              Heading="Property For Rent"
            />
            <FormText
              FormData={FormData}
              setFormData={setFormData}
              ForID="area"
              Label="Area"
              Placeholder="Enter area"
            />
            <FormNumber
              FormData={FormData}
              setFormData={setFormData}
              ForID="total_no_of_flats"
              Label="Total Number of Flats"
              Placeholder="Enter total number of flats"
            />
            <FormNumber
              FormData={FormData}
              setFormData={setFormData}
              ForID="bedrooms"
              Label="Bedrooms"
              Placeholder="Enter number of bedrooms"
            />
            <FormNumber
              FormData={FormData}
              setFormData={setFormData}
              ForID="bathrooms"
              Label="Bathrooms"
              Placeholder="Enter number of bathrooms"
            />
            <FormNumber
              FormData={FormData}
              setFormData={setFormData}
              ForID="balconies"
              Label="Balconies"
              Placeholder="Enter number of balconies"
            />
            <FormNumber
              FormData={FormData}
              setFormData={setFormData}
              ForID="floor_no"
              Label="Floor Number"
              Placeholder="Enter floor number"
            />
            <FormNumber
              FormData={FormData}
              setFormData={setFormData}
              ForID="total_floors"
              Label="Total Floors"
              Placeholder="Enter total number of floors"
            />
            <FormText
              FormData={FormData}
              setFormData={setFormData}
              ForID="carpetArea"
              Label="Carpet Area"
              Placeholder="Enter carpet area"
            />
            <FormRadioBox
              FormData={FormData}
              setFormData={setFormData}
              FormID="furnished"
              Options={crmType[CRMType].furnished.map((f, i) => ({
                Label: f,
                Value: i,
              }))}
              Heading="Furnished"
            />
            <FormRadioBox
              FormData={FormData}
              setFormData={setFormData}
              FormID="property-status"
              Options={crmType[CRMType].property_status.map((s, i) => ({
                Label: s,
                Value: i,
              }))}
              Heading="Property Status"
            />
            <FormSelect
              FormData={FormData}
              setFormData={setFormData}
              FormID="ageOfConstruction"
              Options={crmType[CRMType].age_of_construction.map((a, i) => ({
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
                {crmType[CRMType].reserved_parking_pg.map(
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
              {crmType[CRMType].available_for_pg.map(
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
        ) : CRMType == 3 ? (
          <>
            <div> not implemented yet</div>
          </>
        ) : CRMType == 5 ? (
          <>
            <Card.Body>
              <Form.Group>
                <Form.Label className="col-form-label">Job Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => {
                    const selectedIndex = e.target.options.selectedIndex;
                    setJobTypeSelect(selectedIndex - 1);
                  }}
                >
                  <option value="" disabled selected>
                    Select Option
                  </option>
                  {crmType[CRMType].jobType?.map((c, i) => (
                    <option key={i} value={i}>
                      {c}
                    </option>
                  ))}
                </Form.Control>
                <br />
                <FormTextArea
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="jobDetails"
                  Label="Job Details"
                  Placeholder="Enter job details"
                />
                {/* <FormSelect
                  FormData={FormData}
                  setFormData={setFormData}
                  FormID="category"
                  Options={crmType[CRMType].category?.map((c, i) => ({
                    Label: c,
                    Value: i,
                  }))}
                  Heading="Category"
                /> */}
              </Form.Group>
              <br />
            </Card.Body>
          </>
        ) : (
          <></>
        )}
      </Card>
      {CRMType == 5 ? (
        <Card>
          {0 <= jobTypeSelect && jobTypeSelect <= 2 ? (
            <>
              <Card.Header>
                {crmType[CRMType]["jobType"][jobTypeSelect]}
              </Card.Header>
              <Card.Body>
                <FormText
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="name"
                  Label="Name"
                  Placeholder="Enter name"
                />
                <FormText
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="phno"
                  Label="Phone No."
                  Placeholder="+91 9876543210"
                />
                <FormEmail
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="email"
                  Label="Email"
                  Placeholder="example@xyz.com"
                />

                <FormText
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="city"
                  Label="City"
                  Placeholder="Enter city"
                />
                <FormText
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="location"
                  Label="Location"
                  Placeholder="Enter location"
                />
                <FormText
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="pincode"
                  Label="Pincode"
                  Placeholder="Enter pincode"
                />
                <FormText
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="education"
                  Label="Education"
                  Placeholder="Enter education"
                />
                <FormRadioBox
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="gender"
                  Heading="Gender"
                  Options={[
                    { Label: "Male", Value: 0 },
                    { Label: "Female", Value: 1 },
                    { Label: "Other", Value: 2 },
                    { Label: "Not Want To Mention", Value: 3 },
                  ]}
                />
                <FormText
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="technicalSkills"
                  Label="Technical Skills"
                  Placeholder="Enter technical skills"
                />
                <FormTextArea
                  FormData={FormData}
                  setFormData={setFormData}
                  ForID="experience"
                  Label="Experience"
                  Placeholder="Enter experience"
                />
                {/* Add other form fields similarly */}
                <FormRadioBox
                  FormData={FormData}
                  setFormData={setFormData}
                  FormID="proofOfDocument"
                  Options={crmType[CRMType]["proofOfDocument"].map((p, i) => ({
                    Label: p,
                    Value: i,
                  }))}
                  Heading="Proof of Document"
                />
                <div className="row">
                  <div className="col-lg-6 col-md-6 featured-img1">
                    <FormImageUpload
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="front"
                      Label="Front Image"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 featured-img2">
                    <FormImageUpload
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="back"
                      Label="Back Image"
                    />
                  </div>
                </div>
                {jobTypeSelect == 0 ? (
                  <>
                    <FormRadioBox
                      FormData={FormData}
                      setFormData={setFormData}
                      FormID="drivingLicense"
                      Options={[
                        { Label: "Yes", Value: "Yes" },
                        { Label: "No", Value: "No" },
                      ]}
                      Heading="Driving License"
                    />
                    <FormRadioBox
                      FormData={FormData}
                      setFormData={setFormData}
                      FormID="bike"
                      Options={[
                        { Label: "Yes", Value: "Yes" },
                        { Label: "No", Value: "No" },
                      ]}
                      Heading="Bike"
                    />
                  </>
                ) : jobTypeSelect == 1 ? (
                  <>
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="organisationName"
                      Label="Organisation Name"
                      Placeholder="Organisation Name"
                    />
                    <FormNumber
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="noOfEmployees"
                      Label="No Of Employees"
                      Placeholder="1-40"
                    />
                    <Card.Header>Bank Account</Card.Header>
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="accountNumber"
                      Label="Account Number"
                      Placeholder="Account Number"
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="ifscCode"
                      Label="IFSC Code"
                      Placeholder="IFSC Code"
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="branchName"
                      Label="Branch Name"
                      Placeholder="Branch Name"
                    />
                  </>
                ) : jobTypeSelect == 2 ? (
                  <>
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="jobTitle"
                      Label="Job Title"
                      Placeholder="Enter job title"
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="subCat"
                      Label="Sub Category"
                      Placeholder="Enter sub category"
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="childCat"
                      Label="Child Category"
                      Placeholder="Enter child category"
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="organisationName"
                      Label="Organisation Name"
                      Placeholder="Enter organisation name"
                    />
                    <FormRadioBox
                      FormData={FormData}
                      setFormData={setFormData}
                      FormID="workMode"
                      Options={[
                        { Label: "Work From Home", Value: "Work From Home" },
                        {
                          Label: "Work From Office",
                          Value: "Work From Office",
                        },
                        { Label: "Field Job", Value: "Field Job" },
                      ]}
                      Heading="Work Mode"
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="typeOfWork"
                      Label="Type Of Work"
                      Placeholder="Pamphlets Distribution or Flipkart Auditing or .."
                    />
                    <FormText
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="description"
                      Label="Description"
                      Placeholder="Enter description"
                    />
                    <FormRadioBox
                      FormData={FormData}
                      setFormData={setFormData}
                      FormID="shiftType"
                      Options={[
                        { Label: "Day Shift", Value: "Day Shift" },
                        { Label: "Night Shift", Value: "Night Shift" },
                      ]}
                      Heading="Shift Type"
                    />
                    <FormNumber
                      FormData={FormData}
                      setFormData={setFormData}
                      ForID="noOfEmployees"
                      Label="Number of Employees"
                      Placeholder="Enter number of employees"
                    />
                  </>
                ) : (
                  <></>
                )}
              </Card.Body>
            </>
          ) : (
            <></>
          )}
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};
const SocialMediaInformation = ({ FormData, setFormData, prev }) => {
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
                FormData={FormData}
                setFormData={setFormData}
                Icon="fab fa-facebook-f"
                Label="Facebook"
                Placeholder="http://facebook.com"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="instagram"
                FormData={FormData}
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
                FormData={FormData}
                setFormData={setFormData}
                Icon="fab fa-linkedin"
                Label="Linkedin"
                Placeholder="http://linkedin.com"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="youtube"
                FormData={FormData}
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
                FormData={FormData}
                setFormData={setFormData}
                Icon="fab fa-twitter"
                Label="Twitter"
                Placeholder="http://twitter.com"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <FormSocial
                ForID="pinterest"
                FormData={FormData}
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
                FormData={FormData}
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
                        // setFormData({ ...FormData, [ForID]: videos });
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
                          // setFormData({ ...FormData, [ForID]: vid });
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
      </Card>
    </>
  );
};
const FormSocial = ({ FormData, setFormData, ForID, Label, Placeholder, Icon }) => {
  return (
    <>
      <Form.Group className="formlast-input">
        <Form.Label className="col-form-label">{Label}</Form.Label>
        <div className="pass-group group-img">
          <span className="lock-icon">
            <i className={Icon} />
          </span>
          <Form.Control
            type="text"
            placeholder={Placeholder}
          />
        </div>
      </Form.Group>
    </>
  );
};
const FormSelect = ({ FormData, setFormData, FormID, Options, Heading }) => {
  const handleChange = (e) => {
    setFormData({ ...FormData, [FormID]: e.target.value });
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
const FormText = ({ FormData, setFormData, ForID, Label, Placeholder }) => {
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
          value={FormData[ForID]}
          onChange={(e) =>
            setFormData({ ...FormData, [ForID]: e.target.value })
          }
          placeholder={Placeholder}
        />
      </Form.Group>
      <br />
    </>
  );
};
const FormEmail = ({ FormData, setFormData, ForID, Label, Placeholder }) => {
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
          value={FormData[ForID]}
          onChange={(e) =>
            setFormData({ ...FormData, [ForID]: e.target.value })
          }
          placeholder={Placeholder}
        />
      </Form.Group>
      <br />
    </>
  );
};
const FormNumber = ({ FormData, setFormData, ForID, Label, Placeholder }) => {
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
          value={FormData[ForID]}
          onChange={(e) =>
            setFormData({ ...FormData, [ForID]: e.target.value })
          }
          placeholder={Placeholder}
        />
      </Form.Group>
      <br />
    </>
  );
};
const FormRadioBox = ({ FormData, setFormData, FormID, Options, Heading }) => {
  // split the options into two columns
  // const half = Math.ceil(Options.length / 2);
  // const leftColumn = Options.slice(0, half);
  // const rightColumn = Options.slice(half, Options.length);
  const [Checked, setChecked] = React.useState("");
  const handleCheck = (e) => {
    setChecked(e.target.value);
    setFormData({ ...FormData, [FormID]: e.target.value });
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
const FormCheckBox = ({ FormData, setFormData, FormID, Options, Heading }) => {
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
    setFormData({ ...FormData, [FormID]: Checked });
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
const FormTextArea = ({ FormData, setFormData, ForID, Label, Placeholder }) => {
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
          value={FormData[ForID]}
          onChange={(e) =>
            setFormData({ ...FormData, [ForID]: e.target.value })
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
      <img src={image} alt="" className="img-thumbnail" style={{maxHeight: "8rem"}} />
      <Link to="#"
        className="profile-img-del"
        onClick={() => deleteImage()}
      >
        <i className="feather-trash-2" />
      </Link>
    </div>
  );
};
const FormImageUpload = ({ FormData, setFormData, ForID, Label }) => {
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
            setFormData({ ...FormData, [ForID]: img });
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
const FormImageUploadMultiple = ({ FormData, setFormData, ForID, Label }) => {
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
                setFormData({ ...FormData, [ForID]: img });
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
            setFormData({ ...FormData, [ForID]: images });
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
const FormVideoUploadUrl = ({ FormData, setFormData, ForID, Label }) => {
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
                setFormData({ ...FormData, [ForID]: vid });
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
              setFormData({ ...FormData, [ForID]: videos });
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