import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PreCreateFormView from './PreCreateFormView';
import UserProvider from '../../contexts/userContext/UserProvider';

const renderPreCreateFormView = () => {
    render(
        <UserProvider>
            <BrowserRouter>
                <PreCreateFormView />
            </BrowserRouter>
        </UserProvider>
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