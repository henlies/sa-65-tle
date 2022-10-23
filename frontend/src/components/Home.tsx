import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";




function Home() {
  return (
    < div >
      <p>HOME</p>
      <Grid item xs={6}>
        <Button
          component={RouterLink}
          to="/Login"
          variant="contained"
        >
          Admin
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Button
          component={RouterLink}
          to="/DoctorShow"
          variant="contained"
        >
          Doctor
        </Button>
      </Grid>
    </div >
  );
}

export default Home;