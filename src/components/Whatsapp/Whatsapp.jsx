import React from "react";
import whatsapplogo from "../../assets/all-images/Print_Glyph_Green.png"


const Whatsapp = () => {
  
  return (
    <div class="fixed-bottom right-100 p-3" style={{ zIndex: "6", left: "inital"}}>
            <a href="https://wa.me/message/WL3GIHR3CBGIN1">
                <img src={whatsapplogo} width="60" alt="a" />
            </a>
    </div>
  );
};

export default Whatsapp;
