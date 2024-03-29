import { Link, useParams } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";
// styles
import "./Recipe.css";

export default function Recipe() {
    const { id } = useParams();
    const url = "http://localhost:3000/recipes/" + id;
    const { error, isPending, data: recipe } = useFetch(url);

    return (
        <div className="recipe">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to make.</p>
                    <ul>
                        {recipe.ingredients.map((ing) => (
                            <li key={ing}>{ing}</li>
                        ))}
                    </ul>
                    <p className="">{recipe.method}</p>
                </>
            )}
        </div>
    );
}
