import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import WorkoutCreate from "./WorkoutCreate";
import store from "../../../store/store";

const renderWorkoutCreate = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <WorkoutCreate />
      </BrowserRouter>
    </Provider>
  );
};

describe("WorkoutCreate Component", () => {
  beforeEach(() => {
    renderWorkoutCreate();
  });

  it("should render correctly", () => {
    expect(screen.getByText("Create Workout")).toBeInTheDocument();
  });

  it("should render form", () => {
    expect(screen.getByText("Title:")).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Exercises:")).toBeInTheDocument();
    expect(screen.getByText("Difficulty Level:")).toBeInTheDocument();
  });

  it("should render button", () => {
    expect(screen.getByText("Add Workout")).toBeInTheDocument();
  });

  it("should render difficulty dropdown", () => {
    const dropdown = screen.getAllByRole("combobox");
    expect(dropdown[0]).toBeInTheDocument();
    expect(dropdown[0]).toHaveTextContent("Beginner");
    expect(dropdown[0]).toHaveTextContent("Intermediate");
    expect(dropdown[0]).toHaveTextContent("Advanced");
  });

  it("should render goals dropdown", () => {
    const dropdown = screen.getAllByRole("combobox");
    expect(dropdown[1]).toHaveTextContent("Weight Loss");
    expect(dropdown[1]).toHaveTextContent("Muscle Gain");
  });
});
