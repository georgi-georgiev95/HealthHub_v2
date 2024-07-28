import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import ReactSection from './ReactionSection';
import store from '../../../store/store';

const renderReactionSection = () => render(
    <Provider store={store}>
            <BrowserRouter>
                <ReactSection
                    commentData={{
                        id: 1,
                        reactions: [
                            {
                                userId: "1",
                                reaction: "like"
                            }
                        ] 
                    }}
                    userId="1"
                />
            </BrowserRouter>
    </Provider>
);

describe('ReactionSection Component', () => {
    beforeEach(() => {
        renderReactionSection();
    });

    it('should render correctly', () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(4);
    });
})