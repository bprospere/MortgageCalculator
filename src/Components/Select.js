import React from "react";
import SliderComponent from "./Slider";
import { Stack, Select, MenuItem,Typography } from "@mui/material";
import Result from "./Result";
import "../style.css";

const SliderSelect = ({ data, setData }) => {
  var bank_limit;

  const handleHomeValueChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      homeValue: value,
      downPayment: (0.2 * value).toFixed(0),
      loanAmount: (0.8 * value).toFixed(0),
    }));
  };

  // ... (rest of the functions)

  const handleUnitChange = (event) => {
    const selectedUnit = event.target.value;
    setData((prevData) => ({
      ...prevData,
      unit: selectedUnit,
    }));
  };
  const handleDownPaymentChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      downPayment: value,
      loanAmount: (prevData.homeValue - value).toFixed(0),
    }));
  };
  const handleInterestRateChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      interestRate: value,
    }));
  };
  const handleLoanAmountChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      loanAmount: value,
      downPayment: (prevData.homeValue - value).toFixed(0),
    }));
  };
  const handleLoanTermChange = (value) => {
    setData((prevData) => ({
      ...prevData,
      loanTerm: value,
    }));
  };
  // Displayed values with selected unit
  const displayedHomeValue = data.unit + data.homeValue;
  const displayedDownPayment = data.unit + data.downPayment;
  const displayedLoanAmount = data.unit + data.loanAmount;
  const displayedLoanTerm = data.loanTerm + " years";

  return (
    <div className = "card">
        <Typography variant="h4" textAlign="center" marginBottom={2}>Mortgage-calculator </Typography>

     
    
      <Stack direction="row" justifyContent="space-between">
        <SliderComponent
          onChange={handleHomeValueChange}
          defaultValue={data.homeValue}
          min={0}
          max={bank_limit}
          steps={100}
          amount={displayedHomeValue}
          textFieldSuffix={data.unit}
          label={`Purchase price (${data.unit})`}
          value={data.homeValue}
        />

        <SliderComponent
          onChange={handleDownPaymentChange}
          defaultValue={data.downPayment}
          min={0}
          max={data.homeValue}
          steps={100}
          amount={displayedDownPayment}
          textFieldSuffix={data.unit}
          label={`Down Payment (${data.unit})`}
          value={data.downPayment}
        />
          <SliderComponent
          onChange={handleInterestRateChange}
          defaultValue={data.interestRate}
          min={0}
          max={100}
          steps={0.5}
          unit="%"
          amount={data.interestRate}
          label="Interest Rate"
          value={data.interestRate}
        />
       
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <SliderComponent
          onChange={handleLoanAmountChange}
          defaultValue={data.loanAmount}
          min={0}
          max={data.homeValue}
          steps={100}
          amount={displayedLoanAmount}
          textFieldSuffix={data.unit}
          label={`Loan Amount (${data.unit})`}
          value={data.loanAmount}
        />

        <SliderComponent
          onChange={handleLoanTermChange}
          defaultValue={data.loanTerm}
          min={0}
          steps={1}
          unit="years"
          amount={displayedLoanTerm}
          label="Repayment time"
          value={data.loanTerm}
        />

        <div>
          <label htmlFor="unitSelect">Unit:</label>
          <Select
            id="unitSelect"
            value={data.unit}
            onChange={handleUnitChange}
            style={{ marginLeft: "8px" }}
          >
            <MenuItem value="$">USD</MenuItem>
            <MenuItem value="€">EUR</MenuItem>
            <MenuItem value="HTG">HTG</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
            <MenuItem value="CAD">CAD</MenuItem>
            <MenuItem value="AUD">AUD</MenuItem>
            {/* Add more currency options here */}
          </Select>
        </div>

        <Result data={data} />
      </Stack>
    </div>
  );
};

export default SliderSelect;
