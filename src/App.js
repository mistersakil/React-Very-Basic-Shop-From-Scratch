import React, {createContext, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Layout/Navbar";
import Master from "./Components/Layout/Master";
import productsApi from "./Components/Data/Products";
export const ProductsContextApi = createContext()
export default function App() {
	const defaultProductsFromApi = productsApi
	const [products, setProducts] = useState(defaultProductsFromApi)	
	const [cartItems, setCartItems] = useState([])
	const productSearchHandler = keyword => {		
		const filteredProducts = defaultProductsFromApi.filter(product => {
			return 	product.title.toLowerCase().includes(keyword) ||
					product.body.toLowerCase().includes(keyword) 
		})
		setProducts(filteredProducts)
	}
	const setCartItemsHandler = id => {
		let newItem = products.find(item => item.id == id)
		let existingItem = {}
		if(cartItems.length > 0) {
			return cartItems.find(item => item.id == id)
			? cartItems 
			: setCartItems(items => [...items, newItem])
		}
		return setCartItems(items => [...items, newItem])
	}

	return (
	<React.Fragment>
		<ProductsContextApi.Provider value={{products,productSearchHandler,cartItems, setCartItemsHandler}}>
	    	<Master productsApi={productsApi}>
	        	<Navbar />
	      	</Master>
	  	</ProductsContextApi.Provider>
	</React.Fragment>
	);
}
