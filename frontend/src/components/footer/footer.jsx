import React from "react";

import "../../css/footer.css";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="generic-text">
                    <p>
                        Pizzas are delivered shortly after they are cooked. 
                        Delivery time may vary based on location, traffic, driver safety, and other factors.
                    </p>
                    <p>
                        Expect your pizza to arrive within an hour, but no less than thirty minutes.
                    </p>
                    <p>
                        Payment is required upon delivery. We accept cash, credit, and mobile payments. 
                        Please consider giving your driver a tip. Keep in mind our drivers carry less than $30. 
                        It is advised that cash payments should be paid in exact change.
                    </p>    
                </div>
                <p>Project stack:</p>
                <div className="stack">
                    <img src="/images/spring-boot.png" alt="spring-boot-icon" />
                    <img src="/images/mongodb.png" alt="mongo-icon" />
                    <img src="/images/react.png" alt="react-icon" />
                </div>    
            </div>
        </footer>
    )
}

export default Footer;