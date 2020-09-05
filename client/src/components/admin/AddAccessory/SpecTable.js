import React, { useState } from "react";
import "./css/SpecTable.css";

const SpecTable = ({ specs, setSpecs }) => {
  const [Specification, setSpecification] = useState("");
  const [Value, setValue] = useState("");
  // useEffect(() => {
  //   console.log("something changed in the specs");
  // }, [specs]);
  console.log(specs);
  const handleAdd = (e) => {
    e.preventDefault();
    setSpecs([...specs, { Specification, Value }]);
    console.log(specs);
  };
  return (
    <div className="spec-table-container">
      <div>
        <h2>Specifications</h2>
      </div>
      <table class="table table-hover">
        <tbody>
          {specs &&
            specs.map((spec) => {
              return (
                <tr>
                  <td>{spec.Specification}</td>
                  <td className="spec-value">{spec.Value}</td>
                </tr>
              );
            })}
          <tr>
            <td>
              <input
                onChange={(e) => {
                  setSpecification(e.target.value);
                }}
                type="text"
                name=""
                id=""
              />
            </td>
            <td>
              <textarea
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type="text"
                name=""
                id=""
              />
            </td>
            <td>
              {" "}
              <button
                type="button"
                onClick={handleAdd}
                style={{ borderRadius: "10px" }}
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
