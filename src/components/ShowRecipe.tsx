import AccordionItem from "./AccordionItem";

type recipe = {
    id: number;
    name: string;
    detail: string;
};

type showProps = {
    recipes: recipe[];
};

const ShowRecipe: React.FC<showProps> = ({ recipes }) => {
    return (
        <>
            <div className="w-full   max-w-2x">
                {recipes.map((recipe) => (
                    <AccordionItem
                        key={recipe.id}
                        title={recipe.name}
                        content={recipe.detail}
                    />
                ))}
            </div>
        </>
    );
};

export default ShowRecipe;
