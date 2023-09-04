import React , { useState } from "react";
import SliderComponent from "./Slider";
import { Stack, Select, MenuItem,Typography, Dialog,DialogActions, DialogContent,DialogContentText,DialogTitle,
 Button,} from "@mui/material";
import Result from "./Result";
import "../style.css";

const SliderSelect = ({ data, setData}) => {
  var bank_limit;

  const handleHomeValueChange = (value) => {
    setData((prevData) => {
      let downPayment = prevData.downPayment || 0;
      let loanAmount = (value - downPayment).toFixed(0);
  
      return {
        ...prevData,
        homeValue: value,
        loanAmount: loanAmount,
      };
    });
  }
  
  
  const handlePurchaseTypeChange = (event) => {
    const purchaseTypeSelect = event.target.value;
    setData((prevData) => ({
      ...prevData,
      purchaseType: purchaseTypeSelect,
    }));
  };
  


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
  const handleTimeUnitChange = (event) => {
    const selectedTimeUnit = event.target.value;
    setData((prevData) => ({
      ...prevData,
      timeUnit: selectedTimeUnit,
    }));
    
  };
  
   

  
  
  
  
  // Displayed values with selected unit
  const displayedHomeValue = data.unit + data.homeValue;
  const displayedDownPayment = data.unit + data.downPayment;
  const displayedLoanAmount = data.unit + data.loanAmount;
  
  const displayPurchaseType= data.purchaseType;
 

 

const [openDialog, setOpenDialog] = useState(true);

const handleCloseDialog = () => {
  setOpenDialog(false);
};


  return (
    <div className = "card">
        <Typography variant="h4" textAlign="center" marginBottom={2}>Mortgage-calculator </Typography>

     
      <Stack direction="row" justifyContent="space-between">

      <div>
          <label htmlFor="purchaseTypeSelect">Select Purchase Type:</label>
          <Select
            id="purchaseTypeSelect"
            value={data.purchaseType}
            onChange={handlePurchaseTypeChange}
            style={{ marginLeft: "2px" }}
          >
            <MenuItem value="Purchase price">purchase</MenuItem>
            <MenuItem value="Business">business</MenuItem>
          </Select>
        </div>
       

      <div>
          <label htmlFor="unitSelect">Unit:</label>
          <Select
            id="unitSelect"
            value={data.unit}
            onChange={handleUnitChange}
            style={{ marginLeft: "2px" }}
          >
            <MenuItem value="$">USD</MenuItem>
            <MenuItem value="€">EUR</MenuItem>
            <MenuItem value="HTG">HTG</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
            <MenuItem value="CAD">CAD</MenuItem>
            <MenuItem value="AUD">AUD</MenuItem>
           
          </Select>
        </div>
        <div >
        <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Choose Units</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please choose a currency unit, a time unit, and select whether it's for a Purchase Price or Business.
          Ensure you do not choose negative values.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      
    </div>
       <div>
          <label htmlFor="timeUnitSelect">Time Unit:</label>
          <Select
            id="timeUnitSelect"
            value={data.timeUnit}
            onChange={handleTimeUnitChange}
            style={{ marginLeft: "2px" }}
          >
            <MenuItem value="days">Days</MenuItem>
            <MenuItem value="weeks">Weeks</MenuItem>
            <MenuItem value="months">Months</MenuItem>
            <MenuItem value="years">Years</MenuItem>
          </Select>
         
    </div>
      
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <SliderComponent
          onChange={handleHomeValueChange}
          defaultValue={data.homeValue}
          min={0}
          max={bank_limit}
          steps={100}
          amount={displayedHomeValue}
          textFieldSuffix={data.unit}
          label={`${displayPurchaseType} (${data.unit})`}
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
          amount={data.interestRate}
          label="Interest Rate (%)"
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
          amount={data.loanTerm}
          label="Repayment time (years)"
          value={data.loanTerm}
        />


        <Result data={data} />

      </Stack>
    </div>
  );
};
export default SliderSelect;
