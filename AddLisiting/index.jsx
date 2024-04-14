import React from "react";
import Footer from "../../home/footer/Footer";
// import UserHeader from "../Userheader";
import { useLocation, Link } from "react-router-dom";
import Breadscrumb from "./components/Breadscrub";
import SelectFormCategory from "./components/SelectFormCategory";
import FormText from "./components/FormText";
import FormEmail from "./components/FormEmail";
import FormSocial from "./components/FormSocial";
import FormTextArea from "./components/FormTextArea";
import { Card, Row, Form, Col } from "react-bootstrap";

export default function AddListing() {
    const parms = useLocation().pathname;
    const [activeCategory, setActiveCategory] = React.useState(0); // default Job
    const [sectionIndex, setSectionIndex] = React.useState(-1); // default none
    const [activeSection, setActiveSection] = React.useState(3);    // default Basic Information
    const NextSection = () => setActiveSection(activeSection + 1);
    const PreviousSection = () => setActiveSection(activeSection - 1);
    const [formData, setFormData] = React.useState({});
    const handleFormSubmit = () => {
        console.log(formData);
    }
    const DetaultformSections = [
        {
            name: "Basic Information",
            icon: "fa-solid fa-user",
            uni: "basic_details",
            inputs: [
                { type: "text", label: "Name", placeholder: "Enter Name", uni: "name" },
                { type: "email", label: "Email", placeholder: "Enter Email", uni: "email" },
                { type: "text", label: "Phone", placeholder: "Enter Phone", uni: "contact_no" },
            ]
        },
        {
            name: "Contact Information",
            icon: "feather-grid",
            uni: "contact_details",
            inputs: [
                { type: "text", label: "Mobile Number", placeholder: "Enter Mobile Number", uni: "mobile_no" },
                { type: "text", label: "Alternate Number", placeholder: "Enter Alternate Number", uni: "alternate_no" },
                { type: "text", label: "WhatsApp Number", placeholder: "Enter WhatsApp Number", uni: "whatsapp_no" },
                { type: "email", label: "Email", placeholder: "Enter Email", uni: "email" },
                { type: "text", label: "Address", placeholder: "Enter Address", uni: "address" },
                { type: "text", label: "Location", placeholder: "Enter Location", uni: "location" },
                { type: "img", label: "Gallery", placeholder: "Upload Images", multiple: true, uni: "gallery_images" },
            ]
        },
        {
            name: "Business Information",
            icon: "feather-list",
            uni: "business_details",
            inputs: [
                { type: "text", label: "Business Name", placeholder: "Enter Business Name", uni: "title" },
                { type: "textarea", label: "Business Description", placeholder: "Enter Business Description", uni: "description" },
                {
                    dual: true,
                    first: { type: "img", label: "Business Logo", placeholder: "Upload Business Logo", uni: "brand_logo" },
                    second: { type: "img", label: "Business Banner", placeholder: "Upload Business Banner", uni: "banner_image" }
                },
                { type: "text", label: "Services", placeholder: "Enter Services", multiple: true, uni: "services" },
                { type: "text", label: "Features", placeholder: "Enter Features", multiple: true, uni: "features" },
                { type: "img", label: "Product Images", placeholder: "Upload Product Images", multiple: true, nameRequired: true, uni: "product_images" },
            ]
        },
        {
            name: "Social Media",
            icon: "fa-solid fa-comment-dots",
            uni: "social_media",
            inputs: [
                {
                    dual: true,
                    first: { type: "text", label: "Facebook", placeholder: "Enter Facebook URL", icon: "fa-brands fa-facebook", social: true, uni: "facebook" },
                    second: { type: "text", label: "Twitter", placeholder: "Enter Twitter URL", icon: "fa-brands fa-twitter", social: true, uni: "twitter" },
                },
                {
                    dual: true,
                    first: { type: "text", label: "Instagram", placeholder: "Enter Instagram URL", icon: "fa-brands fa-instagram", social: true, uni: "instagram" },
                    second: { type: "text", label: "LinkedIn", placeholder: "Enter LinkedIn URL", icon: "fa-brands fa-linkedin", social: true, uni: "linkedin" },
                },
                {
                    dual: true,
                    first: { type: "text", label: "YouTube", placeholder: "Enter YouTube URL", icon: "fa-brands fa-youtube", social: true, uni: "youtube" },
                    second: { type: "text", label: "Pinterest", placeholder: "Enter Pinterest URL", icon: "fa-brands fa-pinterest", social: true, uni: "pinterest" },
                },
                { type: "text", label: "Youtube Videos", placeholder: "Enter Youtube Videos URL", icon: "fa-brands fa-youtube", social: true, multiple: true, uni: "youtube_videos" },
            ]
        },
    ];
    const Job = {
        UserFormSections : [
            {
                name: "Basic Information",
                icon: "fa-solid fa-user",
                uni: "basic_details",
                inputs: [
                    { type: "radio", label: "Gender", options: ["Male", "Female"], uni: "gender" },
                 ]
            },
            {
                name: "Contact Information",
                icon: "feather-grid",
                uni: "contact_details",
                inputs: [ ]
            },
            {
                name: "Other Information",
                icon: "feather-list",
                uni: "other_details",
                inputs: [ ]
            },
        ],
        VendorFormSections : [],
        BusinessFormSections : [],
    };
    const categories = [
        {
            name: "Automobile",
            formSections: [DetaultformSections],
        },
        {
            name: "Building & Construction",
            formSections: [DetaultformSections]
        },
        {
            name: "Education",
            formSections: [DetaultformSections]
        },
        {
            name: "HealthCare & Doctors",
            formSections: [DetaultformSections]
        },
        {
            name: "Home",
            formSections: [DetaultformSections]
        },
        {
            name: "Job",
            formSections: [Job.UserFormSections, Job.VendorFormSections, Job.BusinessFormSections]
        },
        {
            name: "On Demand Services",
            formSections: [DetaultformSections]
        },
        {
            name: "Packer & Movers",
            formSections: [DetaultformSections]
        },
        {
            name: "Property",
            formSections: [DetaultformSections]
        },
        {
            name: "Restaurants",
            formSections: [DetaultformSections]
        },
        {
            name: "Sell",
            formSections: [DetaultformSections]
        },
        {
            name: "Travel & Transport",
            formSections: [DetaultformSections]
        },
        {
            name: "Wedding & Events",
            formSections: [DetaultformSections]
        }
    ];
    React.useEffect(() => {
        setFormData({}); // reset form data if category changes
    }, [activeCategory]);
    return (
        <>
            {/* <UserHeader parms={parms} /> */}
            <Breadscrumb />
            <div className="dashboard-content">
                <div className="container">
                    <div className="profile-content">
                        <div className="messages-form">
                            <SelectFormCategory
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                                categories={categories.map((category) => category.name)}
                            />
                        </div>
                    </div>
                    {
                        activeCategory === 5 ? (<>
                            <div className="profile-content">
                                <Card.Header>Section Index : {sectionIndex}</Card.Header>
                                <Card>
                                    <Card.Body>
                                                {/* select section Index with option User, Vendor and Bussiness */}
                                                <InputField 
                                                    type="select"
                                                    label="Select Job Type"
                                                    uni={`categories-${activeCategory}-job_type`}
                                                    Options={[
                                                        { Label: "User" },
                                                        { Label: "Vendor" },
                                                        { Label: "Business" }
                                                    ]}
                                                    inputValue={formData["job_type"]}
                                                    setInputValueInForm={(inputValue) => {
                                                        // set section index based on job type
                                                        setSectionIndex(inputValue);
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            ["job_type"]: inputValue,
                                                        }));
                                                    }}
                                                />
                                    </Card.Body>
                                </Card>
                            </div>
                            {
                                0 <= sectionIndex && sectionIndex <= 2 ? (<>
                                    <div className="">
                                        <ul className="dashborad-menus">
                                            {categories[activeCategory].formSections[sectionIndex].map((section, index) => (
                                                <Navigation
                                                    key={index}
                                                    active={activeSection === index}
                                                    icon={section.icon}
                                                    name={section.name}
                                                    gotoSection={() => setActiveSection(index)}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                     <div className="profile-content">
                                        <Card>
                                            <div className="messages-form">
                                                <Card.Header>For {categories[activeCategory].name}</Card.Header>
                                            </div>
                                            <Card.Body>
                                                <Form.Group >
                                                    {
                                                        0 <= activeCategory && activeCategory <= 12 ? (<>
                                                            {categories[activeCategory].formSections[sectionIndex][activeSection].inputs.map((input, index) => {
                                                                const SectionKey = categories[activeCategory].formSections[sectionIndex][activeSection].uni;
                                                                if (!formData[SectionKey]) {
                                                                    setFormData((prev) => ({
                                                                        ...prev,
                                                                        [SectionKey]: {},
                                                                    }));
                                                                }
                                                                if (input.dual) {
                                                                    return (
                                                                        <Row key={index}>
                                                                            <Col sm={6}>
                                                                                <InputField
                                                                                    type={input.first.type}
                                                                                    label={input.first.label}
                                                                                    placeholder={input.first.placeholder}
                                                                                    icon={input.first.icon}
                                                                                    social={input.first.social}
                                                                                    multiple={input.first.multiple}
                                                                                    nameRequired={input.first.nameRequired}
                                                                                    uni={`categories-${activeCategory}-${SectionKey}-${input.first.uni}`}
                                                                                    inputValue={formData[SectionKey] ? formData[SectionKey][input.first.uni] : null}
                                                                                    setInputValueInForm={(inputValue) => {
                                                                                        setFormData((prev) => ({
                                                                                            ...prev,
                                                                                            [SectionKey]: {
                                                                                                ...prev[SectionKey],
                                                                                                [input.first.uni]: inputValue,
                                                                                            },
                                                                                        }));
                                                                                    }}
                                                                                />
                                                                            </Col>
                                                                            <Col sm={6}>
                                                                                <InputField
                                                                                    type={input.second.type}
                                                                                    label={input.second.label}
                                                                                    placeholder={input.second.placeholder}
                                                                                    icon={input.second.icon}
                                                                                    social={input.second.social}
                                                                                    multiple={input.second.multiple}
                                                                                    nameRequired={input.second.nameRequired}
                                                                                    uni={`categories-${activeCategory}-${SectionKey}-${input.second.uni}`}
                                                                                    inputValue={formData[SectionKey] ? formData[SectionKey][input.second.uni] : null}
                                                                                    setInputValueInForm={(inputValue) => {
                                                                                        setFormData((prev) => ({
                                                                                            ...prev,
                                                                                            [SectionKey]: {
                                                                                                ...prev[SectionKey],
                                                                                                [input.second.uni]: inputValue,
                                                                                            },
                                                                                        }));
                                                                                    }}
                                                                                />
                                                                            </Col>
                                                                        </Row>
                                                                    );
                                                                }
                                                                const inputValue = formData[SectionKey] ? formData[SectionKey][input.uni] : null;
                                                                return (
                                                                    <InputField
                                                                        Options={input.options}
                                                                        key={index}
                                                                        type={input.type}
                                                                        label={input.label}
                                                                        placeholder={input.placeholder}
                                                                        icon={input.icon}
                                                                        social={input.social}
                                                                        multiple={input.multiple}
                                                                        nameRequired={input.nameRequired}
                                                                        uni={`categories-${activeCategory}-${SectionKey}-${input.uni}`}
                                                                        inputValue={inputValue}
                                                                        setInputValueInForm={(inputValue) => {
                                                                            setFormData((prev) => ({
                                                                                ...prev,
                                                                                [SectionKey]: {
                                                                                    ...prev[SectionKey],
                                                                                    [input.uni]: inputValue,
                                                                                },
                                                                            }));
                                                                        }}
                                                                    />
                                                                );
                                                            })}
                                                        </>) : (<></>)
                                                    }
                                                    {0 <= activeSection && activeSection <= categories[activeCategory].formSections[sectionIndex].length - 1 ? (<>
                                                        {activeSection !== 0 ? (<>
                                                            <button className="btn btn-primary" onClick={PreviousSection}>Previous</button> {" "}
                                                        </>) : (<></>)}
                                                        {activeSection !== categories[activeCategory].formSections[sectionIndex].length - 1 ? (<>
                                                            <button className="btn btn-primary" onClick={NextSection}>Next</button> {" "}
                                                        </>) : (<></>)}
                                                        {activeSection === categories[activeCategory].formSections[sectionIndex].length - 1 ? (<>
                                                            <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                                                        </>) : (<></>)}
                                                    </>) : (<></>)}
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                         {/* </div> */}
                                    </div>
                                </>) : (<></>)
                            }
                        </>) : (<></>)
                    }
                    {
                        activeCategory !== 5 ? (<> {/* show if category is not Job */}
                            <div className="">
                                <ul className="dashborad-menus">
                                    {categories[activeCategory].formSections[0].map((section, index) => (
                                        <Navigation
                                            key={index}
                                            active={activeSection === index}
                                            icon={section.icon}
                                            name={section.name}
                                            gotoSection={() => setActiveSection(index)}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className="profile-content">
                                <Card>
                                    <div className="messages-form">
                                        <Card.Header>For {categories[activeCategory].name}</Card.Header>
                                    </div>
                                    <Card.Body>
                                        <Form.Group >
                                            {
                                                0 <= activeCategory && activeCategory <= 12 ? (<>
                                                    {categories[activeCategory].formSections[0][activeSection].inputs.map((input, index) => {
                                                        const SectionKey = categories[activeCategory].formSections[0][activeSection].uni;
                                                        if (!formData[SectionKey]) {
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                [SectionKey]: {},
                                                            }));
                                                        }
                                                        if (input.dual) {
                                                            return (
                                                                <Row key={index}>
                                                                    <Col sm={6}>
                                                                        <InputField
                                                                            type={input.first.type}
                                                                            label={input.first.label}
                                                                            placeholder={input.first.placeholder}
                                                                            icon={input.first.icon}
                                                                            social={input.first.social}
                                                                            multiple={input.first.multiple}
                                                                            nameRequired={input.first.nameRequired}
                                                                            uni={`categories-${activeCategory}-${SectionKey}-${input.first.uni}`}
                                                                            inputValue={formData[SectionKey] ? formData[SectionKey][input.first.uni] : null}
                                                                            setInputValueInForm={(inputValue) => {
                                                                                setFormData((prev) => ({
                                                                                    ...prev,
                                                                                    [SectionKey]: {
                                                                                        ...prev[SectionKey],
                                                                                        [input.first.uni]: inputValue,
                                                                                    },
                                                                                }));
                                                                            }}
                                                                        />
                                                                    </Col>
                                                                    <Col sm={6}>
                                                                        <InputField
                                                                            type={input.second.type}
                                                                            label={input.second.label}
                                                                            placeholder={input.second.placeholder}
                                                                            icon={input.second.icon}
                                                                            social={input.second.social}
                                                                            multiple={input.second.multiple}
                                                                            nameRequired={input.second.nameRequired}
                                                                            uni={`categories-${activeCategory}-${SectionKey}-${input.second.uni}`}
                                                                            inputValue={formData[SectionKey] ? formData[SectionKey][input.second.uni] : null}
                                                                            setInputValueInForm={(inputValue) => {
                                                                                setFormData((prev) => ({
                                                                                    ...prev,
                                                                                    [SectionKey]: {
                                                                                        ...prev[SectionKey],
                                                                                        [input.second.uni]: inputValue,
                                                                                    },
                                                                                }));
                                                                            }}
                                                                        />
                                                                    </Col>
                                                                </Row>
                                                            );
                                                        }
                                                        const inputValue = formData[SectionKey] ? formData[SectionKey][input.uni] : null;
                                                        return (
                                                            <InputField
                                                                key={index}
                                                                type={input.type}
                                                                label={input.label}
                                                                placeholder={input.placeholder}
                                                                icon={input.icon}
                                                                social={input.social}
                                                                multiple={input.multiple}
                                                                nameRequired={input.nameRequired}
                                                                uni={`categories-${activeCategory}-${SectionKey}-${input.uni}`}
                                                                inputValue={inputValue}
                                                                setInputValueInForm={(inputValue) => {
                                                                    setFormData((prev) => ({
                                                                        ...prev,
                                                                        [SectionKey]: {
                                                                            ...prev[SectionKey],
                                                                            [input.uni]: inputValue,
                                                                        },
                                                                    }));
                                                                }}
                                                            />
                                                        );
                                                    })}
                                                </>) : (<></>)
                                            }
                                            {0 <= activeSection && activeSection <= categories[activeCategory].formSections[0].length - 1 ? (<>
                                                {activeSection !== 0 ? (<>
                                                    <button className="btn btn-primary" onClick={PreviousSection}>Previous</button> {" "}
                                                </>) : (<></>)}
                                                {activeSection !== categories[activeCategory].formSections[0].length - 1 ? (<>
                                                    <button className="btn btn-primary" onClick={NextSection}>Next</button> {" "}
                                                </>) : (<></>)}
                                                {activeSection === categories[activeCategory].formSections[0].length - 1 ? (<>
                                                    <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
                                                </>) : (<></>)}
                                            </>) : (<></>)}
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                {/* </div> */}
                            </div>
                        </>) : (<></>)
                    }


                </div>
            </div>
            <Footer />
        </>
    );
}
const Navigation = ({ active, icon, name, gotoSection }) => {
    return (
        <li>
            <Link to="#" className={active ? "bg-danger text-white" : ""} onClick={gotoSection}>
                <i className={icon} /> <span>{name}</span>
            </Link>
        </li>
    );
};
const InputField = ({ type, label, placeholder, icon, social, multiple, nameRequired, uni, inputValue, setInputValueInForm, Options }) => {
    const [inputDataState, setInputDataState] = React.useState(inputValue);
    React.useEffect(() => {
        setInputValueInForm(inputDataState);
        () => {
            setInputDataState(null);
        }
    }, [inputDataState]);
    switch (type) {
        case "text":
            // if (multiple && social) { } // for youtube videos
            // if (multiple) { } // for services, features
            if (social) return <FormSocial setFormData={setInputDataState} uni={uni} Label={label} Placeholder={placeholder} Icon={icon} value={inputDataState} multiple={multiple} />;
            return <FormText setFormData={setInputDataState} uni={uni} Label={label} Placeholder={placeholder} value={inputDataState} multiple={multiple} />;
        case "email":
            return <FormEmail setFormData={setInputDataState} uni={uni} Label={label} Placeholder={placeholder} value={inputDataState} />;
        case "img":
            if (multiple) return <FormImageUploadMultiple setFormData={setInputDataState} uni={uni} Label={label} value={inputDataState} nameRequired={nameRequired} />;
            return <FormImageUpload setFormData={setInputDataState} uni={uni} Label={label} Placeholder={placeholder} value={inputDataState} />;
        case "textarea":
            return <FormTextArea setFormData={setInputDataState} uni={uni} Label={label} Placeholder={placeholder} value={inputDataState} />;
        case "select":
            return <FormSelect setFormData={setInputDataState} uni={uni} Label={label} Options={Options || []} value={inputDataState} />;
        case "radio":
            return <FormRadioBox setFormData={setInputDataState} uni={uni} Label={label} Options={Options || []} value={inputDataState} />;
    }
    return <></>;
};

const FormImageUpload = ({ setFormData, uni, Label, Placeholder, value }) => {
    const [image, setImage] = React.useState(value || null);
    React.useEffect(() => {
        setFormData(image);
    }, [image]);
    React.useEffect(() => {
        () => {
            setInputData("");
        }
    }, []);
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
                    id={uni}
                    onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                />
                <label htmlFor={uni} className="file-upload">
                    {!image ? "Upload" : "Change"}
                </label>
            </div>
        </div>
    );
};

const FormImagePreview = ({ image, deleteImage, name }) => {
    return (
        <div className="gallery-upload">
            <img src={image} alt="" className="img-thumbnail" style={{ maxHeight: "8rem" }} />
            <Link to="#"
                className="profile-img-del"
                onClick={() => deleteImage()}
            >
                <i className="feather-trash-2" />
            </Link><br />
            {name && (<span>{name}</span>)}
        </div>
    );
};

const FormSelect = ({ setFormData, uni, Label, Options, value }) => {
    const handleChange = (e) => {
        setFormData(e.target.value);
    };
    return (
        <>
            <Form.Group>
                <Form.Label className="col-form-label">{Label}</Form.Label>
                <Form.Control
                    as="select"
                    id={uni}
                    name={uni}
                    value={value || ""}
                    onChange={handleChange}
                >
                    <option value="" disabled selected>Select Option</option>
                    {Options.map((item, index) => (<option key={index} value={index}>{item.Label}</option>))}
                </Form.Control>
            </Form.Group>
            <br />
        </>
    );
};

const FormImageUploadMultiple = ({ setFormData, uni, Label, value, nameRequired }) => {
    const [images, setImages] = React.useState(value || []);

    const [imagesWithNames, setImagesWithNames] = React.useState(value || []);
    const [imageName, setImageName] = React.useState("");
    const [imageNameRequireFlag, setImageNameRequireFlag] = React.useState(false);
    React.useEffect(() => {
        if (nameRequired) {
            setFormData(imagesWithNames);
        } else {
            setFormData(images);
        }
    }, [images, imagesWithNames]);
    if(nameRequired) 
        return (
            <>
                <div className="form-group">
                    <div className="gallery-media">
                        <h6 className="media-title">{Label}</h6>
                        <div className="galleryimg-upload">
                            {imagesWithNames.map((img, i) => (
                                <FormImagePreview
                                    key={i}
                                    image={img.image}
                                    name={img.name}
                                    deleteImage={() => setImagesWithNames(imagesWithNames.filter((_, index) => index !== i))}
                                />
                            ))}
                        </div>
                        <br />
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Image Name"
                        value={imageName}
                        onChange={(e) => setImageName(e.target.value)}
                    />
                    {imageNameRequireFlag && (<span className="text-danger">{" "} Image Name is required</span>)}
                    <br />
                    <div className="settings-upload-btn">
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            className="hide-input image-upload"
                            id={uni}
                            onChange={(e) => setImagesWithNames([...imagesWithNames, { image: URL.createObjectURL(e.target.files[0]), name: imageName }])}
                        />
                        
                        {
                            imageName.length ? (
                                <>
                                <label htmlFor={uni} className="file-upload">
                                    {images.length === 0 ? "Upload" : "Add More"}
                                </label>
                                </>
                            ) : (<></>)
                        }
                    </div>
                   
                    {
                        !imageName.length ? (
                            <>
                                <button className="btn btn-primary" onClick={() => setImageNameRequireFlag(true)}>
                                    {images.length === 0 ? "Upload" : "Add More"}
                                </button>
                            </>
                        ) : (<></>)
                    }
                </div>  
            </>
        );
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
                    id={uni}
                    onChange={(e) => {
                        const img = URL.createObjectURL(e.target.files[0]);
                        setImages([...images, img]);
                    }}
                />
                <label htmlFor={uni} className="file-upload">
                    {images.length === 0 ? "Upload" : "Add More"}
                </label>
            </div>
        </div>
    );
}

const FormRadioBox = ({ setFormData, uni, Label, Options, value }) => {
    console.log("Radio Options: ", Options)
    const [inputData, setInputData] = React.useState(value || "");
    React.useEffect(() => {
        setFormData(inputData);
    }, [inputData]);
    React.useEffect(() => {
        () => {
            setInputData("");
        }
    }, []);
    return (
        <Form.Group>
            <Form.Label className="col-form-label">{Label}</Form.Label>
            <div className="form-radio">
                {Options.map((label, index) => (
                    <Form.Check
                        key={index}
                        type="radio"
                        label={label}
                        name={uni}
                        value={index}
                        id={`${uni}-${index}`}
                        // checked={inputData === index}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                ))}
            </div>
        </Form.Group>
    );
};
