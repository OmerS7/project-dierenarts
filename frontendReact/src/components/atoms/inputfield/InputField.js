import React from 'react';
import PropTypes from 'prop-types';
import './_inputField.style.scss';

const Input = ({ type, placeholder, value, onChange }) => {
  // Voeg de klasse toe als de placeholder aanwezig is
  const inputClasses = `input-field ${placeholder ? 'input-field-with-placeholder' : ''}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClasses}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;