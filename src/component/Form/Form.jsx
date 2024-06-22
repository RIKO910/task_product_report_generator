import React, { useState, useContext } from 'react';
import Details from '../Details/Details';
import { ProductContext } from "../ContextAPI/ProductContext";
import View from "../View/View";

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

    const [showReport, setShowReport] = useState(false);
    const [showDetails, setShowDetails] = useState(true);

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

    const handleShowReport = () => {
        setShowReport(true);
        setShowDetails(false);
    };

    const handleAddProduct = () => {
        setShowReport(false);
        setShowDetails(true);
    };

    return (
        <div>
            <div className="mt-4 flex justify-center">
                <h1 className="font-bold text-2xl underline">Product Report Generator</h1>
            </div>

            <div className="mt-6 mr-11 flex justify-end">
                <button
                    className="ml-4 btn-primary btn btn-sm"
                    onClick={handleShowReport}
                >
                    Show Report
                </button>
                <button
                    className="ml-4 btn-primary btn btn-sm"
                    onClick={handleAddProduct}
                >
                    Add Product
                </button>
            </div>
            {showDetails && (
                <>
                    <div className="mt-6 flex justify-center">
                        <Details product={product} setProduct={setProduct} />
                    </div>
                    <div className="my-6 flex justify-center">
                        <button className="btn btn-success btn-sm" onClick={handleSubmit}>Submit</button>
                    </div>
                </>
            )}
            {showReport && <View />} {/* Conditionally render <View /> */}
        </div>
    );
};

export default Form;
