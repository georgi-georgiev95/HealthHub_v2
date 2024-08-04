import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { validateTitle, validateDescription,  validateImageURL } from "../utils/editFormValidator";

const useEditForms = (initialState, getOneEntity, editEntity, redirectPath) => {
    const [entity, setEntity] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        ingredients: "",
        exercises: "",
        image: "",
        difficulty: "",
        goal: "",
    });
    const [isPending, setIsPending] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleNewError = (field, error) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: error,
        }));
    }

    useEffect(() => {
        (async () => {
            const entityData = await getOneEntity(id);
            setEntity(entityData);
            setLoading(false);
        })();
    }, [id, getOneEntity]);

    const validator = (field, value) => {
        switch (field) {
            case "title":
                return validateTitle(value, handleNewError);
            case "description":
                return validateDescription(value, handleNewError);
            case "image":
                return validateImageURL(value, handleNewError);
            default:
                return;
        }
    };

    const handleChange = (field, value, index) => {
        validator(field, value);

        if (field === 'ingredients') {
            const newIngredients = [...entity['ingredients']];
            newIngredients[index] = value;
            setEntity((prevEntity) => ({
                ...prevEntity,
                [field]: newIngredients
            }))
        } else {
            setEntity((prevEntity) => ({
                ...prevEntity,
                [field]: value
            }))
        }

        if(errors[field]) {
            handleNewError(field, "")
        }
    };

    const addInputField = (field) => {
        if (field === "ingredients") {
            if (entity[field][entity[field].length - 1] === "") {
                return;
            }
            handleNewError(field, "");
            setEntity((prevEntity) => {
                return {
                    ...prevEntity,
                    [field]: [...prevEntity[field], ""]
                }
            })
        } else {
            if (
                entity[field][entity[field].length - 1].sets === "" ||
                entity[field][entity[field].length - 1].reps === "" ||
                entity[field][entity[field].length - 1].exerciseName === "" ||
                entity[field][entity[field].length - 1].sets === undefined ||
                entity[field][entity[field].length - 1].reps === undefined ||
                entity[field][entity[field].length - 1].exerciseName === undefined
            ) {
                return;
            }
            setEntity((prevEntity) => ({
                ...prevEntity,
                [field]: [...prevEntity[field], { exerciseName: "", sets: "", reps: "" }],
            }));
            handleNewError(field, "")
        }
    };

    const deleteInputField = (field, index) => {
        setEntity((prevEntity) => ({
            ...prevEntity,
            [field]: prevEntity[field].filter((_, i) => i !== index),
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: "",
        }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsPending(true);

        if(entity.ingredients?.some(ingredient => ingredient === "")) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                ingredients: "Cannot have empty fields.",
            }));
            setIsPending(false);
            return;
        }
        
        if (entity.exercises?.some(exercise => exercise.exerciseName === "" || exercise.sets === "" || exercise.reps === "")) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                exercises: "Cannot have empty fields."
            }));
            setIsPending(false);
            return;
        }

        if (Object.values(errors).some(error => error !== "")) {
            setIsPending(false);
            return;
        }

        await editEntity(id, entity);
        navigate(`${redirectPath}${id}`);
        setIsPending(false);
    };

    return {
        entity,
        loading,
        handleChange,
        addInputField,
        deleteInputField,
        handleSubmit,
        errors,
        isPending,
    };
};

export default useEditForms;
