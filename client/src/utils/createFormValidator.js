const validateTitle = (e, callback) => {
    if (e.target.value === '') {
        callback('title', 'Title is required!');
        return;
    }
    
    if (e.target.value.length < 5) {
        callback('title', 'Title must be at least 5 characters long!');
        return;
    }
    if (e.target.value.length > 20) {
        callback('title', 'Title must be at most 30 characters long!');
        return;
    }
    callback('title', '');
};

const validateDescription = (e, callback) => {
    if (e.target.value === '') {
        callback('description', 'Description is required!');
        return;
    }
    if (e.target.value.length < 5) {
        callback('description', 'Description must be at least 20 characters long!');
        return;
    }
    if (e.target.value.length > 100) {
        callback('description', 'Description must be at most 100 characters long!');
        return;
    }
    callback('description', '');
};

const validateIngredients = (e, callback) => {
    if (e.target.value === '') {
        callback('ingredients', 'Ingredients are required!');
        return;
    }
    if (e.target.value.length < 5) {
        callback('ingredients', 'Ingredients must be at least 5 characters long!');
        return;
    }
    if (e.target.value.length > 20) {
        callback('ingredients', 'Ingredients must be at most 20 characters long!');
        return;
    }
    callback('ingredients', '');
};

const validateImageURL = (e, callback) => {
    if (e.target.value === '') {
        callback('image', 'Image URL is required!');
        return;
    }
    callback('image', '');
};


export { validateTitle, validateDescription, validateIngredients, validateImageURL };