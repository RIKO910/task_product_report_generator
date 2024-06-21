import React, {useState} from 'react';

const Details = ({ product, setProduct }) => {
    const handleChange = (type, value) => {
        setProduct(prevProduct => ({ ...prevProduct, [type]: value }));
    };
    const [showTIN, setShowTIN] = useState(false);
    return (
        <div>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Product Name</span>
                        </div>
                        <input
                            type="text"
                            value={product.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Write your product name"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input
                            type="text"
                            value={product.price}
                            onChange={(e) => handleChange('price', e.target.value)}
                            placeholder="Write your product price eg. 10.36"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Variant</span>
                        </div>
                        <select
                            value={product.variant}
                            onChange={(e) => handleChange('variant', e.target.value)}
                            className="select select-bordered w-full max-w-xs"
                        >
                            <option disabled selected>Select your variant</option>
                            <option>Large Size</option>
                            <option>Small Size</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Total Amount</span>
                        </div>
                        <input
                            type="text"
                            value={product.totalAmount}
                            onChange={(e) => handleChange('totalAmount', e.target.value)}
                            placeholder="500"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Grand Total</span>
                        </div>
                        <input
                            type="text"
                            value={product.grandTotal}
                            onChange={(e) => handleChange('grandTotal', e.target.value)}
                            placeholder="470"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                </div>
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Product Img Url</span>
                        </div>
                        <input
                            type="text"
                            value={product.imgUrl}
                            onChange={(e) => handleChange('imgUrl', e.target.value)}
                            placeholder="Write your product image url"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Quantity</span>
                        </div>
                        <input
                            type="text"
                            value={product.quantity}
                            onChange={(e) => handleChange('quantity', e.target.value)}
                            placeholder="How much? Eg. 120"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Selling Date(Select Date)</span>
                        </div>
                        <input
                            type="datetime-local"
                            value={product.sellingDate}
                            onChange={(e) => handleChange('sellingDate', e.target.value)}
                            placeholder="05/06/2024"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">TIN number?</span>
                            <input
                                type="checkbox"
                                checked={showTIN}
                                onChange={() => setShowTIN(!showTIN)}
                                className="checkbox"
                            />
                        </label>
                    </div>
                    {showTIN && (
                        <>
                            <label className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    value={product.tinNumber}
                                    onChange={(e) => handleChange('tinNumber', e.target.value)}
                                    placeholder="Write TIN number"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Tax amount</span>
                                </div>
                                <input
                                    type="text"
                                    value={product.taxAmount}
                                    onChange={(e) => handleChange('taxAmount', e.target.value)}
                                    placeholder="30"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;
