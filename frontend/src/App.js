import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PizzaContextProvider from './contexts/pizzaContext';

import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import PlaceOrder from './components/placeOrder/placeOrder';
import ViewOrders from './components/viewOrders/viewOrders';
import Home from './components/homepage/home';
import NotFound from './components/404/notFound';

import "./css/app.css";


function App() {
	return (
		<div className="App">
			<div className="app-container">
			<BrowserRouter>
			<PizzaContextProvider>

				<Switch>
					
					<Route exact path="/">
						<Navbar />
						<Home />
						<Footer />	
					</Route>

					<Route exact path="/place-order">
						<Navbar />
						<PlaceOrder />
						<Footer />
					</Route>

					<Route exact path="/orders/:email" component={ViewOrders} />

					<Route exact path="/404">
						<Navbar />
						<NotFound />
						<Footer />
					</Route>

					<Route path="*">
						<Redirect to="/404" />	
					</Route>

				</Switch>
						
			</PizzaContextProvider>
			</BrowserRouter>	
			</div>
		</div>
	);
}

export default App;
