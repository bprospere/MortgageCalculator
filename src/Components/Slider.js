import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const SliderComponent = ({
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps
  }) => {
    return (
      // Title and amount of the slider
      <Stack my={5}>
        <Stack direction="row" gap={2.5}>
            <Typography variant="h5">{label}: </Typography>
            <Typography variant="h4">
                {unit} {amount}
            </Typography>
        </Stack>

        <Slider
            min={min}
            max={max}
            defaultValue={defaultValue}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={onChange}
            value={value}
            marks
            step={steps}
        />
      </Stack>
    )
  }
  
  export default SliderComponent