import {useState} from 'react'
const useCartHook = (products) => {
	const [cartItems, setCartItems] = useState([])

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
	const removeCartItemsHandler = id => setCartItems(items => items.filter(item => item.id !== id))
	const clearCartItemsHandler = () => {
		const confirm = window.confirm('Are you sure to perform this action?')
		return confirm ? setCartItems([]) : false
	}
	return {cartItems, setCartItemsHandler, updateCartItemsHandler, removeCartItemsHandler, clearCartItemsHandler}
}
export default useCartHook

