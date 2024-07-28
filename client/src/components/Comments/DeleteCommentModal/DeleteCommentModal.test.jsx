import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import DeleteCommentModal from "./DeleteCommentModal";
import store from "../../../store/store";

const renderDeleteCommentModal = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <DeleteCommentModal
          isOpen={true}
          onClose={() => {}}
          commentData={{}}
          setCommentData={() => {}}
        />
      </BrowserRouter>
    </Provider>
  );
};

describe("DeleteCommentModal", () => {
  beforeEach(() => {
    renderDeleteCommentModal();
  });

  it("should render correctly", () => {
    expect(
      screen.getByText("Are you sure you want to delete this comment?")
    ).toBeInTheDocument();
  });

  it("should render buttons", () => {
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
});
