import React from "react";
import "./../Styles/Advertise.css";
function Advertise() {
  return (
    <div className="marketing-container">
      <div className="mostRead">
        <span>الأكثر قراءة</span>
        <div className="sub-container">
          <div className="subHeader">
            <div className="subHeader-1">
              <span>الكلمات العشوائية</span>
            </div>
            <div className="subHeader-2">-</div>
          </div>
          <p>
            هنالك العديد من الأنواع المتوفرة للصوص لوريم إيبسوم، ولكن الغالبية
            تم تعديلها بشكل ما عبر إدخال . بعض النوادر أو الكلمات السلبوالين إلى
            النص إن كنت تريد أن تستخير نص لوريم إيبسوم ماء . عليك أن تلعق أولا
            أن ليس هناك أي كلمات أو عبارات مج
          </p>
        </div>
        <div className="add-container">
          <div className="addHeader-1">
            <span>
              هنالك العديد من الأنواع المتوفرة للصوص لوريم إيبسوم، ولكن الغالبية
              تم تعديلها بشكل ما عبر إدخال . بعض النوادر أو الكلمات السلبوالين
              إلى النص إن كنت تريد أن تستخير نص لوريم إيبسوم ماء . عليك أن تلعق
              أولا أن ليس هناك أي كلمات أو عبارات مج
            </span>
          </div>
          <div className="addHeader-2">+</div>
        </div>
        <div className="add-container">
          <div className="addHeader-1">
            <span>الكلمات العشوائية</span>
          </div>
          <div className="addHeader-2">+</div>
        </div>
        <div className="add-container">
          <div className="addHeader-1">
            <span>الكلمات العشوائية</span>
          </div>
          <div className="addHeader-2">+</div>
        </div>
      </div>

      <div className="ads-container">
        <img src="/advertisement.png" alt="Ad" id="ads"></img>
      </div>
    </div>
  );
}

export default Advertise;
