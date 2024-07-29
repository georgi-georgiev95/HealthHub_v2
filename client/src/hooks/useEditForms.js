import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const useEditForms = (initialState, getOneEntity, editEntity, redirectPath) => {
    const [entity, setEntity] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const entityData = await getOneEntity(id);
            setEntity(entityData);
            setLoading(false);
        })();
    }, [id, getOneEntity]);

    const handleChange = (field, value) => {
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
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (entity.ingredients && entity.ingredients[entity.ingredients.length - 1] === "") {
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
    };
};

export default useEditForms;
