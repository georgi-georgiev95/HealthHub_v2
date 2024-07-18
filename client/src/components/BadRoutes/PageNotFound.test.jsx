import { render, screen } from '@testing-library/react';
import PageNotFound from './PageNotFound';
import { BrowserRouter } from 'react-router-dom';

const renderPageNotFound = () => {
    render(
        <BrowserRouter>
            <PageNotFound />
        </BrowserRouter>
    );
}

describe('PageNotFound Component', () => {
    beforeEach(() => {
        renderPageNotFound();
    })
    it('renders correctly', () => {
        expect(screen.getByText('Ooops!')).toBeInTheDocument();
        expect(screen.getByText('The page you are looking for could not be found.')).toBeInTheDocument();
        expect(screen.getByText('Please check the URL and try again! :)')).toBeInTheDocument();
    })
});