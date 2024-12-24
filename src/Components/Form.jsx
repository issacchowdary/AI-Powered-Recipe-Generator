
import { useState } from "react"
import IngredientsList from "./Ingredients"
import ClaudeRecipe from "./ClaudeRecipe"
import {getRecipeFromMistral} from "../ai"
export default function Form(){
    
    const [ingredients,setingredient]=useState([])
    const [recipe,setRecipe]=useState("")

    
    
    function submit(formData){
        const newingredient=formData.get("ingredient");
        setingredient((previngredients)=>
           [...previngredients,newingredient]
        )
    }
    
     async function getRecipe(){
         const recipeMarkdown= await getRecipeFromMistral(ingredients)
         setRecipe(recipeMarkdown)
    
    }
    
    return(
        <main>
            <form action={submit}className="add-ingredient-form"  >
                <input 
                    type="text"
                    placeholder="e.g.Tomato"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button>
                    Add ingredient
                </button>
            </form>
            { ingredients.length?
            <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>:
            null
             }

             {recipe.length>0?
             <ClaudeRecipe recipe={recipe}/>
             :null}
        </main>
    )
}

//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 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