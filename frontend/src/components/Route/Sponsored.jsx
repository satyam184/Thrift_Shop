import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start mt-2">
          <img
            src="data:image/png;base64,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"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="data:image/png;base64,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"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
