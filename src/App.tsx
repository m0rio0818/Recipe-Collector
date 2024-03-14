import InputRecipe from "./components/InputRecipe";

function App() {
    return (
        <>
            <div className="pt-14 text-xl">
                <h1 className="text-center">料理レシピ共有アプリ</h1>
                <div className="flex justify-center">
                  <InputRecipe />
                </div>
            </div>
        </>
    );
}

export default App;
