import React, {createContext, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Layout/Navbar";
import Master from "./Components/Layout/Master";
import productsApi from "./Components/Data/Products";
export const ProductsContextApi = createContext()
export default function App() {
	const defaultProductsFromApi = productsApi
	const [products, setProducts] = React.useState(defaultProductsFromApi)
	const [keyword, setKeyword] = React.useState()
	useEffect(() =>{		
		if(keyword !== undefined){
			const filteredProducts = defaultProductsFromApi.filter(product => {
				return product.title.toLowerCase().includes(keyword) || product.body.toLowerCase().includes(keyword) 
			})
			setProducts(filteredProducts)
		}
	},[keyword])
	return (
	<React.Fragment>
		<ProductsContextApi.Provider value={{products,setKeyword}}>
	    	<Master productsApi={productsApi}>
	        	<Navbar />
	      	</Master>
	  	</ProductsContextApi.Provider>
	</React.Fragment>
	);
}
