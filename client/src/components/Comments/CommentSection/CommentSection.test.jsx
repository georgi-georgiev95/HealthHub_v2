import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import CommentSection from "./CommentSection";
import store from "../../../store/store";

const renderCommentSection = () => {
  render(
    <Provider store={store}>
          <CommentSection
            comments={[
              {
                id: 1,
                text: "Comment 1",
                ownerId: 1,
                ownerName: "User 1",
                entityId: 1,
                createdAt: new Date(),
                editAt: new Date(),
              },
              {
                id: 2,
                text: "Comment 2",
                ownerId: 2,
                ownerName: "User 2",
                entityId: 2,
                createdAt: new Date(),
                editAt: new Date(),
              },
              {
                id: 3,
                text: "Comment 3",
                ownerId: 3,
                ownerName: "User 3",
                entityId: 3,
                createdAt: new Date(),
                editAt: new Date(),
              },
            ]}
          />
    </Provider>
  );
};

describe("CommentSection Component", () => {
  beforeEach(() => {
    renderCommentSection();
  });

  it("should render correctly", () => {});

  it("should render comments", () => {
    expect(screen.getByText("Comment 1")).toBeInTheDocument();
    expect(screen.getByText("Comment 2")).toBeInTheDocument();
    expect(screen.getByText("Comment 3")).toBeInTheDocument();
  });

  it("should render comments count", () => {
    expect(screen.getByText("3 comments")).toBeInTheDocument();
  });

  it("should render sort by", () => {
    expect(screen.getByText("Sort by:")).toBeInTheDocument();
  });

  it("should render create comment", () => {
    expect(
      screen.getByPlaceholderText("Add your comment...")
    ).toBeInTheDocument();
  });
});
