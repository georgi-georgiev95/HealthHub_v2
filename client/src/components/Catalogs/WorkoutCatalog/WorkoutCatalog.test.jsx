import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import WorkoutCatalog from "./WorkoutCatalog";
import useFetch from "../../../hooks/useFetch";

vi.mock("../../../hooks/useFetch");

const renderWorkoutCatalog = () => {
  render(
        <BrowserRouter>
          <WorkoutCatalog />
        </BrowserRouter>
  );
};

describe("WorkoutCatalog Component", () => {
  it("renders the workouts correctly", () => {
    useFetch.mockReturnValue({
      data: [
        {
          id: 1,
          title: "Workout 1",
          difficulty: "Easy",
          goal: "Strength",
          ownerName: "John Doe",
        },
        {
          id: 2,
          title: "Workout 2",
          difficulty: "Medium",
          goal: "Cardio",
          ownerName: "Jane Smith",
        },
      ],
      loading: false,
    });
    renderWorkoutCatalog();
    expect(screen.getByText("Workouts")).toBeInTheDocument();
    expect(screen.getByText("From rookie to expert!")).toBeInTheDocument();
    expect(screen.getByText("Workout 1")).toBeInTheDocument();
    expect(screen.getByText("Workout 2")).toBeInTheDocument();
  });

  it("renders no workouts message correctly", () => {
    useFetch.mockReturnValue({ data: [], loading: false });
    renderWorkoutCatalog();
    expect(screen.getByText("No workouts found.")).toBeInTheDocument();
  });
});
