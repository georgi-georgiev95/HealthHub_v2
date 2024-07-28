import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyUserSession } from '../store/slices/authSlice';

const useVerifyUserSession = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(verifyUserSession());
    }, [dispatch]);
};

export default useVerifyUserSession;
