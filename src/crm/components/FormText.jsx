import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const FormText = ({ setFormData, uni, Label, Placeholder, value, multiple }) => {
    const [values, setValues] = React.useState([]);
    const [text, setText] = React.useState("");
    React.useEffect(() => {
        setFormData(values);
    }, [values]);
    React.useEffect(() => {
        if (value && value.length) setValues(value);
    }, [value]);
    if(multiple)  // allow user to inser multiple values with button Add left side of input
        return (
        <>
                <Form.Group>
                    <Form.Label className="col-form-label">{Label}</Form.Label>
                    <Form.Control
                        className="input-pass"
                        type="text"
                        id={uni}
                        name={uni}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                text.length && setValues((prev) => [...prev, text]);
                                setText("");
                            }
                        }}
                        placeholder={Placeholder}
                    />
                    <br />
                    <Button onClick={() => { text.length && setValues((prev) => [...prev, text]); setText("") }}>Add {Label}</Button>
                </Form.Group>
                {values.map((value, index) => (
                    <div key={index}
                    className="py-2"
                    >
                        {value} {" "}
                        <Link
                            to="#"
                            className="text-white ml-2 font-weight-bold bg-danger p-1 rounded"
                            onClick={() => {
                                // remove value
                                const newValues = [...values];
                                newValues.splice(index, 1);
                                setValues(newValues);
                            }}
                        >
                            <i className="feather-trash-2" />
                        </Link>
                    </div>
                ))}
                <br />
        </>
    );
    return (
        <>
            <Form.Group>
                <Form.Label className="col-form-label">
                    {Label}
                    {/* <span className="text-danger">*</span> */}
                </Form.Label>
                <Form.Control
                    className="input-pass"
                    type="text"
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

export default FormText;