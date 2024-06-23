import React, { useContext } from 'react';
import {ProductContext} from "../ContextAPI/ProductContext";

const View = () => {
    const { productList } = useContext(ProductContext);

    const handleDownloadCSV = () => {
        const headers = [
            'Name',
            'Image',
            'Price',
            'Quantity',
            'Total',
            'Grand Total',
            'Variant',
            'Selling Date',
            'TIN',
            'Tax Amount'
        ];

        const csvRows = [
            headers.join(','), // header row first
            ...productList.map(product => [
                product.name,
                product.imgUrl,
                product.price,
                product.quantity,
                product.totalAmount,
                product.grandTotal,
                product.variant,
                product.sellingDate,
                product.tinNumber,
                product.taxAmount
            ].join(','))
        ];

        const csvString = csvRows.join('\n');

        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.href = url;
        link.setAttribute('download', 'products.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const totalSum = productList.reduce((sum, product) => {
        return sum + (parseFloat(product.totalAmount) || 0);
    }, 0);
    const grandTotal = productList.reduce((sum, product) => {
        return sum + (parseFloat(product.grandTotal) || 0);
    }, 0);

    const taxTotal = productList.reduce((sum, product) => {
        return sum + (parseFloat(product.taxAmount) || 0);
    }, 0);

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Grand Total</th>
                        <th>variant</th>
                        <th>Selling date</th>
                        <th>TIN</th>
                        <th>Tax amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productList.map((product, index) => (
                        <tr key={index}>
                            <th>{index}</th>
                            <td>{product.name}</td>
                            <td>{product.imgUrl}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.totalAmount}</td>
                            <td>{product.grandTotal}</td>
                            <td>{product.variant}</td>
                            <td>{product.sellingDate}</td>
                            <td>{product.tinNumber}</td>
                            <td>{product.taxAmount}</td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total =</td>
                        <td >{totalSum.toFixed(2)}</td>
                        <td >{grandTotal.toFixed(2)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td >{taxTotal.toFixed(2)}</td>

                    </tr>
                    </tfoot>
                </table>
            </div>
            <div className="flex justify-center">
                <button className="btn btn-active btn-accent" onClick={handleDownloadCSV}>Download as CSV file</button>
            </div>

        </div>
    );
};

export default View;
