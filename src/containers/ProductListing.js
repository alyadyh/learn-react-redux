import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts, fetchProducts } from './../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // -- redux axios: --
    // const fetchProducts = async () => {
    //     const response = await axios
    //       .get("https://fakestoreapi.com/products")
    //       .catch((err) => {
    //         console.log("Err: ", err);
    //       });
    //     dispatch(setProducts(response.data));
    // };
    
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
    
    console.log("Products :", products);
    return (
        <div className="ui grid container">
          <ProductComponent />
        </div>
    );
};

export default ProductListing;