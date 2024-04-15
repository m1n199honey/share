import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import AccordionMenu from "../../components/accordion-menu";

const Index = () => {
  const pages = [
    {
      title: "Pages",
      content: [
        { path: "/policy/privacy", name: "Privacy Policy" },
        { path: "/policy/copyright", name: "Copyright Policy" },
        { path: "/policy/listing", name: "Listing Policy" },
        { path: "/policy/terms", name: "Terms" },
        { path: "/sitemap", name: "Sitemap" },
        { path: "/faq", name: "FAQ" },
        { path: "/pricing", name: "Pricing" },
        { path: "/how-it-works", name: "How It Works" },
        { path: "/blogs", name: "Blogs" },
      ],
    },
  ];
  
  const CRMs = [
    {
      title: "CRM",
      content: [
        { path: "/automobile", name: "Automobile" },
        { path: "/building-construction", name: "Building & Construction" },
        { path: "/education", name: "Education" },
        { path: "/healthcare-doctors", name: "HealthCare & Doctors" },
        { path: "/home", name: "Home" },
        { path: "/job", name: "Job" },
        { path: "/on-demand-services", name: "On Demand Services" },
        { path: "/packer-movers", name: "Packer & Movers" },
        { path: "/property", name: "Property" },
        { path: "/restaurants", name: "Restaurants" },
        { path: "/sell", name: "Sell" },
        { path: "/travel-transport", name: "Travel & Transport" },
        { path: "/wedding-events", name: "Wedding & Events" },
      ],
    },
  ].map((crm) => ({
    ...crm,
    content: crm.content.map((item) => ({
      ...item,
      path: `/crm${item.path}`,
    })),
  }));

  return (
    <div className="sidebar pb-5" id="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Link to="/">
            <img src="assets/img/logo.svg" className="img-fluid logo" alt="" />
          </Link>
          <Link to="/">
            <img
              src="assets/img/logo-small.svg"
              className="img-fluid logo-small"
              alt=""
            />
          </Link>
        </div>
        <div className="sidebar-toggle">
          <label className="switch" id="toggle_btn">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="sidebar-inner slimscroll h-[90vh] max-h-[90vh] overflow-scroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title m-0">
              <h6>Home</h6>
            </li>
            <li>
              <Link to="/" className="active">
                <i className="fe fe-grid"></i> <span>Dashboard</span>
              </Link>
            </li>
            <li className="menu-title">
              <h6>Listing</h6>
            </li>
            <li>
              <Link to="/listings">
                <i className="fe fe-briefcase"></i>
                <span>Listings</span>
              </Link>
            </li>
            <li>
              <Link to="/categories">
                <i className="fe fe-clipboard"></i>
                <span>Categories</span>
              </Link>
            </li>
            <li>
              <Link to="/sub-categories">
                <i className="fe fe-clipboard"></i>
                <span>Sub Categories</span>
              </Link>
            </li>
            <li>
              <Link to="/childsub-categories">
                <i className="fe fe-clipboard"></i>
                <span>Child Sub Categories</span>
              </Link>
            </li>
            <li>
              <Link to="/childsub-categories">
                <i className="fe fe-map"></i>
                <span>Cities</span>
              </Link>
            </li>
            <li>
              <Link to="/childsub-categories">
                <i className="fe fe-map"></i>
                <span>Locations</span>
              </Link>
            </li>
            <li style={{ padding: "10px 20px" }}>
              <AccordionMenu
                items={pages}
                prefixIcon={
                  <i
                    style={{ marginRight: "15px" }}
                    class="fa-regular fa-file"
                  ></i>
                }
                suffixIcon={<i class="fa fa-chevron-down"></i>}
              />
            </li>
            <li style={{ padding: "10px 20px" }}>
              <AccordionMenu
                items={CRMs}
                prefixIcon={
                  <i
                    style={{ marginRight: "15px" }}
                    class="fa-regular fa-file"
                  ></i>
                }
                suffixIcon={<i class="fa fa-chevron-down"></i>}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
