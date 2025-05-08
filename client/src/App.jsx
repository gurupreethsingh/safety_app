import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/common_pages/Homepage";
import Header from "./components/header_components/Header";
import Footer from "./components/footer_components/Footer";
import SubscriptionForm from "./components/common_components/SubscriptionForm";
import AboutUs from "./pages/common_pages/AboutUs";
import ContactUs from "./pages/contact_pages/ContactUs";
import Login from "./pages/user_pages/Login";
import Register from "./pages/user_pages/Register";
import UserDashboard from "./pages/user_pages/UserDashboard";
import PageNotFound from "./pages/common_pages/PageNotFound";
import OurClients from "./components/common_components/OurClients";
import SuperAdminDashboard from "./pages/super_admin_pages/SuperAdminDashboard";
import AdminDashboard from "./pages/admin_pages/AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* user page  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route
            path="/superadmin-dashboard"
            element={<SuperAdminDashboard />}
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <OurClients />
        <SubscriptionForm />
        <Footer />
      </Router>
    </>
  );
}

export default App;
