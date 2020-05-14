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
		let newItem = products.find(item => item.id === id)
		if(cartItems.length > 0) {
			return cartItems.find(item => item.id === id)
			? cartItems 
			: setCartItems(items => [{...newItem, quantity: 1}, ...items])
		}
		return setCartItems(items => [{...newItem, quantity: 1}, ...items])
	}
	const updateCartItemsHandler = ({is_increase, id}) => {
		
		return setCartItems(items =>{
			return items.map(item => {
				let unit_price = item.price / item.quantity
				if(item.id === id && is_increase){
					let quantity = item.quantity + 1
					return {...item, quantity, price: unit_price * quantity }
				}else if(item.id === id && !is_increase){
					let quantity = item.quantity === 1 ? 1 : item.quantity -1 
					return {...item, quantity, price: unit_price * quantity }
				}else{
					return {...item}
				}
			})
		})

	}


	return (
	<React.Fragment>
		<ProductsContextApi.Provider value={{products,productSearchHandler,cartItems, setCartItemsHandler, updateCartItemsHandler}}>
	    	<Master productsApi={productsApi}>
	        	<Navbar />
	      	</Master>
	  	</ProductsContextApi.Provider>
	</React.Fragment>
	);
}
