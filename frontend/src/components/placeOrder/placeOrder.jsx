/*
    NOTE: This "placeOrder" component is a first draft. For this project, I was more
    concerned with the backend. If I were to re-do this, I would break this page up
    into several smaller components.
*/
import React, { useState, useContext } from "react";
import { PizzaContext } from "../../contexts/pizzaContext";
import { withRouter } from "react-router-dom";
import {v4 as uuidv4} from "uuid";

import OrderSummary from "../orderSummary/orderSummary";

import "../../css/placeOrder.css";


const PlaceOrder = (props) => {
    
    const [ order, setOrder ] = useState({
        email: "",
        phoneNumber: "",
        streetAddress: "",
        city: "",
        state: "AL",
        zipcode: "",
        crustType: {},
        crust: {},
        sauce: {},
        cheese: {},
        toppings: [],
        beverages: []
    });

    const { pizza } = useContext(PizzaContext);

    const [ validOrder, setValidOrder ] = useState(true);
    const [ total, setTotal ] = useState(0);
    const [ errors, setErrors ] = useState([]);
    const [ orderConfirm, setOrderConfirm ] = useState(false);


    //validate order
    const validateOrder = () => {
        let errors = [];

        if(order.email.length === 0) {
            errors.push("Please enter your email address.");
        }
        if(!order.email.includes("@")) {
            errors.push("Enter a valid email. Must contain @ symbol.");
        }
        if(order.phoneNumber.length === 0) {
            errors.push("Please enter your phone number.");
        }
        if(order.phoneNumber.length !== 10) {
            errors.push(`Phone number must be 10 digits: "555-555-5555"`);
        }
        if(order.streetAddress.length === 0) {
            errors.push("Please enter your street address.");
        }
        if(order.city.length === 0) {
            errors.push("Please enter your city.");
        }
        if(order.state.length === 0) {
            errors.push("Please select your state.");
        }
        if(order.zipcode.length === 0) {
            errors.push("Please enter your zipcode.");
        }
        if(order.zipcode.length !== 5) {
            errors.push("Your zipcode must be 5 digits.");
        }
        if(Object.keys(order.crustType).length === 0) {
            errors.push("Please select a crust thickness.");
        }
        if(Object.keys(order.crust).length === 0) {
            errors.push("Please select a crust size.");
        }
        if(Object.keys(order.sauce).length === 0) {
            errors.push("Please select a sauce option.");
        }
        if(Object.keys(order.cheese).length === 0) {
            errors.push("Please select a cheese option.");
        }

        if(errors.length > 0) {
            setErrors(errors);
            setValidOrder(false);
            window.scrollTo(0,0);
            return false;
        }
        else {
            setValidOrder(true);
            return true;
        }
    }

    const calculateTotal = () => {
        let validToppings = Object.keys(order.crustType).length === 0 || 
                            Object.keys(order.crust).length === 0 || 
                            Object.keys(order.sauce).length === 0 || 
                            Object.keys(order.cheese).length === 0;

        if(!validToppings) {
            let toppingsPrice = 0;
            let beveragesPrice = 0;
            let total = 0;

            if(order.toppings.length > 0) {
                order.toppings.forEach(topping => toppingsPrice += 
                    (parseFloat(topping.price) * parseFloat(order.crust.toppingMultiplier)));
            }
            
            if(order.beverages.length > 0) {
                order.beverages.forEach(beverage => beveragesPrice += parseFloat(beverage.price));    
            }

            total = (parseFloat(order.crust.price) * 
                    parseFloat(order.crustType.priceMultiplier)) + 
                    parseFloat(order.sauce.price) + 
                    parseFloat(order.cheese.price) + 
                    parseFloat(toppingsPrice) + 
                    parseFloat(beveragesPrice);

            setTotal(total.toFixed(2));
        }
    }

    //POST order
    const postOrder = async () => {
        const response = await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(order)
        });
        if(response.status === 200) {
            props.history.push(`/orders/${order.email}`);
        }
        else {
            setErrors(["There was a problem placing your order. Please review your order and try again."]);
        }
    }

    //confirm order
    const confirmOrder = () => {
        const valid = validateOrder();
        if(valid) {
            calculateTotal();
            setOrderConfirm(true);
            window.scrollTo(0,0);
        }
        else {
            setOrderConfirm(false);
        }
    }

    //goBack - return to place order form
    const goBack = () => {
        setOrderConfirm(false);
    }

    //submit order
    const submitOrder = () => {
        if(validateOrder()) {
            postOrder();
        }
    }
    

    //handlers
    const handleCrustType = (e) => {
        let crustType = pizza.crustTypes.find(crustType => crustType.id === e.target.value);
        if(crustType) {
            setOrder({...order, crustType: crustType});
        }
    }

    const handleCrustSize = (e) => {
        let crustSize = pizza.crustSizes.find(crustSize => crustSize.id === e.target.value);
        if(crustSize) {
            setOrder({...order, crust: crustSize});
        }
    }

    const handleSauce = (e) => {
        let sauce = pizza.sauce.find(sauce => sauce.id === e.target.value);
        if(sauce) {
            setOrder({...order, sauce: sauce});
        }
    }

    const handleCheese = (e) => {
        let cheese = pizza.cheese.find(cheese => cheese.id === e.target.value);
        if(cheese) {
            setOrder({...order, cheese: cheese});
        }
    }

    const handleTopping = (e) => {
        e.preventDefault();
        if(e.currentTarget.classList.contains("topping-option")) {
            e.currentTarget.classList.toggle("selected");
            
            if(e.currentTarget.classList.contains("selected")) {
                addTopping(e.currentTarget.getAttribute("data-id"));
            }
            else {
                removeTopping(e.currentTarget.getAttribute("data-id"));
            }
        } 
    }
    const addTopping = (id) => {
        let topping = pizza.toppings.find(topping => topping.id === id);
        if(topping) {
            setOrder({...order, toppings: [...order.toppings, topping]});
        }
    }
    const removeTopping = (id) => {
        let topping = order.toppings.find(topping => topping.id === id);
        if(topping) {
            let toppings = order.toppings.filter(topping => topping.id !== id);
            setOrder({...order, toppings: toppings});
        }
    }

    const handleBeverage = (e) => {
        e.preventDefault();
        if(e.currentTarget.classList.contains("beverage-option")) {
            e.currentTarget.classList.toggle("selected");
            
            if(e.currentTarget.classList.contains("selected")) {
                addBeverage(e.currentTarget.getAttribute("data-id"));
            }
            else {
                removeBeverage(e.currentTarget.getAttribute("data-id"));
            }
        }
    }
    const addBeverage = (id) => {
        let beverage = pizza.beverages.find(beverage => beverage.id === id);
        if(beverage) {
            setOrder({...order, beverages: [...order.beverages, beverage]});
        }
    }
    const removeBeverage = (id) => {
        let beverage = order.beverages.find(beverage => beverage.id === id);
        if(beverage) {
            let beverages = order.beverages.filter(beverage => beverage.id !== id);
            setOrder({...order, beverages: beverages});
        }
    }

    const handleEmail = (e) => {
        setOrder({...order, email: e.target.value});
    }
    const handlePhoneNumber = (e) => {
        setOrder({ ...order, phoneNumber: e.target.value.replace(/\D/g,'') });
    }
    const handleStreetAddress = (e) => {
        setOrder({...order, streetAddress: e.target.value});
    }
    const handleCity = (e) => {
        setOrder({...order, city: e.target.value});
    }
    const handleState = (e) => {
        setOrder({...order, state: e.target.value});
    }
    const handleZipcode = (e) => {
        setOrder({ ...order, zipcode: e.target.value.replace(/\D/g,'') });
    }



    return (
        <main className="place-order">
            <div className="container">

            <div className="title">
                <h1>Your Pizza</h1>    
            </div>

            { pizza ? (<React.Fragment>

            
            { !validOrder && errors.length > 0 &&
                <div className="errors">
                    <h3>Order cannot be placed</h3>
                    {errors ? (
                        errors.map(error => {
                            return (
                                <p key={uuidv4()}>{error}</p>
                            )
                        })
                    ) : ("")}
                </div>    
            }

            <div className={`${orderConfirm ? ("hidden") : ("")}`}>
            <div className="crust-type">
                <h2>Crust Thickness</h2>
                <div className="crust-types">
                    <ul className="base-options-list">
                        {pizza.crustTypes.map(crustType => {
                            return (
                                <li className="base-option" key={crustType.id}>
                                    <input type="radio" id={crustType.id} 
                                        name="crustType" value={crustType.id} required
                                        onChange={handleCrustType}
                                    />
                                    <label htmlFor={crustType.id}>{crustType.type}</label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="crust-size">
                <h2>Crust Size</h2>
                <div className="crust-sizes">
                    <ul className="base-options-list">
                        {pizza.crustSizes.map(crustSize => {
                            return (
                                <li className="base-option" key={crustSize.id}>
                                    <input type="radio" id={crustSize.id} 
                                        name="crustSize" value={crustSize.id} required
                                        onChange={handleCrustSize}
                                    />
                                    <label htmlFor={crustSize.id}>{crustSize.size}</label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="sauce">
                <h2>Sauce Amount</h2>
                <div className="sauce-options">
                    <ul className="base-options-list">
                        {pizza.sauce.map(sauce => {
                            return (
                                <li className="base-option" key={sauce.id}>
                                    <input type="radio" id={sauce.id} 
                                        name="sauce" value={sauce.id} required 
                                        onChange={handleSauce}
                                    />
                                    <label htmlFor={sauce.id}>{sauce.amount}</label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="cheese">
                <h2>Cheese Amount</h2>
                <div className="cheese-options">
                    <ul className="base-options-list">
                        {pizza.cheese.map(cheese => {
                            return (
                                <li className="base-option" key={cheese.id}>
                                    <input type="radio" id={cheese.id} 
                                        name="cheese" value={cheese.id} required
                                        onChange={handleCheese}
                                    />
                                    <label htmlFor={cheese.id}>{cheese.amount}</label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="toppings">
                <h2>Toppings</h2>
                <div className="topping-options">
                    <ul className="topping-options-list">
                        {pizza.toppings.map(topping => {
                            return (
                                <li className="topping-option" key={topping.id} 
                                data-id={topping.id} onClick={handleTopping}>
                                    <h3>{topping.name}</h3>
                                    <img src={`/images/toppings/${topping.name}.jpg`} alt="topping-img" />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="beverages">
                <h2>Beverages</h2>
                <div className="beverage-options">
                    <ul className="beverage-options-list">
                        {pizza.beverages.map(beverage => {
                            return (
                                <li className="beverage-option" key={beverage.id}
                                data-id={beverage.id} onClick={handleBeverage}>
                                    <h3>{beverage.name}</h3>
                                    <p>2 L</p>
                                    <img src={`/images/beverages/${beverage.name}.jpg`} alt="beverage-img" />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="delivery-info">
                <div className="delivery-title">
                    <h2>Delivery Information</h2>
                </div>
                <div className="delivery">
                    <div className="delivery-field">
                        <p>Email Address</p>
                        <input type="email" placeholder="myemail@example.com" 
                            required onBlur={handleEmail} />
                    </div>
                    <div className="delivery-field">
                        <p>Phone Number</p>
                        <input type="text" placeholder="555-555-5555" 
                            required onBlur={handlePhoneNumber} />
                    </div>
                    <div className="delivery-field">
                        <p>Street Address</p>
                        <input type="text" placeholder="742 Evergreen Terrace" 
                            required onBlur={handleStreetAddress} />
                    </div>
                    <div className="delivery-field">
                        <p>City</p>
                        <input type="text" placeholder="Houston" 
                            required onBlur={handleCity} />
                    </div>
                    <div className="delivery-field">
                        <p>State</p>
                        <select onChange={handleState}>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>	
                    </div>
                    <div className="delivery-field">
                        <p>Zipcode</p>
                        <input type="text" placeholder="12345" 
                            required onBlur={handleZipcode} />
                    </div>    
                </div>
                
            </div>

            <div className="confirm-button">
                <button className="confirm" onClick={confirmOrder}>Confirm Order</button>
            </div>
            </div>


            <div className={`${orderConfirm ? ("") : ("hidden")}`}>
            <div className="order-summary">
                <div className="summary-title">
                    <h2>Order Summary</h2>
                </div>
                <div className="summary-wrapper">
                    <div className="back-button" onClick={goBack}>
                        <button className="back">Back</button>
                    </div>
                    <OrderSummary 
                        order={order}
                        total={total}
                    />
                </div>
            </div>

            <div className="order-submit">
                <button onClick={submitOrder}>Place Order</button>
            </div>
            </div>

            </React.Fragment>) : ("Please wait...")}
            </div>
        </main>
    )
}

export default withRouter(PlaceOrder);