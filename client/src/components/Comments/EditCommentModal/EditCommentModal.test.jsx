import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import EditCommentModal from './EditCommentModal';
import store from '../../../store/store';

const renderEditCommentModal = () => {
    render(
        <Provider store={store}>
                <BrowserRouter>
                    <EditCommentModal
                        isOpen={true}
                        onClose={() => {}}
                        commentData={{}}
                        setCommentData={() => {}}
                    />
                </BrowserRouter>
        </Provider>
    );
};

describe('EditCommentModal Component', () => {
    beforeEach(() => {
        renderEditCommentModal();
    })

    it('should render correctly', () => { 
        expect(screen.getByText('Edit Comment')).toBeInTheDocument();
        expect(screen.getByText('Save')).toBeInTheDocument();
    });

})