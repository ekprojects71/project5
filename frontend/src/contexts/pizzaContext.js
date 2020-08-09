import React, { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaContextProvider = (props) => {

    //context state
    const [ pizza, setPizza] = useState(null);

    //requests
    const fetchPizzaOptions = async () => {
        const toppingsRes = await fetch("/api/toppings");
        const toppings = await toppingsRes.json();

        const sauceRes = await fetch("/api/sauce");
        const sauce = await sauceRes.json();

        const cheeseRes = await fetch("/api/cheese");
        const cheese = await cheeseRes.json();

        const crustRes = await fetch("/api/crust");
        const crust = await crustRes.json();

        const crustTypeRes = await fetch("/api/crust-type");
        const crustType = await crustTypeRes.json();

        const beveragesRes = await fetch("/api/beverages");
        const beverages = await beveragesRes.json();

        setPizza({
            crustTypes: crustType,
            crustSizes: crust,
            cheese: cheese,
            sauce: sauce,
            toppings: toppings,
            beverages: beverages
        })

    }

    useEffect(() => {
        if(!pizza) {
            fetchPizzaOptions();
        }
    }, [])


    return (
        <PizzaContext.Provider value={ { pizza: pizza } }>
            { props.children }
        </PizzaContext.Provider>
    )
}

export default PizzaContextProvider;