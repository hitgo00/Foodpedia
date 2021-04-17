import React from 'react'
import Card from "../components/card";
import {Container,Grid} from "@material-ui/core";

import './home.css';

const Product = function Product() {
    return (
        <div id="products">
            <h1>Choose And Enjoy</h1>
            <p>Add your Text here</p>
            <Container>
                <Grid justifyContent="left" alignItems="center" container>
                    <Grid item>
                        <Card/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Product;