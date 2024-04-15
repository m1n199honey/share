
import React from "react";
import { Card, Form, } from "react-bootstrap";
export default function SelectFormCategory({ activeCategory, setActiveCategory, categories }){
    return (
        <>
            <Card>
                <Card.Header>Select Form Category</Card.Header>
                <Card.Body>
                    <Form.Group>
                        <select
                            className="form-control"
                            onChange={(e) => {
                                const selectedIndex = e.target.options.selectedIndex;
                                setActiveCategory(selectedIndex - 1);
                            }}
                            value={`${activeCategory}`}
                        >
                            <option disabled value="">
                                {" "}
                                Select Arm Type
                            </option>
                            {categories.map((type, index) => (
                                <option key={index} value={index}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </Form.Group>
                </Card.Body>
            </Card>
        </>
    );
};