import React from "react";
import { Stack, Typography } from "@mui/material";

const Result = ({ data }) => {
  const { loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  
    const dailyPayment = monthlyPayment / (365 / 12);

    

  const displayedMonthlyPayment = data.unit;
  let displayedPaymentType = " ";

  switch (data.timeUnit) {
    case 'days':
      displayedPaymentType = 'Daily Payment';
      break;
    case 'weeks':
      displayedPaymentType = 'Weekly Payment';
      break;
  
    case 'months':
      displayedPaymentType = 'Monthly Payment';
      break;
    case 'years':
      displayedPaymentType = 'Yearly Payment';
    
      
      break;
    default:
      displayedPaymentType = 'Payment';
  }

  
  const weeklyPayment = monthlyPayment / (52 / 12);

  const annualPayment = monthlyPayment * 12;

  let paymentResult = "";
  switch (data.timeUnit) {
    case 'days':
      paymentResult = dailyPayment.toFixed(3);
      break;
    case 'weeks':
      paymentResult = weeklyPayment.toFixed(3);
      break;
    
    case 'months':
      paymentResult = monthlyPayment.toFixed(3);
      break;
    case 'years':
     
        paymentResult = annualPayment.toFixed(3);
      
      break;
    default:
      paymentResult = monthlyPayment.toFixed(3);
  }

  return (
    <Stack my={1.4}>
      <Typography textAlign="center" variant="h5">
        {` ${displayedPaymentType} ${displayedMonthlyPayment} `}
      </Typography>
      <Typography textAlign="center" variant="h4">
        {paymentResult}
      </Typography>
    </Stack>
  );
};

export default Result;
