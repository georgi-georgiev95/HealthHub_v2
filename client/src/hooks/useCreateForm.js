    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { useSelector } from "react-redux";

    import { createRecipe } from "../services/recipeService";

    export default function useCreateForm() {
        const [ingredients, setIngredients] = useState([""]);
        const [difficulty, setDifficulty] = useState("-");
        const [errors, setErrors] = useState({
            title: "",
            description: "",
            ingredients: "",
            image: "",
            difficulty: "",
        });

        const navigate = useNavigate();
        const user = useSelector((state) => state.auth.user);

        const handleError = (element, error) => {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [element]: error
            }))
        };

        const addInputField = () => {
            if (ingredients[ingredients.length - 1].value === "") {
                handleError("ingredients", "Field must not be empty!");
                return;
            }
            handleError("ingredients", "");
            setIngredients([...ingredients, ""]);
        };

        const deleteInputField = (index) => {
            setIngredients(ingredients.filter((_, i) => i !== index));
            handleError("ingredients", "");
        };

        const handleIngredientsChange = (index, event) => {
            const newIngredients = [...ingredients];
            newIngredients[index] = event.target.value;
            setIngredients(newIngredients);
            handleError("ingredients", "");
        };

        const handleDifficultyChange = (event) => {
            if (event.target.value === "-") {
                handleError("diffuculty", "Please select difficulty!");
                return;
            }

            handleError("difficulty", "");
            setDifficulty(parseInt(event.target.value))
        };

        const handleSubmit = async (event) => {
            event.preventDefault();

            const recipeData = {
                title: event.target.title.value.trim(),
                description: event.target.title.value.trim(),
                ingredients: ingredients.map((field) => field.trim()),
                image: event.target.image.value.trim(),
                difficulty,
                ownerId: user?.userId,
                ownerName: user?.username
            };

            for (const field in recipeData) {
                if (field === 'ingredients') {
                    if (recipeData[field].length === 0 || recipeData[field][recipeData[field].length - 1] === "") {
                        handleError(field, "Field must not be empty!");
                    }
                }

                if (field !== 'ingredients') {
                    if (recipeData[field] === '' || recipeData[field] === undefined) {
                        handleError(field, "Field must not be empty!")
                    }
                }

                if (field === "difficulty") {
                    if (recipeData[field] === "-") {
                        handleError(field, "Please select difficulty!")
                    }
                }
            }

            if (recipeData.title === "" ||
                recipeData.description === "" ||
                recipeData.ingredients.length === 0 ||
                recipeData.ingredients[recipeData.ingredients.length - 1] === "" ||
                recipeData.image === "" ||
                recipeData.difficulty === "-"
            ) {
                return;
            }

            await createRecipe(recipeData);
            navigate("/catalog/recipes");
        }


        return {
            ingredients,
            difficulty,
            errors,
            addInputField,
            deleteInputField,
            handleIngredientsChange,
            handleDifficultyChange,
            handleSubmit,
            handleError
        }
    };