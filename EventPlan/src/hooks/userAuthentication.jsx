import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase/config';

export const userAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [cancel, setCancel] = useState(false);

    const checkCancel = () => {
        if (cancel) {
            return;
        }
    };

    const createUser = async (data) => {
        checkCancel();
        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(user, {
                displayName: data.displayName
            });
            setLoading(false);
            return user;
        } catch (error) {
            console.error(error.message);
            let systemErrorMessage;

            if (error.code === "auth/email-already-in-use") {
                systemErrorMessage = "Email já cadastrado";
            } else if (error.code === "auth/weak-password") {
                systemErrorMessage = "Senha fraca";
            } else {
                systemErrorMessage = "Erro ao criar usuário";
            }

            setLoading(false);
            setError(systemErrorMessage);
        }
    };

    const login = async (data) => {
        checkCancel();
        setLoading(true);
        setError(null);

        try {
            const { user } = await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);
            return user;
        } catch (error) {
            console.error(error.message);
            let systemErrorMessage;

            if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                systemErrorMessage = "Email ou senha incorretos";
            } else if (error.code === "auth/invalid-email") {
                systemErrorMessage = "Email inválido";
            } else {
                systemErrorMessage = "Erro ao fazer login";
            }

            setLoading(false);
            setError(systemErrorMessage);
            throw new Error(systemErrorMessage);
        }
    };

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            return result.user;
        } catch (error) {
            console.error(error.message);
            setError("Erro ao fazer login com Google");
            throw new Error("Erro ao fazer login com Google");
        }
    };

    const facebookSignIn = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            return result.user;
        } catch (error) {
            console.error(error.message);
            setError("Erro ao fazer login com Facebook");
            throw new Error("Erro ao fazer login com Facebook");
        }
    };

    return {
        auth,
        error,
        loading,
        createUser,
        login,
        googleSignIn,
        facebookSignIn,
        setCancel
    };
};
