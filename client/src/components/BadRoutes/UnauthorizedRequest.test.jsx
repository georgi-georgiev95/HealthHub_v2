import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import UnauthorizedRequest from './UnauthorizedRequest';

const renderUnauthorizedRequest = () => {
    render(
        <BrowserRouter>
            <UnauthorizedRequest />
        </BrowserRouter>
    );
}

describe('UnauthorizedRequest Component', () => {
    beforeEach(() => {
        renderUnauthorizedRequest();
    });

    it('renders correctly', () => {
        expect(screen.getByText('Unauthorized Request!')).toBeInTheDocument();
        expect(screen.getByText('Available only for the owner of the resource.')).toBeInTheDocument();
    })
})