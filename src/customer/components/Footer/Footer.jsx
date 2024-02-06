import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Company
            </Typography>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              About Us
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              press
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              solutions
            </Typography>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Marketing
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Analytics
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Commerce
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Insights
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Documentation
            </Typography>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Guldes
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              API Status
            </Button>
          </div>

          
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div>
            <Typography className="pb-5" variant="h6">
              Legal
            </Typography>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Claim
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Privacy
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Terms
            </Button>
          </div>

          </Grid>

        <Grid className = 'pt-20' item xs={12}>
          <Typography variant="body2" component='p' align="center" className="text-center">
            &copy; 2024 All rights reserved
          </Typography>

          <Typography variant="body2" component='p' align="center" className="text-center">
            Made with love by Me.
          </Typography>
        </Grid>
      </Grid>

      
    </div>
  );
};
export default Footer;
