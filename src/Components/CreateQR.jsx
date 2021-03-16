import React from "react";

export default function CreateQR() {
  return (
    <div>
      <QRCode
        value={
          "https://i.pinimg.com/originals/51/7c/e2/517ce2fd6abacf809af5ea193a38ca91.jpg"
        }
        size={444}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"M"}
        includeMargin={false}
        renderAs={"svg"}
        imageSettings={{
          src: "",
          x: 0,
          y: 0,
          height: 27,
          width: 27,
          excavate: true,
        }}
      />
    </div>
  );
}
