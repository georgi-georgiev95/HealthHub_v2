const commentsSorter = (comments, sortType) => {
    const sortedComments = [...comments]; 

    if (sortType === "newest") {
        return sortedComments.sort((a, b) => b.createdAt - a.createdAt);
    } else if (sortType === "oldest") {
        return sortedComments.sort((a, b) => a.createdAt - b.createdAt);
    } else if (sortType === "interactions") {
        return sortedComments.sort((a, b) => {
            return (b.reactions?.length || 0) - (a.reactions?.length || 0);
        });
    }
};

export default commentsSorter;

