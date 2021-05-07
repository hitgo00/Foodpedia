import React from "react";
// import Card from "../card"
import { Container, Grid, Typography } from "@material-ui/core";
import "../home.css";
import Card from "@material-ui/core/Card";

const Product = function Product() {
  return (
    <div id="products">
      <h1>Services</h1>

      <Container
        style={{ marginLeft: "auto", width: "100%", marginRight: "auto" }}
      >
        <Grid container alignItems="center" justify="center" spacing={3}>
          <Grid item>
            <Card
              style={{
                width: "14rem",
                height: "14rem",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              <b> Text search </b>{" "}
              <Typography>
                Users can search for food items data using keywords!
              </Typography>
            </Card>
          </Grid>
          <Grid item>
          <Card
              style={{
                width: "14rem",
                height: "14rem",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              <b> Food Journal</b>{" "}
              <Typography>
                Users can maintain a joirnal of food items! 
              </Typography>
            </Card>
          </Grid>
          <Grid item>
          <Card
              style={{
                width: "14rem",
                height: "14rem",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              <b> Image search </b>{" "}
              <Typography>
                Users can search for food items data using picture!
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
