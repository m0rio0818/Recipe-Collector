import { useState } from "react";

type recipeData = {
    title: string;
    content: string;
};

const AccordionItem: React.FC<recipeData> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border mx-auto w-10/12 border-gray-300 rounded-md mb-2">
            <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                <svg
                    className={`w-6 h-6 ${
                        isOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="p-4 border-t border-gray-300">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
