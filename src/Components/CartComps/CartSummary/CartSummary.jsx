import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CartSummary.scss";

export default function CartSummary() {
    const [choice, setChoice] = useState('free');
    const handleChange = (e) => {
        setChoice(e.target.value);
    }

    const items = useSelector(state => state);
    let itemsSubtotal = 0;
    for (let i = 0; i < items.length; i++)
        itemsSubtotal += (items[i].price.slice(1) * items[i].amount);

    return (
        <div className="cart-summary">
            <div className="cart-summary_head">
                Cart Summary
            </div>
            <div className="cart-summary_choice">
                <div className="cart-summary_choice-item">
                    <div className="cart-summary_choice-left">
                        <input
                            type="radio"
                            value="free"
                            id="free"
                            name="choice"
                            className="cart-summary_choice-radio"
                            onChange={handleChange}
                        />
                        <label for="free">Free shipping</label>
                    </div>
                    <div className="cart-summary_choice-right">
                        $0.00
                    </div>
                </div>
                <div className="cart-summary_choice-item">
                    <div className="cart-summary_choice-left">
                        <input
                            type="radio"
                            value="express"
                            id="express"
                            name="choice"
                            className="cart-summary_choice-radio"
                            onChange={handleChange}
                        />
                        <label for="express">Express shipping</label>
                    </div>
                    <div className="cart-summary_choice-right">
                        +$15.00
                    </div>
                </div>
                <div className="cart-summary_choice-item">
                    <div className="cart-summary_choice-left">
                        <input
                            type="radio"
                            value="pick"
                            id="pick"
                            name="choice"
                            className="cart-summary_choice-radio"
                            onChange={handleChange}
                        />
                        <label for="pick">Pick up</label>
                    </div>
                    <div className="cart-summary_choice-right">
                        %21.00
                    </div>
                </div>
            </div>
            <div className="cart-summary_subtotal">
                <div className="cart-summary_subtotal-left">Subtotal</div>
                <div className="cart-summary_subtotal-right">{itemsSubtotal.toFixed(2)}</div>
            </div>
            <div className="cart-summary_total">
                <div className="cart-summary_total-left">Total</div>
                <div className="cart-summary_total-right">
                    {
                        (itemsSubtotal + (choice == 'express' ? 15 : choice == 'pick' ? itemsSubtotal*(0.21) : 0)).toFixed(2)
                    }
                </div>
            </div>
            <div className="cart-summary_button">Checkout</div>
        </div>
    );
}
