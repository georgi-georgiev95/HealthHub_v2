import { render, screen, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { vi } from 'vitest';

import UserProvider from './contexts/userContext/UserProvider'
import App from './App'

beforeAll(() => {
    global.navigator.geolocation = {
        getCurrentPosition: vi.fn().mockImplementation((success, error) => {
            success({
                coords: {
                    latitude: 51.1,
                    longitude: 45.3
                }
            });
        })
    };
});

describe('App', () => {
    it('renders the App component', async () => {
        await act(async () => {
            render(
            <UserProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </UserProvider>
        );
    });

        screen.debug();
    })
});