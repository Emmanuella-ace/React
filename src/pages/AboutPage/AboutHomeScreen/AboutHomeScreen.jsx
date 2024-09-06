import React from "react";
import Description from "../DescriptionPage/Description";
// import ProductPage from "../ProductPage/Product";
import RelatedProductsPage from "../RelatedProductsPage/RelatedProductsPage";
import Product from "../ProductPage/Product";

const AboutHomeScreen = () => {
    return (
        <div>
            <Description/>
            <Product />
            <RelatedProductsPage />
        </div>
    )
}

export default AboutHomeScreen;