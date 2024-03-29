import React from 'react';
import PropTypes from 'prop-types';
import ButtonBar from '../../molecules/ButtonBar/ButtonBar';
import Dropdown from '../../atoms/dropdowns/Dropdown';
import Text from '../../atoms/text/Text';
import ToggleButton from '../../molecules/ToggleButton/ToggleButton';
import './card2.style.scss';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Card2 = ({ buttonBarRow1, buttonBarRow2, buttonBarRow3, dropdownOptions, icon, selectedCustomerStatus, selectedNumberOfPets, selectedPetType, selectedAppointmentType }) => {
  return (
    <div className="Card2">
      <div className="row-1">
        <div className='text-row-1'>
          <Text content="Klant status*" size="28px" />
        </div>
        <ButtonBar buttons={buttonBarRow1} icon={icon} />
      </div>

      <div className="row-2">
        <div className='text-row-2'>
          <Text content="Aantal huisdieren*" size="20px" />
        </div>
        <ButtonBar buttons={buttonBarRow2} icon={icon} />
      </div>

      <div className="row-3">
        <div className='text-row-3'>
          <Text content="Huisdier*" size="20px" />
        </div>
        <div className='buttons-third-row'>
          <div className='first-button'>
            <ToggleButton />
          </div>
          <div className='button-bar'>
            <ButtonBar buttons={buttonBarRow3} icon={icon} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className='text-row-4'>
          <Text content="Type afspraak" size="20px" />
        </div>
        <Dropdown options={dropdownOptions} icon={faChevronUp} />
      </div>
    </div>
  );
};

Card2.propTypes = {
  buttonBarRow1: PropTypes.array.isRequired,
  buttonBarRow2: PropTypes.array.isRequired,
  buttonBarRow3: PropTypes.array.isRequired,
  dropdownOptions: PropTypes.array.isRequired,
  icon: PropTypes.object,
  selectedCustomerStatus: PropTypes.string,
  selectedNumberOfPets: PropTypes.string,
  selectedPetType: PropTypes.string,
  selectedAppointmentType: PropTypes.string,
};

export default Card2;