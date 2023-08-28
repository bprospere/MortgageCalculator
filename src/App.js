import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import SliderSelect from "./Components/Select";

function App() {
  const [data, setData] = useState({
    homeValue: undefined,
    downPayment: undefined,
    loanAmount: undefined,
    loanTerm: 0,
    interestRate: 0,
  });

  const handleSetData = (newData) => {
    // Prevent negative values for certain fields
    if (newData.homeValue < 0) newData.homeValue = 0;
    if (newData.downPayment < 0) newData.downPayment = 0;
    if (newData.loanAmount < 0) newData.loanAmount = 0;

    setData(newData);
  };

  return (
    <div className="App">
      <Container maxWidth="xl" sx={{ marginTop: 8 }}>
        <Grid item xs={12} md={6}>
          {/* Component to initialize the value of different slides */}
          <SliderSelect data={data} setData={handleSetData} />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
