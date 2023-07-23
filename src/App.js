import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import SliderSelect from "./Components/Select";


function App() {

  const [data, setData] = useState({
    homeValue: 50000,
    downPayment: 50000 * 0.2,
    loanAmount: 50000 * 0.8,
    loanTerm: 3,
    interestRate: 5,
  })

  return (
    <div className="App">
    <Container maxWidth="xl" sx={{marginTop:8}}>


        <Grid item xs={12} md={6}>

        {/* Component to initialize the value of diferrents slides */}
        <SliderSelect data={data} setData={setData}/>

        </Grid>
    </Container>
  </div>
  );
}

export default App;
