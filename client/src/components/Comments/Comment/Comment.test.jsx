import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Comment from "./Comment";
import store from "../../../store/store";

const renderComment = () => {
  return render(
    <Provider store={store}>
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
    </Provider>
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
