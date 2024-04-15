import React, { useState } from "react";

const ContactDetails = ({ prevSavedDetails, saveDetails, prev, next }) => {
  const [ContactDetails, setContactDetails] = useState({
    mobile_no: prevSavedDetails.mobile_no || "",
    alternate_no: prevSavedDetails.alternate_no || "",
    whatsapp_no: prevSavedDetails.whatsapp_no || "",
    email: prevSavedDetails.email || "",
    address: prevSavedDetails.address || "",
    location: prevSavedDetails.location || "",
  });

  return (
    <div className="card">
        <div className="card-header">
          <h4>Contact Details</h4>
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">
            Mobile No. <span>*</span>
          </label>
          <input
            type="text"
            id="mobileNo"
            className="form-control pass-input"
            value={ContactDetails.mobile_no}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                mobile_no: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="alternateNo">
            Alternate No. <span>*</span>
          </label>
          <input
            type="text"
            id="alternateNo"
            className="form-control pass-input"
            value={ContactDetails.alternate_no}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                alternate_no: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="whatsappNo">
            Whatsapp No. <span>*</span>
          </label>
          <input
            type="text"
            id="whatsappNo"
            className="form-control pass-input"
            value={ContactDetails.whatsapp_no}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                whatsapp_no: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            className="form-control pass-input"
            value={ContactDetails.email}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">
            Address <span>*</span>
          </label>
          <input
            type="text"
            id="address"
            className="form-control pass-input"
            value={ContactDetails.address}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                address: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">
            Location <span>*</span>
          </label>
          <input
            type="text"
            id="location"
            className="form-control pass-input"
            value={ContactDetails.location}
            onChange={(e) =>
              setContactDetails({
                ...ContactDetails,
                location: e.target.value,
              })
            }
          />
        </div>
      <div className="form-group">
        <button
          type="buttton"
          className="btn btn-primary"
          onClick={() => (saveDetails({
            contact_details: ContactDetails
          }), prev())}
        >
          <span>Previous</span>
        </button>{" "}
        <button
          type="buttton"
          className="btn btn-primary"
          onClick={() => (saveDetails({
            contact_details: ContactDetails
          }), next())}
        >
          <span>Save & Next</span>
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
