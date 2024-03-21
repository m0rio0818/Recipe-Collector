import "../App.css";
import React, { useState } from "react";

type recipeType = {
    id: number;
    name: string;
    detail: string;
};

type InputProps = {
    recipe: recipeType[];
    addRecipe: (recipe: recipeType) => void;
};

const InputRecipe: React.FC<InputProps> = ({ recipe, addRecipe }) => {
    const [recipe_name, setRecipeName] = useState<string>("");
    const [recipe_detail, setRecipeDetail] = useState<string>("");
    console.log("recipeall :", recipe);

    const setReicpeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecipeName(e.target.value);
    };

    const setReicpeDetail = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRecipeDetail(e.target.value);
    };

    const addNewRecipe = () => {
        const newRecipe = {
            id: Math.floor(Math.random() * 1e5),
            name: recipe_name,
            detail: recipe_detail,
        };

        console.log("追加: ", newRecipe);

        addRecipe(newRecipe);

        setRecipeName("");
        setRecipeDetail("");
    };

    return (
        <>
            <div className="w-full max-w-2xl py-10 mx-auto">
                <div className="mb-4">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900"
                        htmlFor="recipe_name"
                    >
                        レシピ名
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full text-sm py-2 px-3 text-gray-700 leading-tight border-gray-300 focus:ring-blue-200 focus:border-blue-500"
                        type="text"
                        id="recipe_name"
                        value={recipe_name}
                        onChange={setReicpeName}
                    ></input>
                </div>
                <div className="mb-4">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900"
                        htmlFor="recipe_detail"
                    >
                        レシピ詳細
                    </label>
                    <textarea
                        className="shadow appearance-none  w-full text-sm p-2.5 font-medium text-gray-700 leading-tight rounded-lg border border-gray-300
                        focus:ring-blue-200 focus:border-blue-500"
                        id="recipe_detail"
                        rows={4}
                        onChange={setReicpeDetail}
                        value={recipe_detail}
                    ></textarea>
                </div>
                <div className=" flex justify-end">
                    <button
                        type="button"
                        className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none
                focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 "
                        onClick={addNewRecipe}
                    >
                        レシピ追加
                    </button>
                </div>
                {/* {recipes.map((recipe) => {
                    return (
                        <>
                            <p>{recipe.name}</p>
                            <p>{recipe.detail}</p>
                        </>
                    );
                })} */}
            </div>
        </>
    );
};

export default InputRecipe;
