import React from "react";
import { Form } from "react-bootstrap";

const FormTextArea = ({ setFormData, uni, Label, Placeholder, value }) => {
    return (
        <>
            <Form.Group>
                <Form.Label className="col-form-label">
                    {Label}
                    {/* <span className="text-danger">*</span> */}
                </Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    id={uni}
                    name={uni}
                    value={value || ""}
                    onChange={(e) => setFormData(e.target.value)}
                    placeholder={Placeholder}
                />
            </Form.Group>
            <br />
        </>
    );
};

export default FormTextArea;