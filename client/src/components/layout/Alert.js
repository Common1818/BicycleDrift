import React from "react";
import "./css/alert.css";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  var a = 0;
  return (
    <>
      {alerts != null &&
        alerts.length > 0 &&
        alerts.map((alert) => {
          a++;
          return (
            <div key={a} className="container w-72">
              <ul className="ios-notifications">
                <li className="ios-notifications__item">
                  <div className="mb-1 flex justify-between text-xs">
                    <div>
                      <i className="fas fa-bicycle"></i>
                      <span>BicycleDrift</span>
                    </div>
                    <div>Now</div>
                  </div>

                  <div className="text-sm">{alert.msg}</div>
                  <div className="more mt-1 text-xs"></div>
                </li>
              </ul>
            </div>
          );
        })}
    </>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
