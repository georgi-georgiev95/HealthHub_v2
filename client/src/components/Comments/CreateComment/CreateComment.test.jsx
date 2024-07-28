import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import CreateComment from './CreateComment';
import store from '../../../store/store';


const renderCreateComment = () => {
    render(
        <Provider store={store}>
                <BrowserRouter>
                    <CreateComment />
                </BrowserRouter>
        </Provider>
    )
};

describe('CreateComment Component', () => {
    beforeEach(() => {
        renderCreateComment();
    });

    it('should render correctly', () => {
    });

    it('should render textarea', () => {
        expect(screen.getByPlaceholderText('Add your comment...')).toBeInTheDocument();
    });

    it('should render button', () => {
        expect(screen.getByText('Post')).toBeInTheDocument();
    });
})