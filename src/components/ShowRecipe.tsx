type recipe = {
    id: number;
    name: string;
    detail: string;
};

type showProps = {
    recipe: recipe[];
};

const ShowRecipe: React.FC<showProps> = (props) => {
    return (
        <>
            {props.recipe.map((data) => {
                console.log(data);
                return (
                    <>
                        <p>{data.name}</p>
                    </>
                );
            })}
        </>
    );
};

export default ShowRecipe;
