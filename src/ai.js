// Import the Hugging Face Inference library
import { HfInference } from '@huggingface/inference';

// Get the Hugging Face API key from environment variables
const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;

// Define the system prompt
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Initialize Hugging Face inference with the API key
const hf = new HfInference(HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error("Error during recipe generation:", err);
        return "Sorry, I couldn't generate a recipe. Please try again later.";
    }
}

