import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './_card.style.scss';
import ButtonBar from '../../molecules/ButtonBar/ButtonBar';
import DropdownGroup from '../../molecules/DropdownGroup/DropdownGroup';
import Text from '../../atoms/text/Text';
import DateSelector from '../../molecules/DataSelector/DataSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, buttonBarData, dropdownGroupData, dateSelectorData, icon, updateFormData, formData }) => {
  const [localSelectedDate, setLocalSelectedDate] = useState('');
  const [localSelectedClinician, setLocalSelectedClinician] = useState('');
  const [localSelectedTime, setLocalSelectedTime] = useState('');

  const handleDateSelect = (selectedDate) => {
    setLocalSelectedDate(selectedDate);
    updateFormData({ selectedDate });
  };

  const handleClinicianSelect = (selectedClinician) => {
    setLocalSelectedClinician(selectedClinician);
    updateFormData({ selectedClinician });
  };

  const handleTimeSelect = (selectedTime) => {
    setLocalSelectedTime(selectedTime);
    updateFormData({ selectedTime });
  };

  useEffect(() => {
    console.log("formData after updating date:", formData);
  }, [formData.selectedDate]);

  useEffect(() => {
    console.log("formData after updating clinician:", formData);
  }, [formData.selectedClinician]);

  useEffect(() => {
    console.log("formData after updating time:", formData);
  }, [formData.selectedTime]);


  return (
    <div className="Card">
      <div className='first-row'>
        <div className='text-first-row'>
          <Text content="Kies een Datum" size="28px" />
          <div className='beschikbaarheid'>
            <div className='beschikbaar'>
              <Text content="Beschikbaar" size="12px" />
              <FontAwesomeIcon icon={faCircle} className="availability-icon-left" />
            </div>
            <div className='niet-beschikbaar'>
              <Text content="Niet beschikbaar" size="12px"/>
              <FontAwesomeIcon icon={faCircle} className="availability-icon-right" />
            </div>
          </div>
        </div>
        <div className='dataSelector'>
          <DateSelector {...dateSelectorData} icon={icon} onSelect={handleDateSelect} />
        </div>
      </div>

      <div className='second-row'>
        <div className='text-second-row'>
          <Text content="Clinici" size="28px" />
        </div>
        <ButtonBar buttons={buttonBarData.slice(0, 3)} icon={icon} onSelect={handleClinicianSelect} />
      </div>

      <div className='third-row'>
        <div className='dropdown-group'>
          <Text content="Tijdstip" size="28px" />
          <DropdownGroup {...dropdownGroupData} onSelect={handleTimeSelect} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  buttonBarData: PropTypes.array.isRequired,
  icon: PropTypes.object,
  updateFormData: PropTypes.func.isRequired,
};

export default Card;