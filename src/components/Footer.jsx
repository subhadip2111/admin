import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="social-media text-2xl mb-2">
            <a
              href="https://github.com/subhadip2111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 mr-4"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/subhadip-shee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 mr-4"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://twitter.com/Shee7Subhadip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>

          <div className="copyright text-sm">
            &copy; {new Date().getFullYear()} @Subhadip Shee. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
