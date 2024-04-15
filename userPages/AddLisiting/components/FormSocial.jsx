import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const FormSocial = ({ setFormData, uni, Label, Icon, value, Placeholder, multiple }) => {
    const [url, setUrl] = React.useState("");
    const [values, setValues] = React.useState([]);
    React.useEffect(() => {
        setFormData(values);
    }, [values]);
    React.useEffect(() => {
        if (value && value.length) setValues(value);
    }, [value]);
    if (multiple)  // allow user to inser multiple values with button Add left side of input
        return (
            <>
                <Form.Group>
                    <Form.Label className="col-form-label">{Label}</Form.Label>
                    <Form.Control
                        className="input-pass"
                        type="text"
              j          id={uni}
                        name={uni}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                url.length && setValues((prev) => [...prev, url]);
                                setUrl("");
                            }
                        }}
                        placeholder={Placeholder}
                    />
                    <br />
                    <Button onClick={() => { url.length && setValues((prev) => [...prev, url]); setUrl("") }}>Add {Label}</Button>
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
            <Form.Group className="formlast-input">
                <Form.Label className="col-form-label">{Label}</Form.Label>
                <div className="pass-group group-img">
                    <span className="lock-icon">
                        <i className={Icon} />
                    </span>
                    <Form.Control
                        // className="input-pass"
                        type="text"
                        id={uni}
                        name={uni}
                        value={value || ""}
                        onChange={(e) => setFormData(e.target.value)}
                        placeholder={Placeholder}
                    />
                </div>
            </Form.Group>
            <br />
        </>
    );
}

export default FormSocial;