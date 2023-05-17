import React, { useState } from 'react';

const MultipleSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  return (
    <div>
      <h2>Multiple Select Example</h2>
      <select multiple value={selectedOptions} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected options: {selectedOptions.join(', ')}</p>
    </div>
  );
};

export default MultipleSelect;
