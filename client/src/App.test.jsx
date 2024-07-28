import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { vi } from "vitest";

import App from "./App";
import store from "./store/store";

beforeAll(() => {
  global.navigator.geolocation = {
    getCurrentPosition: vi.fn().mockImplementation((success, error) => {
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3,
        },
      });
    }),
  };
});

describe("App", () => {
  it("renders the App component", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
    });

    screen.debug();
  });
});
