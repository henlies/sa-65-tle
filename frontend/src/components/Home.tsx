import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";




function Home() {
    return (
        < div >
            <p>HOME</p>
            <Grid item xs={12}>
              <Button
                component={RouterLink}
                to="/DoctorShow"
                variant="contained"
              >
                Back
              </Button>
              </Grid>
        </div >
    );
}

export default Home;