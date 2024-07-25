import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Comment from "./Comment";
import UserProvider from "../../../contexts/userContext/UserProvider";
import CommentsProvider from "../../../contexts/commentsContext/CommentsProvired";

const renderComment = () => {
  return render(
    <UserProvider>
      <CommentsProvider>
        <BrowserRouter>
          <Comment
            commentData={{
              text: "text",
              ownerName: "ownerName",
              ownerId: "ownerId",
              createdAt: new Date(),
              editAt: new Date(),
            }}
            setIsOpenEditModal={vi.fn()}
            setComment={vi.fn()}
            setIsOpenDeleteModal={vi.fn()}
          />
        </BrowserRouter>
      </CommentsProvider>
    </UserProvider>
  );
};

describe("Comment Component", () => {
  beforeEach(() => {
    renderComment();
  });

  it("should render correctly", () => {});

  it("should render text", () => {
    expect(screen.getByText("text")).toBeInTheDocument();
  });

  it("should render owner name", () => {
    expect(screen.getByText("by ownerName")).toBeInTheDocument();
  });
});
