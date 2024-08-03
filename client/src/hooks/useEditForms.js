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
            case "ingredients":
                return validateIngredients(value, handleNewError);
            case "image":
                return validateImageURL(value, handleNewError);
            default:
                return;
        }
    };

    const handleChange = (field, value) => {
        validator(field, value);

        setEntity((prevEntity) => ({
            ...prevEntity,
            [field]: value,
        }));
    };

    const addInputField = (field) => {
        if (entity[field][entity[field].length - 1] === "") {
            return;
        }
        setEntity((prevEntity) => ({
            ...prevEntity,
            [field]: [...prevEntity[field], ""],
        }));
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

        if(entity.ingredients?.some(ingredient => ingredient === "")) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                ingredients: "Cannot have empty fields.",
            }));
            return;
        }

        if (Object.values(errors).some(error => error !== "")) {
            return;
        }

        await editEntity(id, entity);
        navigate(`${redirectPath}${id}`);
    };

    return {
        entity,
        loading,
        handleChange,
        addInputField,
        deleteInputField,
        handleSubmit,
        errors
    };
};

export default useEditForms;
