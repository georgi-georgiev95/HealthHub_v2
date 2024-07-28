import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { it } from "vitest";

import Register from "./Register";
import styles from "./AuthForms.module.css";
import store from "../../store/store";

describe("Register Component", () => {
  it("should import styles correctly", async () => {
    let container;
    await act(async () => {
      const renderResult = render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
      container = renderResult.container;
    });

    const formElement = container.querySelector("form");
    expect(formElement).toHaveClass(styles.authForm);
  });

  it("should render email and password input fields", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
    });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getAllByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput[0]).toBeInTheDocument();
    expect(passwordInput[1]).toBeInTheDocument();
  });

  it("should allow input in email and password fields", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
    });

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getAllByLabelText(/password/i);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput[0], { target: { value: "password123" } });
      fireEvent.change(passwordInput[1], { target: { value: "password123" } });
    });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput[0].value).toBe("password123");
    expect(passwordInput[1].value).toBe("password123");
  });

  it("should allow login", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
    });

    const submitButton = screen.getByRole("button", { name: "Register" });

    await act(async () => {
      fireEvent.click(submitButton);
    });
  });

  it("should redirect to home page after register", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
    });

    const submitButton = screen.getByRole("button", { name: "Register" });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(window.location.pathname).toBe("/");
  });

  it("should display error message for invalid email", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
    });

    const emailInput = screen.getByLabelText(/email/i);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test" } });
      fireEvent.blur(emailInput);
    });

    expect(screen.getByText("Invalid email!")).toBeInTheDocument();
  });

  it("should display error message for not matching password", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
    });

    const passwordInput = screen.getAllByLabelText(/password/i);

    await act(async () => {
      fireEvent.change(passwordInput[0], { target: { value: "pass" } });
      fireEvent.change(passwordInput[1], { target: { value: "1234" } });
      fireEvent.blur(passwordInput[0]);
      fireEvent.blur(passwordInput[1]);
    });

    expect(screen.getByText("Passwords do not match!")).toBeInTheDocument();
  });

  it("should disply error if password is less than 6 characters", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
    });

    const passwordInput = screen.getAllByLabelText(/password/i);

    await act(async () => {
      fireEvent.change(passwordInput[0], { target: { value: "123" } });
      fireEvent.change(passwordInput[1], { target: { value: "123" } });
      fireEvent.blur(passwordInput[0]);
      fireEvent.blur(passwordInput[1]);
    });

    expect(
      screen.getByText("Password must be at least 6 characters long!")
    ).toBeInTheDocument();
  });

  it("should disply error if password is more than 20 characters", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
    });

    const passwordInput = screen.getAllByLabelText(/password/i);

    await act(async () => {
      fireEvent.change(passwordInput[0], {
        target: { value: "123456789012345678901" },
      });
      fireEvent.change(passwordInput[1], {
        target: { value: "123456789012345678901" },
      });
      fireEvent.blur(passwordInput[0]);
      fireEvent.blur(passwordInput[1]);
    });

    expect(
      screen.getByText("Password must be at most 20 characters long!")
    ).toBeInTheDocument();
  });

  it("should disply error if username includes whitespaces", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </Provider>
      );
    });

    const usernameInput = screen.getByLabelText(/username/i);

    await act(async () => {
      fireEvent.change(usernameInput, { target: { value: "john doe" } });
      fireEvent.blur(usernameInput);
    });

    expect(
      screen.getByText("Username can not include whitespaces!")
    ).toBeInTheDocument();
  });
});
