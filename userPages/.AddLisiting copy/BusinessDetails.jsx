import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BusinessDetails = ({ CRMType, setCRMType, prevSavedDetails, saveDetails, prev, next }) => {
  const [BusinessDetails, setBusinessDetails] = useState({
    title: prevSavedDetails.title || "",
    description: prevSavedDetails.description || "",
    banner_image: prevSavedDetails.banner_image || "",
    brand_logo: prevSavedDetails.brand_logo || "",
  });
  const crmType = [
    {
      name: "Automobile", // done
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

  const [services, setServices] = useState(prevSavedDetails.services || []);
  const [features, setFeatures] = useState(prevSavedDetails.features || []);
  const [galleryImages, setGalleryImages] = useState(prevSavedDetails.gallery_images || []);
  const [galleryImage, setGalleryImage] = useState("");
  return (
    <div className="card">
      <div className="form-group">
        <select
          className="form-control"
          onChange={(e) => {
            const selectedIndex = e.target.options.selectedIndex;
            setCRMType(selectedIndex - 1);
          }}
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
      </div>
      <div className="card-header">
        <h4>
          {0 <= CRMType && CRMType <= 12 ? (
            <span>{crmType[CRMType].name}</span>
          ) : (
            ""
          )}
        </h4>
      </div>
      {0 <= CRMType &&
      CRMType <= 12 &&
      CRMType != 1 &&
      CRMType != 5 &&
      CRMType != 8 &&
      CRMType != 10 ? (
        <>
          <div className="form-group">
            <label htmlFor="title">
              Title <span>*</span>
            </label>
            <input
              type="text"
              id="title"
              className="form-control pass-input"
              value={BusinessDetails.title}
              onChange={(e) =>
                setBusinessDetails({
                  ...BusinessDetails,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">
              Description <span>*</span>
            </label>
            <textarea
              id="description"
              className="form-control pass-input"
              value={BusinessDetails.description}
              onChange={(e) =>
                setBusinessDetails({
                  ...BusinessDetails,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="form-group">
            <div className="settings-upload-img">
              {!BusinessDetails.banner_image.length ? (
                <p>No banner !</p>
              ) : (
                <img src={BusinessDetails.banner_image} alt="" />
              )}
            </div>
            <input
              type="file"
              id="bannerImage"
              className="form-control pass-input"
              onChange={(e) =>
                setBusinessDetails({
                  ...BusinessDetails,
                  banner_image: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
            <div className="">
              {BusinessDetails.banner_image.length ? (
                <Link
                  to="#"
                  className="hide-input image-upload"
                  onClick={() => {
                    setBusinessDetails({
                      ...BusinessDetails,
                      banner_image: "",
                    });
                  }}
                >
                  <i className="feather-trash-2" />
                </Link>
              ) : (
                <button type="button">
                  <label htmlFor="bannerImage">Upload Banner</label>
                </button>
              )}
            </div>
          </div>

          {/* <div className="profile-photo">
        <div className="profile-img">
          <div className="settings-upload-img">
            {BusinessDetails.banner_image.length ? (
              <div>
                <img src={BusinessDetails.banner_image} alt="profile" />
                <span>
                  <Link to="#" className="profile-img-del">
                    <i className="feather-trash-2" />
                  </Link>
                </span>
              </div>
            ) : (
              <p className="">no banner image seleted !</p>
            )}
          </div>
          <div className="settings-upload-btn">
            <input
              type="file"
              accept="image/*"
              name="image"
              className="hide-input image-upload"
              onChange={(e) =>
                setBusinessDetails({
                  ...BusinessDetails,
                  banner_image: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
            <label htmlFor="file" className="file-upload">
              Upload New photo
            </label>
          </div>
          <span>Max file size: 10 MB</span>
          <Link to="#" className="profile-img-del">
            <i className="feather-trash-2" />
          </Link>
          </div>
          </div> */}
          {/* baner image with feather del button*/}
          <div className="form-group">
            <label htmlFor="brandLogo">
              Brand Logo <span>*</span>
            </label>
            <input
              type="file"
              id="brandLogo"
              className="form-control pass-input"
              // value={BusinessDetails.brand_logo}
              onChange={(e) =>
                setBusinessDetails({
                  ...BusinessDetails,
                  brand_logo: URL.createObjectURL(e.target.files[0]),
                })
              }
            />
            <div className="">
              {!BusinessDetails.brand_logo.length ? (
                <></>
              ) : (
                <img src={BusinessDetails.brand_logo} alt="" />
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="services">
              Services <span>*</span>
            </label>
            <input
              type="text"
              id="services"
              className="form-control pass-input"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setServices([...services, e.target.value]);
                  e.target.value = "";
                }
              }}
            />
            <ul className="services-data">
              {services.map((service, index) => (
                <li key={index}>
                  <span>{service}</span>
                  <button
                    onClick={() => {
                      const updatedServices = [...services]; // Create a copy of the original array
                      updatedServices.splice(index, 1); // Remove the item at the specified index
                      setServices(updatedServices); // Update the state with the modified array
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="features">
              Features <span>*</span>
            </label>
            <input
              type="text"
              id="features"
              className="form-control pass-input"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setFeatures([...features, e.target.value]);
                  e.target.value = "";
                }
              }}
            />
            <ul className="features-data">
              {features.map((feature, index) => (
                <li key={index}>
                  <span>{feature}</span>
                  <button
                    onClick={() => {
                      const updatedFeatures = [...features]; // Create a copy of the original array
                      updatedFeatures.splice(index, 1); // Remove the item at the specified index
                      setFeatures(updatedFeatures); // Update the state with the modified array
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {CRMType != 3 ? (
            <> </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="education">Education</label>
                <input type="text" className="form-control" id="education" />
              </div>

              <div className="form-group">
                <label htmlFor="speciality">Speciality</label>
                <input type="text" className="form-control" id="speciality" />
              </div>

              <div className="form-group">
                <label htmlFor="experience">Experience</label>
                <input type="text" className="form-control" id="experience" />
              </div>

              <div className="form-group">
                <label htmlFor="consultation_hospitals">
                  Consultation Hospitals
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="consultation_hospitals"
                />
              </div>

              <div className="form-group">
                <label htmlFor="consultation_time">Consultation Time</label>
                <input
                  type="text"
                  className="form-control"
                  id="consultation_time"
                />
              </div>

              <div className="form-group">
                <label htmlFor="consultation_days">Consultation Days</label>
                <input
                  type="text"
                  className="form-control"
                  id="consultation_days"
                />
              </div>

              <div className="form-group">
                <label htmlFor="facilities">Facilities</label>
                <input type="text" className="form-control" id="facilities" />
              </div>

              <div className="form-group">
                <label htmlFor="consultation_fees">Consultation Fees</label>
                <input
                  type="text"
                  className="form-control"
                  id="consultation_fees"
                />
              </div>

              <div className="form-group">
                <label htmlFor="book_appointment">Book Appointment</label>
                <input
                  type="text"
                  className="form-control"
                  id="book_appointment"
                />
              </div>
            </>
          )}
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="galleryImage">
                Gallery Image <span>*</span>
              </label>
              <input
                type="file"
                id="galleryImage"
                className="form-control pass-input"
                onChange={(e) => setGalleryImage(e.target.files[0])}
              />
              <button
                // disabled
                onClick={() => {
                  if (galleryImage) {
                    const newImage = {
                      image: URL.createObjectURL(galleryImage),
                    };
                    setGalleryImages([...galleryImages, newImage]);
                    setGalleryImage("");
                  }
                }}
              >
                Add
              </button>
              <ul className="gallery-images-data">
                {galleryImages.map((image, index) => (
                  <li key={index}>
                    <img src={image.image} alt={`Gallery Image ${index + 1}`} />
                    <button
                      onClick={() => {
                        const updatedImages = [...galleryImages];
                        updatedImages.splice(index, 1);
                        setGalleryImages(updatedImages);
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : // For Building & Construction
      CRMType == 8 ? (
        <>
          <div className="form-group">
            <label htmlFor="role">
              Role <span>*</span>
            </label>
            <select className="form-control" id="role">
              <option disabled selected value="">
                select role
              </option>
              {crmType[CRMType].role.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="propertyFor">
              Property For <span>*</span>
            </label>
            <select className="form-control" id="propertyFor">
              <option disabled selected value="">
                select property for
              </option>
              {crmType[CRMType].property_for.map((propertyFor, index) => (
                <option key={index} value={propertyFor}>
                  {propertyFor}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="propertyType">
              Property Type <span>*</span>
            </label>
            <select className="form-control" id="propertyType">
              <option disabled selected value="">
                select property type
              </option>
              {crmType[CRMType].property_type.map((propertyType, index) => (
                <option key={index} value={propertyType}>
                  {propertyType}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="propertyName">
              Property Name <span>*</span>
            </label>
            <input
              type="text"
              id="propertyName"
              className="form-control pass-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="propertyDiscription">
              Property Discription <span>*</span>
            </label>
            <textarea
              id="propertyDiscription"
              className="form-control pass-input"
            />
          </div>
          <div className="form-group">
            <label>
              Property For Rent <span>*</span>
            </label>
            {crmType[CRMType].property_for_rent.map((propertyForRent, index) => (
              <>
                <span>
                  <input
                    type="radio"
                    id={`propertyForRent-${index}`}
                    name="propertyForRent"
                    value={propertyForRent}
                  />
                  <label htmlFor={`propertyForRent-${index}`}>
                    {propertyForRent}
                  </label>
                </span>
              </>
            ))}
          </div>
          {/* no of flat */}
          <div className="form-group">
            <label htmlFor="noOfFlat">
              No Of Flat <span>*</span>
            </label>
            <input
              type="number"
              id="noOfFlat"
              className="form-control pass-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bedrooms">
              Bedrooms <span>*</span>
            </label>
            <input
              type="number"
              id="bedrooms"
              className="form-control pass-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bathrooms">
              Bathrooms <span>*</span>
            </label>
            <input
              type="number"
              id="bathrooms"
              className="form-control pass-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="balconies">
              Balconies <span>*</span>
            </label>
            <input
              type="number"
              id="balconies"
              className="form-control pass-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="floor_no">
              Floor No <span>*</span>
            </label>
            <input
              type="number"
              id="floor_no"
              className="form-control pass-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="total_floors">
              Total Floors <span>*</span>
            </label>
            <input
              type="number"
              id="total_floors"
              className="form-control pass-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="furnished">
              Furnished <span>*</span>
            </label>
            <select className="form-control" id="furnished">
              <option disabled selected value="">
                select furnished
              </option>
              {crmType[CRMType].furnished.map((furnished, index) => (
                <option key={index} value={furnished}>
                  {furnished}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>
              Property Status <span>*</span>
            </label>
            {crmType[CRMType].property_status.map((propertyStatus, index) => (
              
              <div>
                  <input
                    type="radio"
                    id={`propertyStatus-${index}`}
                    name="propertyStatus"
                    value={propertyStatus}
                    className="form-check-input"
                    />
                  <label htmlFor={`propertyStatus-${index}`}>
                    {propertyStatus}
                  </label>
              </div>
              
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="ageOfConstruction">
              Age Of Construction <span>*</span>
            </label>
            <select className="form-control" id="ageOfConstruction">
              <option disabled selected value="">
                select age of construction
              </option>
              {crmType[CRMType].age_of_construction.map(
                (ageOfConstruction, index) => (
                  <option key={index} value={ageOfConstruction}>
                    {ageOfConstruction}
                  </option>
                )
              )}
            </select>
          </div>
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
            <label htmlFor="total_no_of_beds_pg">Total Number of Beds PG</label>
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
            {crmType[CRMType].available_for_pg.map((availableForPg, index) => (
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
            ))}
          </div>
        </>
      ) : CRMType == 1 ? (
        <>
          <div> not implemented yet</div>
        </>
      ) : CRMType == 3 ? (
        <>
          <div> not implemented yet</div>
        </>
      ) : CRMType == 5 ? (
        <>
        <div> not implemented yet need Schema for Job</div>
        </>
      ) : (
        <></>
      )}
      <div className="form-group">
        <button
          type="buttton"
          className="btn btn-primary"
          onClick={() => (
            saveDetails({
              business_details: {
                ...BusinessDetails,
                services,
                features,
              },
              gallery_images: galleryImages,
            }),
            prev()
          )}
        >
          <span>Previous</span>
        </button>{" "}
        <button
          type="buttton"
          className="btn btn-primary"
          onClick={() => (
            saveDetails({
              business_details: {
                ...BusinessDetails,
                services,
                features,
              },
              gallery_images: galleryImages,
            }),
            next()
          )}
        >
          <span>Save & Next</span>
        </button>
      </div>
    </div>
  );
};

export default BusinessDetails;
