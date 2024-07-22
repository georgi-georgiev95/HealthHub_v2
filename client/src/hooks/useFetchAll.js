import { useState, useEffect } from 'react';

const useFetchAll = (callback) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await callback(setData);
            setLoading(false);
        })();
    }, []);

    return { data, loading };
};

export default useFetchAll;