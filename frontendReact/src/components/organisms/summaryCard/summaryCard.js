import React from 'react';
import PropTypes from 'prop-types';

const SummaryCard = ({ formData }) => {
  return (
    <div className="SummaryCard">
      <h2>Overzicht van ingevoerde gegevens:</h2>
      {/* Render de ingevoerde gegevens op basis van formData */}
      <p>Datum: {formData.selectedDate}</p>
      <p>Clinici: {formData.selectedClinician}</p>
      <p>Tijdstip: {formData.selectedTime}</p>
      {/* Voeg meer gegevens toe zoals nodig */}
    </div>
  );
};

SummaryCard.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default SummaryCard;