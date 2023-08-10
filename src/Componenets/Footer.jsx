import React from "react";
import "./../Styles/Footer.css";
import facebook from "./../Images/facebook.png";
import twitter from "./../Images/twitter.png";
import linkedin from "./../Images/linkedin.png";
function Footer() {
  return (
    <div className="footer-conatiner">
      <div className="left-footer">
        <div className="left-info">
          <span>بما تتطلبه</span>
          <p>
            هنالك العديد من الأنواع. بعض النوادر أو الكلمات . عليك أن تتحقق
            أولاً أن
          </p>
        </div>
        <div className="left-info">
          <span>بما تتطلبه</span>
          <p>
            هنالك العديد من الأنواع. بعض النوادر أو الكلمات . عليك أن تتحقق
            أولاً أن
          </p>
        </div>
        <div className="left-info">
          <span>بما تتطلبه</span>
          <p>
            هنالك العديد من الأنواع. بعض النوادر أو الكلمات . عليك أن تتحقق
            أولاً أن
          </p>
        </div>
      </div>
      <div className="right-footer">
        <span>مشاهدة على تويتر</span>
        <div className="right-info">
          <div className="subscribe">
            <input type="text" />
            <div className="subscribeButton">الاشتراك</div>
          </div>
          <div className="socialMedia">
            <img src={linkedin} alt="linkedin"></img>
            <img src={facebook} alt="facebook"></img>
            <img src={twitter} alt="twitter"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
