import React from "react";
import { Link } from 'react-router-dom'
import "./CropsInformation.css";

const CropsInformation = () => {
  return (
    <div className="crops">

      <div className="cropName">

        <div className="link1">
          <h4 className="text1">Crops Name</h4>
          <Link to="/cropsName">
            <img
              src="/Images/cropsName.jpeg"
              alt="example"
              className="cropsImage"
            />
          </Link>
        </div>

      </div>

      <div className="physicalFactor">

      <div className="link2">
          <h4 className="text2">Physical Factors</h4>
          <Link to="/physicalFactors">
            <img
              src="/Images/PhysicalFactors.jpeg"
              alt="example"
              className="physicalImage"
            />
          </Link>
       </div>
      </div>

    </div>
  );
};

export default CropsInformation;
