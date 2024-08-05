import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import RecipeCreate from "./RecipeCreate";
import store from "../../../store/store";

const renderRecipeCreate = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <RecipeCreate />
      </BrowserRouter>
    </Provider>
  );
};

describe("RecipeCreate Component", () => {
  beforeEach(() => {
    renderRecipeCreate();
  });

  it("renders the title", () => {
    expect(screen.getByText("Create Recipe")).toBeInTheDocument();
  });

  it("renders the form", () => {
    expect(screen.getByText("Title:")).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Ingredients:")).toBeInTheDocument();
    expect(screen.getByText("ImageURL:")).toBeInTheDocument();
    expect(screen.getByText("Difficulty Level:")).toBeInTheDocument();
  });

  it("renders the button", () => {
    expect(screen.getByText("Add Recipe")).toBeInTheDocument();
  });

  it("renders the dropdown", () => {
    const dropdown = screen.getByRole("combobox");
    fireEvent.click(dropdown);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
