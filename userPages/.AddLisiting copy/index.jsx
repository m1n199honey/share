import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gallerymedia_1, gallerymedia_2, gallerymedia_3, gallerymedia_4, gallerymedia_5, mediaimg_1, mediaimg_2 } from "../../imagepath";
import Footer from "../../home/footer/Footer";
import UserHeader from "../Userheader";
import BasicDetails from "./BasicDetails";
import BusinessDetails from "./BusinessDetails";
import ContactDetails from "./ContactDetails";
import SocialLinks from "./SocialLinks";

const AddLisiting = () => {
  const [FormSectionIndex, setFormSectionIndex] = useState(0);
  const [FormData, setFormData] = useState({});
  const [CRMType, setCRMType] = useState(-1);
  const FormSections = [
    {
      name: "Basic Details",
      component: (
        <BasicDetails
          prevSavedDetails={FormData.basic_details || {}}
          saveDetails={(details) =>
            setFormData({ ...FormData, ...details })
          }
          next={() => setFormSectionIndex((prev) => prev + 1)}
        />
      ),
    },
    {
      name: "Contact Details",
      component: (
        <ContactDetails
          prevSavedDetails={FormData.contact_details || {}}
          saveDetails={(details) =>
            setFormData({ ...FormData, ...details })
          }
          prev={() => setFormSectionIndex((prev) => prev - 1)}
          next={() => setFormSectionIndex((prev) => prev + 1)}
        />
      ),
    },
    {
      name: "Business Details",
      component: (
        <BusinessDetails
          CRMType={CRMType}
          setCRMType={setCRMType}
          prevSavedDetails={FormData.business_details || {}}
          saveDetails={(details) =>
            setFormData({ ...FormData, ...details })
          }
          prev={() => setFormSectionIndex((prev) => prev - 1)}
          next={() => setFormSectionIndex((prev) => prev + 1)}
        />
      ),
    },
    {
      name: "Social Links",
      component: (
        <SocialLinks
          prevSavedDetails={FormData.social_links || {}}
          saveDetails={(details) =>
            setFormData({ ...FormData, ...details })
          }
          prev={() => setFormSectionIndex((prev) => prev - 1)}
        />
      ),
    },
  ];
  // Function to handle form submission
  const handleFormData = (e) => {
    e.preventDefault();
    console.log(FormData);
    // Send formData to server or perform other actions
  };
  const parms = useLocation().pathname;
  return (
    <>
      <UserHeader parms={parms} />
      {/* Breadscrumb Section */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Form</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadscrumb Section */}
      {/* Profile Content */}
      <div className="dashboard-content">
        <div className="container">
          <div className="">
            <ul className="dashborad-menus">
              {FormSections.map((section, index) => (
                <li
                  key={index}
                  className={`${FormSectionIndex === index ? "active" : ""}`}
                >
                  <button
                    onClick={() => setFormSectionIndex(index)}
                    className="btn btn-primary"
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="profile-content">
            <div className="messages-form">
              {FormSections[FormSectionIndex].component}
            </div>
          </div>
        </div>
      </div>
      {/* /Profile Content */}
      <Footer />
    </>
  );
}
export default AddLisiting;