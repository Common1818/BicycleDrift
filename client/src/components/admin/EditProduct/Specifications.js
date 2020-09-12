/*eslint-disable */
import React from "react";
import { connect } from "react-redux";
// import "./css/Specifications.css";

const Specifications = ({
  setcolor,
  setsize,
  sethandlebar,
  setbrakes,
  settyres,
  setrims,
  setfrontDerailleur,
  setrearDerailleur,
  setchain,
  setshifter,
  setfork,
  setframe,
  specifications,
  color,
}) => {
  return (
    <div class="container mt-4 specification-container">
      <h3>SPECIFICATIONS</h3>
      <div class="row">
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Frame_2017_04.png"
            alt=""
          ></img>
          <div class="specs">
            <h4>Frame</h4>
            <select
              onChange={(e) => {
                setframe(e.target.value);
              }}
            >
              <option value="-">Select</option>
              <option value="Steel">Steel</option>
              <option value="1/2 Alloy">1/2 Alloy</option>
              <option value="Aluminum Alloy">Aluminum Alloy</option>
              <option value="Carbon Fiber">Carbon Fiber</option>
            </select>
            <br />
            <textarea
              onChange={(e) => {
                setframe(e.target.value);
              }}
              placeholder="Enter a Custom Value"
              cols="30"
              rows="1"
            ></textarea>
          </div>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Fork_2017_04.png"
            alt=""
          ></img>
          <div class="specs">
            <h4>Fork</h4>
            <select
              onChange={(e) => {
                setfork(e.target.value);
              }}
            >
              <option value="-">Select</option>
              <option value="Suntour Suspension With Lockout">
                Suntour Suspension With Lockout
              </option>
              <option value="Suntour Suspension Without Lockout">
                Suntour Suspension Without Lockout
              </option>
              <option value="Zoom Suspension With Lockout">
                Zoom Suspension With Lockout
              </option>
              <option value="Zoom Suspension Without Lockout">
                Zoom Suspension Withoutout Lockout
              </option>
              <option value="No Suspension">No Suspension</option>
              <option value="Suspension with Lockout">
                Suspension with Lockout
              </option>
              <option value="Suspension without Lockout">
                Suspension without Lockout
              </option>
            </select>
            <br />
            <textarea
              onChange={(e) => {
                setfork(e.target.value);
              }}
              placeholder="Enter a Custom Value"
              cols="30"
              rows="1"
            ></textarea>
          </div>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Shifter_2017_04.png"
            alt=""
          ></img>
          <div class="specs">
            <h4>Shifter</h4>
            <select
              onChange={(e) => {
                setshifter(e.target.value);
              }}
            >
              <option value="-">Select</option>
              <option value="Shimano 6 Speed">Shimano 6 Speed</option>
              <option value="Shimano 7 Speed">Shimano 7 Speed</option>
              <option value="Shimano 12 Speed">Shimano 12 Speed</option>
              <option value="Shimano 14 Speed">Shimano 14 Speed</option>
              <option value="Shimano 18 Speed">Shimano 18 Speed</option>
              <option value="Shimano 21 Speed">Shimano 21 Speed</option>
              <option value="Shimano 24 Speed">Shimano 24 Speed</option>
              <option value="No Rear Derailleur">No Shifter</option>
            </select>
            <br />
            <textarea
              onChange={(e) => {
                setshifter(e.target.value);
              }}
              cols="30"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Chain_2017_04.png"
            alt=""
          ></img>
          <h4>CHAIN</h4>
          <select
            onChange={(e) => {
              setchain(e.target.value);
            }}
          >
            <option value="-">Select</option>
            <option value="KMC Z7, 7-speed">KMC Z7, 7-speed</option>
          </select>
          <br />
          <textarea
            onChange={(e) => {
              setchain(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Rear_Derail_2017_04.png"
            alt=""
          ></img>
          <h4>REAR DERAILLEUR</h4>
          <select
            onChange={(e) => {
              setrearDerailleur(e.target.value);
            }}
          >
            <option value="-">Select</option>
            <option value="Shimano Tourney">Shimano Tourney</option>
            <option value="Shimano Acera">Shimano Acera</option>
            <option value="Shimano Altus">Shimano Altus</option>
            <option value="Shimano XTR">Shimano XTR</option>
            <option value="SRAM">SRAM</option>
            <option value="No Rear Derailleur">No Rear Derailleur</option>
          </select>
          <br />
          <textarea
            onChange={(e) => {
              setrearDerailleur(e.target.value);
            }}
            placeholder="Enter a Custom Value"
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Front_Derail_2017_04.png"
            alt=""
          ></img>
          <h4>FRONT DERAILLEUR</h4>
          <select
            onChange={(e) => {
              setfrontDerailleur(e.target.value);
            }}
          >
            <option value="-">Select</option>
            <option value="Shimano Tourney">Shimano Tourney</option>
            <option value="Shimano Acera">Shimano Acera</option>
            <option value="Shimano Altus">Shimano Altus</option>
            <option value="Shimano XTR">Shimano XTR</option>
            <option value="SRAM">SRAM</option>
            <option value="No Rear Derailleur">No Front Derailleur</option>
          </select>
          <br />
          <textarea
            onChange={(e) => {
              setfrontDerailleur(e.target.value);
            }}
            placeholder="Enter a Custom Value"
            cols="30"
            rows="1"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Rims_2017_04.png"></img>
          <h4>RIMS</h4>
          <select
            onChange={(e) => {
              setrims(e.target.value);
            }}
          >
            <option value="-">Select</option>
            <option value="Single Wall">Single Wall</option>
            <option value="Doublle Wall">Doublle Wall</option>
            <option value="Triple Wall">Triple Wall</option>
          </select>
          <br />
          <textarea
            onChange={(e) => {
              setrims(e.target.value);
            }}
            placeholder="Enter a Custom Value"
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Tyre_2017_04.png "
            alt=" "
          ></img>
          <h4>TYRES</h4>
          <select
            onChange={(e) => {
              settyres(e.target.value);
            }}
          >
            <option value="-">Select</option>
            <option value="Kenda Double Wall">Kenda Double Wall Tyre</option>
            <option value="Wanda Tyre">Wanda Tyre</option>
            <option value="MRF tyre">MRF tyre</option>
            <option value="Ralcon Tyre">Ralcon Tyre</option>
          </select>
          <br />
          <textarea
            onChange={(e) => {
              settyres(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Brake_Set_2017_04.png"
            alt=" "
          ></img>
          <h4>BRAKES</h4>
          <select
            onChange={(e) => {
              setbrakes(e.target.value);
            }}
          >
            <option value="-">Select</option>
            <option value="Dual Power Brakes">Dual Power Brakes</option>
            <option value="Dual Disc Brakes">Dual Disc Brakes</option>
            <option value="Front Disc Rear Power Brake">
              Front Disc Rear Power Brake
            </option>
            <option value="Shimano Hydraulic Discs">
              Shimano Hydraulic Discs
            </option>
          </select>
          <br />
          <textarea
            onChange={(e) => {
              setbrakes(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Handle_Bar_2017_04.png"></img>
          <h4>HANDLEBAR</h4>
          <select
            onChange={(e) => {
              sethandlebar(e.target.value);
            }}
          >
            <option value="-">Select</option>
            <option value="XMR handlebar">XMR handlebar</option>
          </select>
          <br />
          <textarea
            onChange={(e) => {
              sethandlebar(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Frame_Size_2017_04.png"
            alt=" "
          ></img>
          <h4>SIZE</h4>
          <select
            onChange={(e) => {
              setsize(e.target.value);
            }}
          >
            <option value="-">Select</option>
            <option value="12T">12T</option>
            <option value="14T">14T</option>
            <option value="16T">16T</option>
            <option value="20T">20T</option>
            <option value="24T">24T</option>
            <option value="26T">26T</option>
            <option value="27.5T">27.5T</option>
            <option value="28T">28T</option>
            <option value="29T">29T</option>
          </select>
          <br />
          <textarea
            onChange={(e) => {
              setsize(e.target.value);
            }}
            cols="30"
            rows="1"
          ></textarea>
        </div>
        <div class="col-sm-4 ">
          <img
            src="https://montra.in/wp-content/uploads/sites/17/2017/04/Montra_Web_Specs_Icon_Color_2017_04.png"
            alt=" "
          ></img>
          <h4>COLOURS</h4>
          <textarea
            onChange={(e) => {
              setcolor(e.target.value);
            }}
            defaultValue={color}
            disabled
            cols="30"
            rows="1"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  specifications: state.product.product.specifications,
});

export default connect(mapStateToProps)(Specifications);
