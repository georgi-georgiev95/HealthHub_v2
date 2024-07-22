import { createContext, useContext } from "react";

const CommentsContext = createContext();
export const useComments = () => useContext(CommentsContext);

export default CommentsContext;