// say.js
import React from "react";
import "./say.css";

const Say= () => {
  return (
    <div className="say">
      <div className="say-neck"></div> {/* الرقبة */}
      <div className="say-head">
        {/* إضافة النظارة */}
        <div className="say-glasses"></div> 
        <div className="say-face left"></div> 
        <div className="say-face right"></div> 
        <div className="say-chin"></div> 
        <div className="say-eye left"></div> 
        <div className="say-eye right"></div> 
        <div className="say-mouth"></div> 
      </div>
      <div className="say-body">
        <div className="say-arm left"></div> {/* الذراع اليسرى مرفوعة */}
        <div className="say-arm right"></div> {/* الذراع اليمنى مرفوعة */}
        <div className="say-foot left"></div>
        <div className="say-foot right"></div>
      </div>
    </div>
  );
};

export default Say;
