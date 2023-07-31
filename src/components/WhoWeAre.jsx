import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import office from "../assets/olymbia.jpg";

const WhoWeAre = () => {
  return (
    <>
      <div className="who_we_are section" id="about">
        <div className="banner"></div>
        <h1>Who We Are</h1>
        <div className="text">
          <img src={office} alt="" />
          <p>
            RACE Innovations Private Ltd is an Indian research, legal and
            accounting firm with offices in Chennai. RACE has alliances with
            Associate lawyers, Chartered Accountants and Company Secretary in
            all states and union territories of India and other countries. We
            can cater to all corporate legal, regulatory, accounting,
            compliances and dispute resolution requirements of our clients
            across the country.
          </p>
          <br/>
          <p>
            We represent large, medium & small companies, multinational
            corporations, banking & financial institutions, technology and
            manufacturing pioneers, private equity and venture capital investors
            and start-ups across the country.
          </p>
          <br/>
          <p>
            We are working with many of leading organizations, our professionals
            help business performance, leverage IT investments, protect
            financial assets, manage risk, and boost market confidence. Through
            our diverse capabilities and industry knowledge, we help companies
            meet today’s challenges, such as dramatic disruption and accelerated
            technology advancements, while charting a path to growth.
          </p>
          <br/>
          <p>
            Our focus is to mitigate risk of legal matters and to follow the
            regulations/ policy of the government. We collaborate with the
            client to highlight legal risks and advise steps and solutions to
            mitigate these to achieve the business objectives.
          </p>
        </div>

        <p className="qoute">
          <blockquote class="blockquote">
            <FaQuoteRight className="double_qoute" />
            <p>
              Our goal is to be a prominent service provider in supporting
              clients on their accounting and legal needs to enhance their
              business effectiveness and achieve great goals.
            </p>
          </blockquote>
          <blockquote class="blockquote">
            <FaQuoteRight className="double_qoute" />
            <p>
              We create a community for firms to collaborate on maximizing
              opportunities and address the challenges they face in a constantly
              changing professional services environment.
            </p>
          </blockquote>
        </p>
      </div>
    </>
  );
};

export default WhoWeAre;
