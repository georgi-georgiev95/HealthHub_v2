const validateTitle = (value, callback) => {
    if (value === '') {
        callback('title', 'Title is required!');
        return;
    }

    if (value.length < 5) {
        callback('title', 'Title must be at least 5 characters long!');
        return;
    }
    if (value.length > 20) {
        callback('title', 'Title must be at most 30 characters long!');
        return;
    }
    callback('title', '');
};

const validateDescription = (value, callback) => {
    if (value === '') {
        callback('description', 'Description is required!');
        return;
    }
    if (value.length < 5) {
        callback('description', 'Description must be at least 20 characters long!');
        return;
    }
    if (value.length > 100) {
        callback('description', 'Description must be at most 100 characters long!');
        return;
    }
    callback('description', '');
};

const validateImageURL = (value, callback) => {
    if (value === '') {
        callback('image', 'Image URL is required!');
        return;
    }
    callback('image', '');
};


export { validateTitle, validateDescription, validateImageURL };