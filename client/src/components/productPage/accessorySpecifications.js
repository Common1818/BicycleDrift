import React from "react";

const AccessorySpecifications = ({ accessorySpecifications }) => {
  var a = 0;
  return (
    <div className="spec-table-container">
      <div>
        <h2>Specifications</h2>
      </div>
      <table className="table table-hover">
        <tbody>
          {accessorySpecifications &&
            accessorySpecifications.map((spec) => {
              a++;
              return (
                <tr key={a}>
                  <td>{spec.Specification}</td>
                  <td className="spec-value">{spec.Value}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AccessorySpecifications;
