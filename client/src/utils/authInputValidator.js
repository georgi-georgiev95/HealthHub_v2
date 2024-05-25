const validateEmail = (e, error, setError) => {
    if (!e.target.value) {
        setError({ ...error, email: `Email is required!` });
        return;
    }

    const email = e.target.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(String(email).toLowerCase());

    if (!isValid) {
        setError({ ...error, email: `Invalid email!` });
    } else {
        setError({ ...error, email: '' });
    }
};

const validatePassword = (e, error, setError) => {
    if (!e.target.value) {
        setError({ ...error, password: `Password is required!` });
        return;
    }

    if(e.target.value.length < 6) {
        setError({ ...error, password: `Password must be at least 6 characters long!` });
        return;
    }

    if(e.target.value.length > 20) {
        setError({ ...error, password: `Password must be at most 20 characters long!` });
        return;
    }

    setError({ ...error, password: '' });
};

const validateRePassword = (e, password, error, setError) => {
    if (!e.target.value) {
        setError({ ...error, rePassword: `Repeat password is required!` });
        return;
    }

    if(password && e.target.value !== password) {
        setError({ ...error, rePassword: `Passwords do not match!` });
        return;
    }

    setError({ ...error, rePassword: '' });
};

const validateUsername = (e, error, setError) => {
    if (!e.target.value) {
        setError({ ...error, username: `Username is required!` });
        return;
    }    

    const usernameRegex = /^[^\s]+$/;
    const isValid = usernameRegex.test(e.target.value.trim());

    if (!isValid) {
        setError({ ...error, username: `Username can not include whitespaces!` });
        return;
    }
    

    setError({ ...error, username: '' });
}

export {
    validateEmail,
    validatePassword,
    validateRePassword,
    validateUsername
}