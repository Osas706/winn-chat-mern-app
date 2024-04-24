import React from "react";

const GenderCheck = ({onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selceted" : ""}`}>
          <span className="label-text">Male</span>
          <input 
            type="checkbox" 
            className="checkbox border-slate-900" 
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selceted" : ""}`}>
          <span className="label-text">Female</span>
          <input 
            type="checkbox" 
            className="checkbox border-slate-900" 
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
