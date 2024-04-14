import React from 'react';
import { Form } from 'react-bootstrap';

const FormEmail = ({ setFormData, uni, Label, Placeholder, value }) => {
    const [isValid, setIsValid] = React.useState(true);
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setFormData(inputValue);
        // Email validation using regular expression
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
        setIsValid(isValidEmail);
    };

    return (
        <>
            <Form.Group>
                <Form.Label className="col-form-label">
                    {Label}
                    {/* <span className="text-danger">*</span> */}
                </Form.Label>
                <Form.Control
                    className={`input-pass ${!isValid ? 'is-invalid' : ''}`}
                    type="email"
                    id={uni}
                    name={uni}
                    value={value || ""}
                    onChange={handleInputChange}
                    placeholder={Placeholder}
                />
                {!isValid && (
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email address.
                    </Form.Control.Feedback>
                )}
            </Form.Group>
            <br />
        </>
    );
};

export default FormEmail;