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

  const totalLoanDays = loanTerm * 365;
  const interestPerDay = interestRate / 100 / 365;
  const dailyPayment =
    (loanAmount *
      interestPerDay) /
    (1 - Math.pow(1 + interestPerDay, -totalLoanDays));

  const displayedMonthlyPayment = data.unit;
  let displayedPaymentType = " ";

  switch (data.timeUnit) {
    case 'days':
      displayedPaymentType = 'Daily Payment';
      break;
    case 'weeks':
      displayedPaymentType = 'Weekly Payment';
      break;
    case 'weekends':
      displayedPaymentType = 'Weekend Payment';
      break;
    case 'months':
      displayedPaymentType = 'Monthly Payment';
      break;
    case 'years':
      if (data.paymentType === "monthly") {
        displayedPaymentType = 'Monthly Payment';
      } else {
        displayedPaymentType = 'Yearly Payment';
      }
      break;
    default:
      displayedPaymentType = 'Payment';
  }

  const totalLoanWeeks = loanTerm;
  const interestPerWeek = interestRate / 100 / 52;
  const weeklyPayment =
    (loanAmount *
      interestPerWeek *
      (1 + interestPerWeek) ** totalLoanWeeks) /
    ((1 + interestPerWeek) ** totalLoanWeeks - 1);

  const totalWeekendPayments = Math.floor(loanTerm);

  const weekendPayment =
    (loanAmount *
      interestPerWeek *
      (1 + interestPerWeek) ** totalWeekendPayments) /
    ((1 + interestPerWeek) ** totalWeekendPayments - 1);

  const annualPayment = monthlyPayment * 12;

  let paymentResult = "";
  switch (data.timeUnit) {
    case 'days':
      paymentResult = dailyPayment.toFixed(2);
      break;
    case 'weeks':
      paymentResult = weeklyPayment.toFixed(2);
      break;
    case 'weekends':
      paymentResult = weekendPayment.toFixed(2);
      break;
    case 'months':
      paymentResult = monthlyPayment.toFixed(2);
      break;
    case 'years':
      if (data.paymentType === " Monthly Payment") {
        paymentResult = monthlyPayment.toFixed(2);
      } else {
        paymentResult = annualPayment.toFixed(2);
      }
      break;
    default:
      paymentResult = monthlyPayment.toFixed(2);
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
