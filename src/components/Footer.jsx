import { faCaretDown } from "@fortawesome/fontawesome-free-solid";
import {
  fab,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FontAwesomeIcon className="social-icon" icon={(fab, faTwitter)} />
        <FontAwesomeIcon className="social-icon" icon={(fab, faFacebook)} />
        <FontAwesomeIcon className="social-icon" icon={(fab, faInstagram)} />
        <FontAwesomeIcon className="social-icon" icon={(fab, faYoutube)} />
        <FontAwesomeIcon className="social-icon" icon={(fab, faLinkedin)} />
      </div>
      <div className="footer-tabs">
        <button className="footer-tab">
          <h3>PLANLA & UC</h3>
          <FontAwesomeIcon
            className="fa-icon
          "
            icon={faCaretDown}
          />
        </button>
        <button className="footer-tab">
          <h3>SEYAHAT DENEYIMI</h3>
          <FontAwesomeIcon
            className="fa-icon
          "
            icon={faCaretDown}
          />
        </button>
        <button className="footer-tab">
          <h3>KESFET</h3>
          <FontAwesomeIcon
            className="fa-icon
          "
            icon={faCaretDown}
          />
        </button>
        <button className="footer-tab">
          <h3>POPULER UCUSLAR</h3>
          <FontAwesomeIcon
            className="fa-icon
          "
            icon={faCaretDown}
          />
        </button>
        <button className="footer-tab">
          <h3>BILGI EDIN</h3>
          <FontAwesomeIcon
            className="fa-icon
          "
            icon={faCaretDown}
          />
        </button>
        <button className="footer-tab">
          <h3>MILES&SMILES</h3>
          <FontAwesomeIcon
            className="fa-icon
          "
            icon={faCaretDown}
          />
        </button>
        <button className="footer-tab">
          <h3>CORPORATE CLUB</h3>
          <FontAwesomeIcon
            className="fa-icon
          "
            icon={faCaretDown}
          />
        </button>
        <button className="footer-tab">
          <h3>TURK HAVA YOLLARI</h3>
          <FontAwesomeIcon
            className="fa-icon
          "
            icon={faCaretDown}
          />
        </button>
      </div>

      <div className="footer-links-items">
        <div className="links">
          <a href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/10334">
            Bilgi Toplumu Hizmetleri
          </a>
          <a href="https://www.turkishairlines.com/tr-int/erisilebilirlik/">
            Erisilebilirlik
          </a>
          <a href="https://www.turkishairlines.com/tr-int/yasal-uyari/gizlilik-politikasi/">
            Gizlilik ve Cerez Politikasi
          </a>
          <a href="https://www.turkishairlines.com/tr-int/yasal-uyari/">
            Yasal Uyari
          </a>
          <a href="https://www.turkishairlines.com/tr-int/yasal-uyari/yolcu-haklari/">
            Yolcu Haklari
          </a>
          <p>Turk Hava Yollari A.O. Her hakki saklidir. &copy; 1996 - 2022</p>
        </div>
        <img
          src="https://cdn.turkishairlines.com/m/7e45c6b073a04726/original/ETBIS.png"
          alt="etbis"
        />
      </div>
    </div>
  );
};

export default Footer;
