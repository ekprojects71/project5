import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import OrderSummary from "../orderSummary/orderSummary";

import "../../css/viewOrders.css";


const ViewOrders = (props) => {
    window.scrollTo(0,0);

    const [ orders, setOrders ] = useState(null);

    const fetchOrders = async () => {
        if(props.match.params.email) {
            const response = await fetch(`/api/orders/${props.match.params.email}`);
            const data = await response.json();
            if(response.status === 200) {
                setOrders(data);
                if(data.length === 0) {
                    props.history.push("/");
                }
            }
            else {
                props.history.push("/");
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0,0);
        fetchOrders();
    }, [props.match.params.email])


    const cancelOrder = async (e) => {
        const orderId = e.target.getAttribute("data-id");
        const response = await fetch(`/api/orders/${orderId}`, {method: "DELETE"});
        if(response.status === 200) {
            const newOrders = orders.filter(order => order.id !== orderId);
            setOrders(newOrders);
            if(newOrders.length === 0) { props.history.push("/") };
            window.scrollTo(0,0);
        }
    }

    return (
        <React.Fragment>
        <Navbar />
        <div className="view-orders">
            <div className="container">
                <div className="your-orders">
                    <h1>Current Orders for <span>{props.match.params.email}</span></h1>
                </div>
                <div className="main-content">
                    {orders ? (
                        <div className="orders">
                            {orders.map((order, i) => {
                                return (
                                    <div className="order-content" key={uuidv4()}>
                                        <h2>Order {i+1} <span>(Order no: {order.id})</span> </h2>
                                        <OrderSummary 
                                            order={order}
                                            total={order.orderTotal.toFixed(2)}
                                        />
                                        <div className="cancel-order">
                                            <button className="cancel-order-btn"
                                                onClick={cancelOrder}
                                                data-id={order.id}
                                            >Cancel Order</button>
                                        </div> 
                                    </div>
                                )
                            })}
                        </div>    
                    ) : ("Just a moment...")}    
                </div>
            </div>
        </div>
        <Footer />
        </React.Fragment>
    )
}

export default withRouter(ViewOrders);