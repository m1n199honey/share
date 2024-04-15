import { Link } from "react-router-dom";
import "./style.css";
import React, { useState } from "react";

function AccordionMenu({ items, prefixIcon, suffixIcon }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button
            style={{ display: "flex", justifyContent: "space-between" }}
            className="accordion-btn"
            onClick={() => toggleItem(index)}
          >
            <span>
              {prefixIcon}
              {item.title}
            </span>
            {suffixIcon}
          </button>
          {openIndex === index &&
            item.content.map((element, index) => (
              <Link
                style={{ paddingTop: "8px", marginLeft: "5px" }}
                to={element.path}
                key={index}
              >
                {element.name}
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}

export default AccordionMenu;
