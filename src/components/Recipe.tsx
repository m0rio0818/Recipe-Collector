import InputRecipe from "./InputRecipe";
import ShowRecipe from "./ShowRecipe";
import { useState } from "react";

type recipeType = {
    id: number;
    name: string;
    detail: string;
};

const Recipe: React.FC = () => {
    const [recipeLists, setRecipeLists] = useState<recipeType[]>([]);

    const addRecipe = (recipe: recipeType): void => {
        console.log("レシピ追加", recipe);
        setRecipeLists([...recipeLists, recipe]);
        console.log("new Recipe ", recipeLists);
    };

    return (
        <div className=" flex flex-col justify-center">
            <InputRecipe addRecipe={addRecipe} />
            <ShowRecipe recipes={recipeLists} />
        </div>
    );
};

export default Recipe;
