import React from "react";
import { v4 as uuidv4 } from "uuid";

import "../../css/orderSummary.css";

//takes the order object as a prop (props.order)
//takes the order total as a prop (props.total)

const OrderSummary = (props) => {

    let order = props.order;

    return (
        <div className="order-review">
            <div className="order-pizza">
                <h3>Crust Type</h3>
                <div className="order-item" key={uuidv4()}>
                    <div className="left">
                        <p>{order.crustType.type}</p>
                    </div>
                </div>
                <h3>Crust Size</h3>
                <div className="order-item" key={uuidv4()}>
                    <div className="left">
                        <p>{order.crust.size}</p>
                    </div>
                    <div className="right">
                        <p>${(parseFloat(order.crust.price) * parseFloat(order.crustType.priceMultiplier)).toFixed(2)}</p>
                    </div>
                </div>
                <h3>Cheese</h3>    
                <div className="order-item" key={uuidv4()}>
                    <div className="left">
                        <p>{order.cheese.amount}</p>
                    </div>
                    <div className="right">
                        <p>${parseFloat(order.cheese.price).toFixed(2)}</p>
                    </div>
                </div> 
                <h3>Sauce</h3>   
                <div className="order-item" key={uuidv4()}>
                    <div className="left">
                        <p>{order.sauce.amount}</p>
                    </div>
                    <div className="right">
                        <p>${parseFloat(order.sauce.price).toFixed(2)}</p>
                    </div>
                </div>    
            </div>
            <div className="order-toppings">
                <h3>Toppings</h3>
                {Object.keys(order.toppings).length === 0 ? (
                    <div className="none">
                        no toppings
                    </div>
                ) : ("")}
                {order.toppings.map(topping => {
                    return (
                        <div className="order-item" key={uuidv4()}>
                            <div className="left">
                                <p>{topping.name}</p>
                            </div>
                            <div className="right">
                                <p>${parseFloat((topping.price * order.crust.toppingMultiplier)).toFixed(2)}</p>
                            </div>
                        </div>    
                    )
                })}
            </div>
            <div className="order-beverages">
                <h3>Beverages</h3>
                {Object.keys(order.beverages).length === 0 ? (
                    <div className="none">
                        no beverages
                    </div>
                ) : ("")}
                {order.beverages.map(beverage => {
                    return (
                        <div className="order-item" key={uuidv4()}>
                            <div className="left">
                                <p>{beverage.name}</p>
                            </div>
                            <div className="right">
                                <p>${parseFloat(beverage.price).toFixed(2)}</p>
                            </div>
                        </div>    
                    )
                })}
                
            </div>
            <div className="order-address">
                <h3>Delivery Info</h3>
                <p className="delivery-label">Email</p>
                <p className="delivery-field">
                    {order.email}
                </p>
                <p className="delivery-label">Phone Number</p>
                <p className="delivery-field">
                    ({order.phoneNumber.substring(0, 3)}) {order.phoneNumber.substring(3, 6)}-
                    {order.phoneNumber.substring(6, 10)}
                </p>
                <p className="delivery-label">Deliver to</p>
                <p className="delivery-field">
                    {order.streetAddress} <br></br> {order.city}, {order.state} {order.zipcode}
                </p>
            </div>
            <div className="order-total">
                <h1>Total</h1>
                <p>${props.total}</p>
            </div>        
        </div>
    )
}

export default OrderSummary;