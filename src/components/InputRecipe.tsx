import "../app.css"


const InputRecipe = () => {
    return (
        <>
            <div className="w-full max-w-2xl py-10">
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
                    ></textarea>
                </div>
                <button type="button" className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none
                focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2">レシピ追加</button>
            </div>
        </>
    );
};

export default InputRecipe;
