import '../styles/Banner.css'
import { useEffect } from 'react'




function Banner({ children }) {


	
/* alerte s'afichant juste au premier rendu de la baniere */
useEffect(() => {
	alert('Bienvenue dans green-space')
}, [])

	return <div className='lmj-banner'>{children}</div>
}

export default Banner