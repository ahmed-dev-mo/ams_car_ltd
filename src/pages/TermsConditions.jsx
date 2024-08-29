import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/termsconditions.css";

const TermsConditions = () => {
  return (
    <Helmet title="Terms & Conditions">
      <CommonSection title="Terms & Conditions" />
      
      <div className="terms-conditions-content">
        <h2>Terms & Conditions</h2>
        
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing and using the AMS Cars website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website or services.</p>
        
        <h3>2. Changes to the Terms</h3>
        <p>We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the site following the posting of changes means you accept and agree to the modifications.</p>
        
        <h3>3. Use of the Site</h3>
        <p>You agree to use the AMS Cars website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site.</p>
        
        <h3>4. Intellectual Property</h3>
        <p>All content on this site, including text, graphics, logos, and images, is the property of AMS Cars or its content suppliers and is protected by copyright and other intellectual property laws.</p>
        
        <h3>5. Limitation of Liability</h3>
        <p>AMS Cars will not be liable for any damages arising out of or in connection with the use of this website. This is a comprehensive limitation of liability that applies to all damages of any kind.</p>
        
        <h3>6. Governing Law</h3>
        <p>These terms are governed by and construed in accordance with the laws of England and Wales, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        
        <h3>7. Contact Information</h3>
        <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
        <p>Email: sales@amscars.uk <br />Phone: +44 747 112 3341<br />Address: 259-269 Marylebone Road, London, NW1 5RA</p>
      </div>
      <div>.</div>
      <div>.</div>
    </Helmet>
  );
};

export default TermsConditions;
