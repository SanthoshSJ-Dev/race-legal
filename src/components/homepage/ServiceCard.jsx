import React from "react";
import Audit from "../../assets/audit.svg";
import Advisory from "../../assets/advisory.svg";
import Legal from "../../assets/legal.svg";
import Tax from "../../assets/tax.svg";

const ServiceCard = () => {
  return (
    <>
      <div className="service-section section" id="section">
        <h1>Our Services</h1>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-img">
              <img src={Audit} alt="" />
            </div>
            <div className="service-text">
              <div className="service-head">
                <h3>Accounting, Audit & Assurance</h3>
              </div>
              <div className="service-desc">
                We provide comprehensive accounting, audit, and assurance
                services, including niche practice areas, to meet business
                requirements and ensure smooth operations.
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img">
              <img src={Advisory} alt="" />
            </div>
            <div className="service-text">
              <div className="service-head">
                <h3>Advisory</h3>
              </div>
              <div className="service-desc">
                We offer expert advisory services across industries, providing
                actionable steps to tackle business challenges, from
                international expansion to mergers and acquisitions, tailored to
                your organization's strategic vision.
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img">
              <img src={Legal} alt="" />
            </div>
            <div className="service-text">
              <div className="service-head">
                <h3>Legal</h3>
              </div>
              <div className="service-desc">
                Our experienced legal advisors offer efficient solutions for
                businesses facing complex legal and commercial challenges
                internationally, across various industries.
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img">
              <img src={Tax} alt="" />
            </div>
            <div className="service-text">
              <div className="service-head">
                <h3>Tax</h3>
              </div>
              <div className="service-desc">
                Our experienced tax team provides efficient solutions to
                individuals and businesses, helping them reduce taxes, maximize
                benefits, and stay compliant with constantly updated tax
                regulations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
