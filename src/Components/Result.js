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

  
    
 return (
    <Stack my={1.4}>
      <Typography textAlign="center" variant="h5">
        {` Monthly Payment ($) `}
      </Typography>
      <Typography textAlign="center" variant="h4">
        {monthlyPayment.toFixed(2)};
      </Typography>
    </Stack>
  );
};

export default Result;
