const { render, screen } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";

import WorkoutGridCard from "./WorkoutGridCard";

const renderWorkoutGridCard = () => {
  render(
      <BrowserRouter>
        <WorkoutGridCard
          title="Workout Title"
          difficulty="⭐"
          goal="Weight Loss"
          ownerName="Owner Name"
          id="1"
        />
      </BrowserRouter>
  );
};

describe("WorkoutGridCard Component", () => {
  it("renders correctly", () => {
    renderWorkoutGridCard();
    expect(screen.getByText("Workout Title")).toBeInTheDocument();
    expect(screen.getByText("Difficulty: ⭐")).toBeInTheDocument();
    expect(screen.getByText("Goal: Weight Loss")).toBeInTheDocument();
    expect(screen.getByText("Added by: Owner Name")).toBeInTheDocument();
  });

  it("renders image", () => {
    renderWorkoutGridCard();
    expect(screen.getByAltText("Workout")).toBeInTheDocument();
  });

  it("renders link", () => {
    renderWorkoutGridCard();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("link navigates to correct page", () => {
    renderWorkoutGridCard();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/catalog/workouts/1"
    );
  });
    
});
