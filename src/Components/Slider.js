import React from "react";
import { Typography, TextField } from "@mui/material";
import { Stack } from "@mui/system";

const SliderComponent = ({
  min,
  max,
  label,
  unit,
  onChange,
  value,
}) => {
  const handleInputChange = (event) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <Stack my={5}>
      <Stack direction="row" gap={2.5}>
        <Typography variant="h5">{label}: </Typography>
      </Stack>

      <TextField
        type="number"
        value={value}
        onChange={handleInputChange}
        inputProps={{
          min: min,
          max: max,
          style: { textAlign: "right" },
        }}
        InputProps={{
          endAdornment: <Typography>{unit}</Typography>,
        }}
      />
    </Stack>
  );
};

export default SliderComponent;
