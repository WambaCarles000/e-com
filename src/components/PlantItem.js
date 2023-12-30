import CareScale from './CareScale'
import '../styles/PlantItem.css'





function PlantItem({ name,cover,id,light,water ,price}) {

	function handleClick(plantName){

		alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
	}
	

	
	return (


       <li key={id} className='lmj-plant-item'  onClick={() => handleClick(name)}>
		    <span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem