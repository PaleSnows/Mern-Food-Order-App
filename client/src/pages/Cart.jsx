import React from "react";

const Cart = () => {
  return (
    <div className="flex flow-row bg-black text-slate-200 justify-between h-screen px-20 py-10">
      {/* left part */}
      <div className="">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      </div>

      {/* right part */}
      <div className="flex flex-col gap-8">
        <div className="">
          <h1 className="text-xl font-semibold">Dummy name</h1>
          <h1>address</h1>
        </div>

        <div className="">
          <h1 className="text-xl font-semibold pb-3">Payment Method</h1>
          <select className="text-slate-600 px-8 py-3 rounded-xl" name="" id="">
            <option value="">Credit Card</option>
            <option value="">Paypal</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-semibold">
            Do you have any discount code?
          </h1>
          <p className="font-semibold">
            Only one discount code per order can be applied
          </p>
          <div className="flex flex-row">
            <input
              className="px-8 py-3 "
              type="text"
              placeholder="Your code here"
            />
            <button className="px-8 py-3 text-slate-700  bg-slate-300">
              Apply
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Subtotal(3 items)</h1>
            <h1>$50</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Shipping Costs</h1>
            <h1>FREE!</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Discount</h1>
            <h1>-</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-lg font-semibold">Total(incl. VAT)</h1>
            <h1>$50</h1>
          </div>
          <button className="bg-slate-300 text-slate-700 px-8 py-3">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
