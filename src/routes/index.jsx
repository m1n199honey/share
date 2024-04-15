import { Routes, Route } from "react-router-dom";
import AppHeader from "../layout/app-header";
import AppSidebar from "../layout/app-sidebar";
import LoginSection from "../pages/auth/login";
import HomeSection from "../pages/homepage";
import Listing from "../pages/Listing";
import CategoriesSection from "../pages/categories-view";
import SubcategoriesSection from "../pages/sub-categories-view";
import Addlisting from "../pages/Addlisting";
import AddCategorySection from "../pages/categories-view/add-categories";
import AddSubCategorySection from "../pages/sub-categories-view/add-subcategories";
import ChildSubcategoriesSection from "../pages/child-sub-categories-view";
import AddChildSubCategorySection from "../pages/child-sub-categories-view/add-child-sub-categories";
import ProtectedRoute from "../utils/protected-routes";
import CitySection from "../pages/city-view";
import AddCitySection from "../pages/city-view/add-city";
import LocationSection from "../pages/location-view";
import AddLocationSection from "../pages/location-view/add-location";
import PrivacyPolicySection from "../pages/legal-pages/policy";
import SitemapSection from "../pages/legal-pages/site-map";
import AddSitemapSection from "../pages/legal-pages/site-map/add-sitemap";
import FaqSection from "../pages/legal-pages/faq";
import AddFaqSection from "../pages/legal-pages/faq/add-faq";
import PricingSection from "../pages/legal-pages/pricing";
import AddPricingSection from "../pages/legal-pages/pricing/add-pricing";
import HowItWorksSection from "../pages/legal-pages/how-it-works";
import AddHowItWorksSection from "../pages/legal-pages/how-it-works/add-how-it-works";
import BlogsSection from "../pages/legal-pages/blogs";
import AddBlogsSection from "../pages/legal-pages/blogs/add-blogs";
import CRMSection from "../crm";
const Index = () => {
  return (
    <div className="main-wrapper">
      <ProtectedRoute>
        <AppHeader />
        <AppSidebar />
      </ProtectedRoute>
      <Routes>
        <Route path="/" element={<LoginSection />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <HomeSection />
            </ProtectedRoute>
          }
        />
        <Route path="/listings" element={<Listing />} />
        <Route path="/add-listing" element={<Addlisting />} />
        <Route path="categories">
          <Route index={true} element={<CategoriesSection />} />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddCategorySection />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <AddCategorySection />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="sub-categories">
          <Route index={true} element={<SubcategoriesSection />} />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddSubCategorySection />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <AddSubCategorySection />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="city">
          <Route
            index={true}
            element={
              <ProtectedRoute>
                <CitySection />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddCitySection />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <AddCitySection />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="how-it-works">
          <Route
            index={true}
            element={
              <ProtectedRoute>
                <HowItWorksSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddHowItWorksSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <AddHowItWorksSection />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="sitemap">
          <Route
            index={true}
            element={
              <ProtectedRoute>
                <SitemapSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddSitemapSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <AddSitemapSection />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="blogs">
          <Route
            index={true}
            element={
              <ProtectedRoute>
                <BlogsSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddBlogsSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <AddBlogsSection />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="faq">
          <Route
            index={true}
            element={
              <ProtectedRoute>
                <FaqSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddFaqSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <AddFaqSection />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/policy/:policyType"
          element={
            <ProtectedRoute>
              <PrivacyPolicySection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/crm/:crmType"
          element={
            <ProtectedRoute>
              <CRMSection />
            </ProtectedRoute>
          }
        />
        <Route path="locations">
          <Route
            index={true}
            element={
              <ProtectedRoute>
                <LocationSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddLocationSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <AddLocationSection />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="pricing">
          <Route
            index={true}
            element={
              <ProtectedRoute>
                <PricingSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="new"
            element={
              <ProtectedRoute>
                <AddPricingSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <AddPricingSection />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="childsub-categories">
          <Route index={true} element={<ChildSubcategoriesSection />} />
          <Route path="new" element={<AddChildSubCategorySection />} />
          <Route path="edit" element={<AddChildSubCategorySection />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Index;
