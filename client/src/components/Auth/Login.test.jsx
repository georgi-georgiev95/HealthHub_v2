import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from '../../contexts/UserProvider'
import Login from './Login';
import styles from './AuthForms.module.css';

describe('Login Component', () => {
    it('should import styles correctly', () => {
        const { container } = render(
            <UserProvider>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </UserProvider>
        );
        const formElement = container.querySelector('form');

        expect(formElement).toHaveClass(styles.authForm);
    });

    it('should render email and password input fields', () => {
        render(
            <UserProvider>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </UserProvider>
        );
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    it('should allow input in email and password fields', () => {
        render(
            <UserProvider>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </UserProvider>
        );
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('password123');
    });

    it('should display error message for invalid email', () => {
        render(
            <UserProvider>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </UserProvider>
        );
        const emailInput = screen.getByLabelText(/email/i);
        fireEvent.change(emailInput, { target: { value: 'Email is required!' } });
        fireEvent.blur(emailInput);

        const errorMessage = screen.getByText(/Invalid email!/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it('should call submitHandler on form submission', () => {
        const submitHandler = vi.fn();
        const { container } = render(
            <UserProvider>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </UserProvider>
        );
        const formElement = container.querySelector('form');
        formElement.addEventListener('submit', function (event) {
            submitHandler(event);
        });


        fireEvent.submit(formElement);
        expect(submitHandler).toHaveBeenCalled();
    });
});
