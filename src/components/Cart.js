import { useState,useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {


	
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

/* useEffect */
	useEffect(() => {
		document.title = `green-space: ${total}€ d'achats`
	}, [total])



function removeFromCart(name) {
  const currentPlantSaved = cart.find((plant) => plant.name === name);

  if (currentPlantSaved) {
    const cartFilteredCurrentPlant = cart.filter(
      (plant) => plant.name !== name
    );

    // Si la quantité est supérieure à 1, décrémentez la quantité, sinon supprimez complètement l'élément du panier
    if (currentPlantSaved.amount > 1) {
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price: currentPlantSaved.price, amount: currentPlantSaved.amount - 1 },
      ]);
    } else {
      updateCart([...cartFilteredCurrentPlant]);
    }
  }
}


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
				
			{name} {price}€ x {amount}<button onClick={()=>removeFromCart(name)} style={{ borderRadius:8 }}><i>retirer</i></button>
							
 
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart