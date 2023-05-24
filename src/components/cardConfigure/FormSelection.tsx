import React from "react";
import "./FormSelection.css";

interface FormSelectionProps {
  labelText:string;
  name: string;
  value: string;
  selectOptions: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}


export const FormSelection: React.FC<FormSelectionProps> = ({labelText, name, value, selectOptions, onChange}) => {
  
  const mappedOptions = selectOptions.map((option:string) => {
    return <option key={option} value={option}>{option}</option>
  });

  return (
    <div className="form-selection-div">
      <label>
      
        <h5 >{labelText}</h5>
        <select className="input-text width" 
          name={name}
          value={value}
          onChange={onChange}
        >
        {mappedOptions}
        </select>
      </label>
    </div>
  )
}