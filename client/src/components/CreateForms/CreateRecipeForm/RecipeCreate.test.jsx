import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { BrowserRouter } from "react-router-dom";

import RecipeCreate from "./RecipeCreate";
import UserProvider from "../../../contexts/userContext/UserProvider";

const renderRecipeCreate = () => {
  render(
    <BrowserRouter>
      <UserProvider>
        <RecipeCreate />
      </UserProvider>
    </BrowserRouter>
  );
};

describe("RecipeCreate Component", () => {
  it("renders the title", () => {
    renderRecipeCreate();
    expect(screen.getByText("Create Recipe")).toBeInTheDocument();
  });

  it("renders the form", () => {
    renderRecipeCreate();
    expect(screen.getByText("Title:")).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Ingredients:")).toBeInTheDocument();
    expect(screen.getByText("ImageURL:")).toBeInTheDocument();
    expect(screen.getByText("Difficulty Level:")).toBeInTheDocument();
  });

  it("renders the button", () => {
    renderRecipeCreate();
    expect(screen.getByText("Add Recipe")).toBeInTheDocument();
  });

  it("renders the dropdown", () => {
    renderRecipeCreate();
    const dropdown = screen.getByRole("combobox");
    fireEvent.click(dropdown);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
