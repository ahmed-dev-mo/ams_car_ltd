import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/privacypolicy.css";

const PrivacyPolicy = () => {
  return (
    <Helmet title="Privacy Policy">
      <CommonSection title="Privacy Policy" />
      
      <div className="privacy-policy-content">
        <h2>Privacy Policy</h2>
        
        <h3>1. Introduction</h3>
        <p>Welcome to AMS Cars. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
        
        <h3>2. Information We Collect</h3>
        <p>We may collect personal information such as your name, email address, phone number, and other details you provide when you contact us or use our services. We do not collect non-personal information such as browsing data, IP addresses, and usage statistics.</p>
        
        <h3>3. How We Use Your Information</h3>
        <p>Your information is used to provide and improve our services, respond to your inquiries and communicate with you about our offers and updates. We may also use your information for marketing purposes with your consent.</p>
        
        <h3>4. Sharing Your Information</h3>
        <p>We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website or conducting our business, provided they agree to keep your information confidential.</p>
        
        <h3>5. Security</h3>
        <p>We implement security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
        
        <h3>6. Your Rights</h3>
        <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights or have any questions about your information, please contact us.</p>
        
        <h3>7. Changes to This Privacy Policy</h3>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. Please review this policy periodically for any updates.</p>
        
        <h3>8. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
        <p>Email: sales@amscars.uk <br />Phone: +44 747 112 3341<br />Address: 259-269 Marylebone Road, London, NW1 5RA</p>
      </div>
      <div>.</div>
      <div>.</div>
    </Helmet>
  );
};

export default PrivacyPolicy;
