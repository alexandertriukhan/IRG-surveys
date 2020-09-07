import React, { useState } from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

const CheckboxInput = ({ answers, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
    onChange(answers.indexOf(e.target.value));
  };

  return (
    <FormControl>
      <FormGroup>
        {answers.map((answer, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox color="primary" onChange={handleChange} value={answer} />}
            label={answer}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxInput;
