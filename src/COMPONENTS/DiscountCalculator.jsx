import React, { useState } from "react";

function DiscountCalculator() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const calculateDiscount = () => {
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    setDiscountedPrice(finalPrice);
  };

  return (
    <>
      <div>
        <div className="container align-items-center mt-5">
          <div className="calculator justify-content-center mx-auto">
            <div className="col-12">
              <h1 className="text-primary mb-3">CALCULATE DISCOUNT</h1>

              <div className="mb-3">
                <label className="form-label">Original Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Discount Percentage (%)</label>
                <input
                  type="number"
                  className="form-control"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Enter discount percentage"
                />
              </div>

              <div className="d-grid justify-content-center">
                <button className="btn btn-primary" onClick={calculateDiscount}>
                  Submit
                </button>
              </div>

              {discountedPrice !== null && (
                <div className="mt-3 text-center">
                  <h4 className="" style={{color:"#5e2a28"}}>Discounted Price: ${discountedPrice.toFixed(2)}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscountCalculator;
