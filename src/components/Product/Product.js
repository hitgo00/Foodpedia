import React from 'react'
// import Card from "../card"
import {Container,Grid} from "@material-ui/core";
import Card from "../Card_home";
import '../home.css';

const Product = function Product() {
    return (
        <div id="products">
            <h1>Choose And Enjoy</h1>
            <p>Add your Text here</p>
            <Container style={{marginLeft:"190px"}}>
                <Grid container spacing={3}>
                    <Grid item>
                        <Card/>
                    </Grid>
                    <Grid item>
                        <Card/>
                    </Grid>
                    <Grid item >
                        <Card/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Product;