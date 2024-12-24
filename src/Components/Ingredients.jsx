export default function Ingredients(props){

    const ingredientsElements=props.ingredients.map((ingredient)=>{
        return(
           <li key={ingredient}>{ingredient}</li>
        )
   })
    return(
        <section>
                <h2> Ingredients on Hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsElements}</ul>
                {props.ingredients.length>=3?
                <div className="get-recipe-container">
                    <div>
                    <h3>Ready for a Recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a Recipe</button>
                </div>:
                null
                } 
            </section>
    )
} 