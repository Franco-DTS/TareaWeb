//@ts-nocheck
import { addDoc, collection, getDocs, getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.ts";

const usersCollection = collection(db, 'users');

export const addUser = async (user) => {
    try {
        await addDoc(usersCollection, user);
        return true;
    } catch (error) {
        return false;
    }
};

export const getUsers = async () => {
    const result = await getDocs(usersCollection);
    return result;
}; 

export const getUser = async(id) => {
    const userId = doc(db, 'users', id);
    const result = await getDoc(userId)
    return result
}

export const updateUser = async(id: Number, user) => {
    try {
        const userId = doc(db, 'users', id);
        await updateDoc(userId, user)
        return true
    } catch (error) {
        return false
    }
    
}

export const deleteUser = async(id) => {
    const userId = doc(db, 'users', id);
    if(window.confirm("Esta accion no se puede deshacer")){
        const result = await deleteDoc(userId)
        return result
    }
    
}