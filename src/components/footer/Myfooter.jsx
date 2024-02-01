import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="footer">
        <div className="navigation">
          <h2>Navigation</h2>
          <div className="NavItems">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="support">
          <div className="supportHeading">
            <h2>Support</h2>
            <div className="supportItem">
              <ul>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
                <li>
                  <a href="#privacyPolicy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#termsAndConditions">Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="socialMedia">
          <h2>Social Media</h2>
          <div className="socialItems">
            <ul>
              <li>
                <a href="twitter">Twitter</a>
              </li>
              <li>
                <a href="facebook">Facebook</a>
              </li>
              <li>
                <a href="instagram">Instagram</a>
              </li>
              <li>
                <a href="linkedin">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactInfo">
          <div className="contactInfoHeading">
            <h2>Contact Info</h2>
            <div className="ContactInfoItems">
              <ul>
                <li>
                  Jl. Danau Tamblingan No.180, Sanur, Denpasar, Bali 80222
                </li>
                <li>support@domain.com</li>
                <li>(+62) 887-1106-22814</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyrightItems">
          <li>Copyright © {currentYear} Jegtheme. All rights reserved.</li>
          <li>
            <img src="./src/components/footer/t.jpg" alt="" />
          </li>
          <li>Cloud Solution Template Kit by Jegtheme</li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
