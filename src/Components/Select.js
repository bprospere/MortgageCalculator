import React from "react";
import SliderComponent from "./Slider";
import { Stack, Typography } from "@mui/material";
import Result from "./Result";
import "../style.css";


const SliderSelect = ({ data, setData }) => {
    const bank_limit = 100000;
    return (
      <div className = "card">
        <Typography variant="h4" textAlign="center" marginBottom={2}>Mortgage-calculator </Typography>

        <Stack direction="row" justifyContent="space-between">

          {/* Loan value component */}
          <SliderComponent
            onChange={(e, value) => {
              setData({
                ...data,
                homeValue: value.toFixed(0),
                downPayment: (0.2 * value).toFixed(0),
                loanAmount: (0.8 * value).toFixed(0),
              });
            }}
            defaultValue={data.homeValue}
            min={1000}
            max={bank_limit}
            steps={100}
            unit="$"
            amount={data.homeValue}
            label="Purchase price"
            value={data.homeValue}
          />

          {/* Down payment*/}
          <SliderComponent
              onChange={(e, value) =>
              setData({
                  ...data,
                  downPayment: value.toFixed(0),
                  loanAmount: (data.homeValue - value).toFixed(0),
              })
              }
              defaultValue={data.downPayment}
              min={1000}
              max={data.homeValue}
              steps={100}
              unit="$"
              amount={data.downPayment}
              label="Down Payment"
              value={data.downPayment}
          />

          {/* Interest rate component */}
          <SliderComponent
              onChange={(e, value) =>
              setData({
                  ...data,
                  interestRate: value,
              })
              }
              defaultValue={data.interestRate}
              min={2}
              max={25}
              steps={0.5}
              unit="%"
              amount={data.interestRate}
              label="Interest Rate"
              value={data.interestRate}
          />
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          {/* Loan amount value component */}
          <SliderComponent
              onChange={(e, value) =>
              setData({
                  ...data,
                  loanAmount: value.toFixed(0),
                  downPayment: (data.homeValue - value).toFixed(0),
              })
              }
              defaultValue={data.loanAmount}
              min={5000}
              max={data.homeValue}
              steps={100}
              unit="$"
              amount={data.loanAmount}
              label="Loan Amount"
              value={data.loanAmount}
          />

          {/* Component to select the tenure of the loan. */}
          <SliderComponent
              onChange={(e, value) =>
              setData({
                  ...data,
                  loanTerm: value.toFixed(0),
              })
              }
              defaultValue={data.loanTerm}
              min={1}
              max={10}
              steps={1}
              unit="years"
              amount={data.loanTerm}
              label="Repayment time"
              value={data.loanTerm}
          />

          <Result data={data}/>

        </Stack>
      </div>
    );
  };

export default SliderSelect;