import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { createRecipe } from "../services/recipeService";
import { createWorkout } from "../services/workoutService";

export default function useCreateForm() {
    const [ingredients, setIngredients] = useState([""]);
    const [exercises, setExercises] = useState([
        {
            exerciseName: "",
            sets: "",
            reps: "",
        },
    ]);
    const [difficulty, setDifficulty] = useState("-");
    const [goal, setGoal] = useState("-");
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        ingredients: "",
        exercises: "",
        image: "",
        difficulty: "",
    });
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const handleError = (element, error) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [element]: error
        }))
    };

    const addInputField = (e) => {
        const entity = e.target.textContent.split(" ")[1];
        if (entity === "Ingredient") {
            if (ingredients[ingredients.length - 1] === "") {
                handleError("ingredients", "Field must not be empty!");
                return;
            }
            handleError("ingredients", "");
            setIngredients([...ingredients, ""]);
        } else {
            if (
                exercises[exercises.length - 1].sets === "" ||
                exercises[exercises.length - 1].reps === "" ||
                exercises[exercises.length - 1].exerciseName === "" ||
                exercises[exercises.length - 1].sets === undefined ||
                exercises[exercises.length - 1].reps === undefined ||
                exercises[exercises.length - 1].exerciseName === undefined
            ) {
                return;
            }
            setExercises([...exercises, { exerciseName: "", sets: "", reps: "" }]);
        }
    };

    const deleteInputField = (e, index) => {
        const entity = e.target.getAttribute('datatype');
        if (entity === 'ingredient') {
            setIngredients(ingredients.filter((_, i) => i !== index));
            handleError("ingredients", "");
        } else {
            setExercises(exercises.filter((exercise, i) => i !== index));
            handleError("exercises", "");
        }
    };

    const handleNewField = (event, index, field) => {
        if (field) {
            const updatedExercises = [...exercises];
            updatedExercises[index] = {
                ...updatedExercises[index],
                [field]: event.target.value,
            };
            setExercises(updatedExercises);
        } else {
            const newIngredients = [...ingredients];
            newIngredients[index] = event.target.value;
            setIngredients(newIngredients);
            handleError("ingredients", "");
        }
    };

    const handleDifficultyChange = (event) => {
        const entity = event.target.getAttribute('datatype');
        if (event.target.value === "-") {
            handleError("diffuculty", "Please select difficulty!");
            return;
        }

        handleError("difficulty", "");

        entity === 'recipe' ?
            setDifficulty(parseInt(event.target.value)) :
            setDifficulty(event.target.value);
    };

    const handleGoalChange = (event) => {
        if (event.target.value === "-") {
            handleError("goal", "Please select goal!");
            return;
        }

        handleError("goal", "");
        setGoal(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsPending(true);

        const entity = event.target.getAttribute('datatype');

        const entityData = {
            title: event.target.title.value.trim(),
            description: event.target.title.value.trim(),
            difficulty,
            ownerId: user?.userId,
            ownerName: user?.username
        };

        if (entity === 'recipe') {
            entityData.image = event.target.image.value.trim();
            entityData.ingredients = ingredients.map((field) => field.trim());
        } else {
            entityData.exercises = exercises;
            entityData.goal = goal;
        }

        for (const field in entityData) {
            if (field === 'ingredients') {
                if (entityData[field].length === 0 || entityData[field][entityData[field].length - 1] === "") {
                    handleError(field, "Field must not be empty!");
                }
            }

            if (field === 'exercises') {
                if (entityData[field][0].exerciseName === "" || entityData[field][0].sets === "" || entityData[field][0].reps === "") {
                    handleError(field, "Field must not be empty!");
                }
             }

            if (field !== 'ingredients') {
                if (entityData[field] === '' || entityData[field] === undefined) {
                    handleError(field, "Field must not be empty!")
                }
            }

            if (field === "difficulty") {
                if (entityData[field] === "-") {
                    handleError(field, "Please select difficulty!")
                }
            }

            if (field === "goal") {
                if (entityData[field] === "-") {
                    handleError(field, "Please select goal!")
                }
            }       
        }





        if (entity === 'recipe') {
            if (entityData.title === "" ||
                entityData.description === "" ||
                entityData.ingredients.length === 0 ||
                entityData.ingredients[entityData.ingredients.length - 1] === "" ||
                entityData.image === "" ||
                entityData.difficulty === "-"
            ) {
                return;
            }

            await createRecipe(entityData);
            navigate("/catalog/recipes");
        } else {
            if (
                entityData.title === "" ||
                entityData.description === "" ||
                entityData.exercises.length === 0 ||
                entityData.difficulty === "-" ||
                entityData.goal === "-"
            ) {
                return;
            }

            await createWorkout(entityData);
            navigate("/catalog/workouts");
            setIsPending(false);
        }
    }


    return {
        exercises,
        goal,
        ingredients,
        difficulty,
        errors,
        addInputField,
        handleGoalChange,
        deleteInputField,
        handleNewField,
        handleDifficultyChange,
        handleSubmit,
        handleError,
        isPending
    }
};