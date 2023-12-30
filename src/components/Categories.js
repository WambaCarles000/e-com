import  "../styles/Categories.css"
import { plantList } from "../datas/plantList"

function Categories({activeCategory,setActiveCategory}){

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return(
    <div className='lmj-categories'>
        <select
                value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'>

            {/* champ vide */}
         <option value="">---</option>

        {/* affichage des categories*/}

            {categories.map((cat) => (
					<option value={cat} key={cat}>{cat}</option>
				))}
	
        </select>
         {/* reinitialiser le choix */}
        <button onClick={()=>setActiveCategory('')}>Réinitialiser</button>
    </div>

    )
}




export default Categories