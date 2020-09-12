import React from "react";
import "./css/Specifications.css";

const Specifications = ({ specifications }) => {
  const brakes = specifications && specifications.brakes;
  const chain = specifications && specifications.chain;
  const color = specifications && specifications.color;
  const framematerial = specifications && specifications.framematerial;
  const frontderailleur = specifications && specifications.frontderailleur;
  const rearderailleur = specifications && specifications.rearderailleur;
  const handlebar = specifications && specifications.handlebar;
  const rim = specifications && specifications.rim;
  const suspension = specifications && specifications.suspension;
  const shifter = specifications && specifications.shifter;
  const tire = specifications && specifications.tire;
  const size = specifications && specifications.size;

  return (
    <div className="container mt-4 specification-container">
      <h3>SPECIFICATIONS</h3>
      <div className="row">
        <div className="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Frame_2017_04.png"
            alt="Frame"
          ></img>
          <div className="specs">
            <h4>Frame</h4>

            <span style={{ fontSize: "1.2rem" }}>
              {framematerial && framematerial}
            </span>
          </div>
        </div>
        <div className="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Fork_2017_04.png"
            alt="Fork"
          ></img>
          <div className="specs">
            <h4>Fork</h4>

            <span style={{ fontSize: "1.2rem" }}>
              {" "}
              {suspension && suspension}
            </span>
          </div>
        </div>
        <div className="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Shifter_2017_04.png"
            alt="Shifter"
          ></img>
          <div className="specs">
            <h4>Shifter</h4>

            <span style={{ fontSize: "1.2rem" }}> {shifter && shifter}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Chain_2017_04.png"
            alt="Chain"
          ></img>
          <h4>CHAIN</h4>

          <span style={{ fontSize: "1.2rem" }}> {chain && chain}</span>
        </div>
        <div className="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Rear_Derail_2017_04.png"
            alt="Rear Derailleur"
          ></img>
          <h4>REAR DERAILLEUR</h4>

          <span style={{ fontSize: "1.2rem" }}>
            {" "}
            {rearderailleur && rearderailleur}
          </span>
        </div>
        <div className="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Front_Derail_2017_04.png"
            alt="Front Derailleur"
          ></img>
          <h4>FRONT DERAILLEUR</h4>
          <span style={{ fontSize: "1.2rem" }}>
            {" "}
            <span style={{ fontSize: "1.2rem" }}>
              {" "}
              {frontderailleur && frontderailleur}
            </span>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img
            alt="rims"
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Rims_2017_04.png"
          ></img>
          <h4>RIMS</h4>

          <span style={{ fontSize: "1.2rem" }}> {rim && rim}</span>
        </div>
        <div className="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Tyre_2017_04.png "
            alt="Tyre"
          ></img>
          <h4>TYRES</h4>
          <span style={{ fontSize: "1.2rem" }}> {tire && tire}</span>
        </div>
        <div className="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Brake_Set_2017_04.png"
            alt="Brake"
          ></img>
          <h4>BRAKES</h4>

          <span style={{ fontSize: "1.2rem" }}> {brakes && brakes}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img
            alt="handlebar"
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Handle_Bar_2017_04.png"
          ></img>
          <h4>HANDLEBAR</h4>

          <span style={{ fontSize: "1.2rem" }}> {handlebar && handlebar}</span>
        </div>
        <div className="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Frame_Size_2017_04.png"
            alt="Frame"
          ></img>
          <h4>SIZES</h4>
          {size && size}
        </div>
        <div className="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Color_2017_04.png"
            alt="Color"
          ></img>
          <h4>COLOURS</h4>
          <span style={{ fontSize: "1.2rem" }}> {color && color}</span>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
