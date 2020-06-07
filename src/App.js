import React, {Fragment, createContext, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Layout/Navbar";
import Master from "./Components/Layout/Master";
import productsApi from "./Components/Data/Products";
import useCartHook from './Hooks/useCartHook'
export const ProductsContextApi = createContext()

export default function App() {
	const defaultProductsFromApi = productsApi
	const [products, setProducts] = useState(defaultProductsFromApi)	
	const [theme, setTheme] = useState(false)	
	const {cartItems, setCartItemsHandler, updateCartItemsHandler, removeCartItemsHandler, clearCartItemsHandler} = useCartHook(products)

	const productSearchHandler = keyword => {		
		const filteredProducts = defaultProductsFromApi.filter(product => {
			return 	product.title.toLowerCase().includes(keyword) ||
					product.body.toLowerCase().includes(keyword) 
		})
		setProducts(filteredProducts)
	}
	const themeChangeHandler = () => setTheme(prevTheme => !prevTheme)
	return (
	<Fragment>
		<ProductsContextApi.Provider value={{products,productSearchHandler,cartItems, setCartItemsHandler, updateCartItemsHandler, removeCartItemsHandler, clearCartItemsHandler, themeChangeHandler, theme}}>
	    	<Master>
	        	<Navbar />
	      	</Master>
	  	</ProductsContextApi.Provider>
	</Fragment>
	);
}
