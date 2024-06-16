import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { getDocs, setDoc, doc, collection } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FavoriteEvents = ({ userId, eventId, eventName }) => {
    const [favorites, setFavorites] = useState([]);
    const { user } = useAuth();

    const fetchFavorites = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, `users/${userId}/favorites`));
            const favoriteData = querySnapshot.docs.map(doc => doc.data());
            setFavorites(favoriteData);
        } catch (error) {
            console.error("Erro ao buscar favoritos:", error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchFavorites();
        }
    }, [user]);

    const handleFavorite = async () => {
        if (!user) {
            console.error("Usuário não autenticado.");
            return;
        }

        try {
            await setDoc(doc(db, `users/${user.uid}/favorites/${eventId}`), { eventId, eventName });
            fetchFavorites();
            toast.success("Evento adicionado aos favoritos!");
        } catch (error) {
            console.error("Falha ao adicionar evento como Favorito.", error);
            toast.error("Falha ao adicionar evento como Favorito.");
        }
    };

    return (
        <div>
            <h3>Favorites</h3>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>{favorite.eventName}</li>
                ))}
            </ul>
            <button onClick={handleFavorite}>Adicionar aos Favoritos</button>
            <ToastContainer />
        </div>
    );
};

export default FavoriteEvents;
