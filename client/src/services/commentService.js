import { getDocs, getDoc, collection, setDoc, doc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import { firebaseAuth } from "../config/firebase";

export const createComment = async (commentData) => {
    try {
        const commentDocRef = doc(collection(firebaseAuth.db(), "comments"));
        await setDoc(commentDocRef, commentData);
    } catch (error) {
        console.log(error);
    }
};

export const getAllComments = async (entityId, setComments) => {
    try {
        const commentsCollection = collection(firebaseAuth.db(), "comments");
        const commentsQuery = query(commentsCollection, where("entityId", "==", entityId));
        const commentsSnapshot = await getDocs(commentsQuery);
        const commentsList = commentsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setComments(commentsList);
    } catch (error) {
        console.log(error);
    }
};