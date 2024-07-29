import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PreCreateFormView from './PreCreateFormView';

const renderPreCreateFormView = () => {
    render(
            <BrowserRouter>
                <PreCreateFormView />
            </BrowserRouter>
    );
};

describe('PreCreateFormView Component', () => {
    beforeEach(() => {
        renderPreCreateFormView();
    });

    it('should render correctly', () => {
        expect(screen.getByText('Create your own')).toBeInTheDocument();
    });

    it('should render recipes link', () => {
        expect(screen.getByText('Recipes')).toBeInTheDocument();
    });

    it('should render workouts link', () => {
        expect(screen.getByText('Workouts')).toBeInTheDocument();
    });

    it('should render logo', () => {
        expect(screen.getByRole('logo')).toBeInTheDocument();
    });
})