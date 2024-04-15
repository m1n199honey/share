
import React, { useState, useEffect } from "react";

const BasicDetails = ({prevSavedDetails, saveDetails, next}) => {

  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    contact_no: "",
  });
  useEffect(()=>{
    setBasicDetails({
      ...basicDetails,
      ...prevSavedDetails,
    });
  }, [])
  return (
    <div className="card">
      <div className="card-header">
        <h4>Basic Information</h4>
      </div>
      <div className="form-group">
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input
          type="text"
          id="name"
          className="form-control pass-input"
          value={basicDetails.name}
          onChange={(e) =>
            setBasicDetails({ ...basicDetails, name: e.target.value })
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
          value={basicDetails.email}
          onChange={(e) =>
            setBasicDetails({
              ...basicDetails,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactNo">
          Contact No. <span>*</span>
        </label>
        <input
          type="text"
          id="contactNo"
          className="form-control pass-input"
          value={basicDetails.contact_no}
          onChange={(e) =>
            setBasicDetails({
              ...basicDetails,
              contact_no: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <button type="buttton" className="btn btn-primary" onClick={() => (saveDetails({
          basic_details: basicDetails
        }), next())}>
          <span>Save & Next</span>
        </button>
      </div>
    </div>
  );
}

export default BasicDetails;