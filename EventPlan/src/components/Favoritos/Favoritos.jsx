import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { getDocs, setDoc, doc, collection } from "firebase/firestore";

const FavoriteEvents = ({ userId }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const querySnapshot = await getDocs(collection(db, `users/${userId}/favorites`));
            const favoriteData = querySnapshot.docs.map(doc => doc.data());
            setFavorites(favoriteData);
        }

        fetchFavorites();
    }, [userId])

    const handleFavorite = async (eventId) => {
        try {
            await setDoc(doc(db, `users/${userId}/favorites/${eventId}`), { eventId });
            fetchFavorites();
        } catch (error) {
            console.error("Falha ao adicionar evento como Favorito.", error);
        }
    }

    return (
        <div>
            <h3>Favorites</h3>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>{favorite.eventId}</li>
                ))}
            </ul>
            <button onClick={() => handleFavorite('new-event-id')}>Adicionar aos Favoritos</button>
        </div>
    )
}


export default FavoriteEvents;