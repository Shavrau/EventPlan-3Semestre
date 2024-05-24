import { db } from '../firebase/config'
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut 
} from 'firebase/auth'
import { useState, useEffect } from 'react'

export const userAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancel, setCancel] = useState(false)

    const auth = getAuth()

    function checkCancel() {
        if (cancel) {
            return
        }
    }

    async function createUser(data) {
        checkCancel()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user
        } catch (error) {
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha deve ter pelo menos 8 caracteres"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "Email já cadastrado"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde"
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const logout = () => {
        checkCancel()
        signOut(auth)
    }

    const login = async (data) => {
        checkCancel()

        setLoading(true)
        setError(null)


        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if (error.message.includes('invalid-login')) {
                systemErrorMessage = 'Usuário não cadastrado'
            } else if (error.message.includes('wrong-password')) {
                systemErrorMessage = 'Nome ou senha incorretos'
            } else {
                systemErrorMessage = 'Ocorreu um erro, tente novamente mais tarde'
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    useEffect(() => {
        return () => setCancel(true)
    }, [])
    return{
        auth,
        error,
        loading,
        createUser,
        login,
        logout
    }
}