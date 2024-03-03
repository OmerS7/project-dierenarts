import React, { useState } from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

const MainForm = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleButtonSelect = (selectedButton) => {
    setSelectedButtons((prevSelected) => [...prevSelected, selectedButton]);
  };

  const handleDropdownSelect = (selectedOption) => {
    setSelectedDropdownOption(selectedOption);
  };

  const handleDateSelect = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <>
      <Card1 onSelectButton={handleButtonSelect} />
      <Card2 onSelectDropdown={handleDropdownSelect} />
      <Card3 onSelectDate={handleDateSelect} />

      {(selectedButtons.length > 0 || selectedDropdownOption || selectedDate) && (
        <Card4
          selectedButtons={selectedButtons}
          selectedDropdownOption={selectedDropdownOption}
          selectedDate={selectedDate}
        />
      )}
    </>
  );
};

export default MainForm;