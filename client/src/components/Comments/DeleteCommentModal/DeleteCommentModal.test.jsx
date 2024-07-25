import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import DeleteCommentModal from "./DeleteCommentModal";
import UserProvider from "../../../contexts/userContext/UserProvider";
import CommentsProvider from "../../../contexts/commentsContext/CommentsProvired";

const renderDeleteCommentModal = () => {
    render(
        <BrowserRouter>
            <UserProvider>
                <CommentsProvider>
                    <DeleteCommentModal
                        isOpen={true}
                        onClose={() => {}}
                        commentData={{}}
                        setCommentData={() => {}}
                    />
                </CommentsProvider>
            </UserProvider>
        </BrowserRouter>
    );
};

describe("DeleteCommentModal", () => {
    beforeEach(() => {
        renderDeleteCommentModal();
    });

    it("should render correctly", () => {
        expect(screen.getByText("Are you sure you want to delete this comment?")).toBeInTheDocument();
    });

    it("should render buttons", () => {
        expect(screen.getByText("Cancel")).toBeInTheDocument();
        expect(screen.getByText("Delete")).toBeInTheDocument();
    });
});