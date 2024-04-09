
import {signInWithEmailAndPassword, auth, signOut} from '../index';

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log('error in login: ', error);
        throw new Error('Please enter valid credential');
    }
}

export const logout = async () => {
    try {
        await signOut(auth);   
        return true
    } catch (error) {
        console.error("Error in logout: ", error);
    }
}