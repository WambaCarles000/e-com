import { useEffect, useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {



	// garder les donnees d'une session dans le stockage local

       const saveCart = localStorage.getItem('cart')
       const [cart, updateCart] = useState(saveCart?JSON.parse(saveCart):[])

	   useEffect(()=>{

       localStorage.setItem('cart',JSON.stringify(cart),[cart])

	   })

	
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>green-space</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)                                                                  
}

export default App
