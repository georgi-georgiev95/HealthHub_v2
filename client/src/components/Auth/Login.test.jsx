import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from '../../contexts/UserProvider'
import Login from './Login';
import styles from './AuthForms.module.css';

const renderLoginComponent = () => {
    return render(
        <UserProvider>
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        </UserProvider>
    );
};

describe('Login Component', () => {
    it('should import styles correctly', async () => {
        let container;
        await act(async () => {
            container = renderLoginComponent().container;
        });
        const formElement = container.querySelector('form');
        expect(formElement).toHaveClass(styles.authForm);
    });

    it('should render email and password input fields', async () => {
        await act(async () => {
            render(
                <UserProvider>
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>
                </UserProvider>
            );
        });
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getAllByLabelText(/password/i);
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput[0]).toBeInTheDocument();
    });

    it('should allow input in email and password fields', async () => {
        await act(async () => {
            render(
                <UserProvider>
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>
                </UserProvider>
            );
        });
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getAllByLabelText(/password/i);
        await act(async () => {
            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput[0], { target: { value: 'password123' } });
        });
        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput[0].value).toBe('password123');
    });

    it('should allow login', async () => {
        await act(async () => {
            render(
                <UserProvider>
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>
                </UserProvider>
            );
        });
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getAllByLabelText(/password/i);
        await act(async () => {
            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput[0], { target: { value: 'password123' } });
        });
        const loginButton = screen.getByRole('button', { name: /login/i });
        await act(async () => {
            fireEvent.click(loginButton);
        });
    });

    it('should redirect to home page after login', async () => {
        await act(async () => {
            render(
                <UserProvider>
                    <BrowserRouter>
                        <Login />
                    </BrowserRouter>
                </UserProvider>
            );
        });
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getAllByLabelText(/password/i);
        await act(async () => {
            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput[0], { target: { value: 'password123' } });
        });
        const loginButton = screen.getByRole('button', { name: /login/i });
        await act(async () => {
            fireEvent.click(loginButton);
        });
        expect(window.location.pathname).toBe('/');
    });
        
});
