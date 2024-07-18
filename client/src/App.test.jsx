import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import UserProvider from './contexts/UserProvider'
import App from './App'

describe('App', () => {
    it('renders the App component', () => {
        render(
            <UserProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </UserProvider>
        )

        screen.debug(); // prints out the jsx in the App component unto the command line
    })
});