import React, { useState, useContext } from 'react';
import Details from '../Details/Details';
import {ProductContext} from "../ContextAPI/ProductContext";

const Form = () => {
    const { addProduct } = useContext(ProductContext);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        variant: "",
        totalAmount: "",
        grandTotal: "",
        imgUrl: "",
        quantity: "",
        sellingDate: "",
        tinNumber: "",
        taxAmount: ""
    });

    const handleSubmit = () => {
        addProduct(product);
        setProduct({
            name: "",
            price: "",
            variant: "",
            totalAmount: "",
            grandTotal: "",
            imgUrl: "",
            quantity: "",
            sellingDate: "",
            tinNumber: "",
            taxAmount: ""
        });
    };

    return (
        <div>
            <div className="mt-4 flex justify-center">
                <h1 className="font-bold text-2xl underline">Product Report Generator</h1>
            </div>
            <div className="mt-6 mr-11 flex justify-end">
                <button className="btn btn-accent btn-sm">Show Report</button>
                <button className="ml-4 btn-primary btn btn-sm">Add Product</button>
            </div>
            <div className="mt-6 flex justify-center">
                <h1 className="font-bold text-xl underline">Product Details</h1>
            </div>
            <div className="mt-6 flex justify-center">
                <Details product={product} setProduct={setProduct} />
            </div>
            <div className="my-6 flex justify-center">
                <button className="btn btn-success btn-sm" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Form;
