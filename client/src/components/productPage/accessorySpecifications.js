import React from "react";

const AccessorySpecifications = ({ accessorySpecifications }) => {
  return (
    <div className="spec-table-container">
      <div>
        <h2>Specifications</h2>
      </div>
      <table class="table table-hover">
        <tbody>
          {accessorySpecifications &&
            accessorySpecifications.map((spec) => {
              return (
                <tr>
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
