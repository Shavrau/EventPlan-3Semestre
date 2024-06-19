import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import styles from '../../components/Avaliacao/Avaliacao.module.css';

const EventRating = ({ eventId }) => {
    const [ratings, setRatings] = useState([]);
    const [newRating, setNewRating] = useState(0);
    const [comment, setComment] = useState('');
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ratingsCollection = collection(db, `Eventos/${eventId}/ratings`);
                const snapshot = await getDocs(ratingsCollection);
                const fetchedRatings = snapshot.docs.map(doc => doc.data());
                setRatings(fetchedRatings);
                calculateAverageRating(fetchedRatings);
            } catch (error) {
                console.error('Erro ao buscar avaliações: ', error);
            }
        };

        fetchData();
    }, [eventId]);

    const handleRatingSubmit = async () => {
        if (newRating < 0 || newRating > 5) {
            alert("A nota deve estar entre 0 e 5.");
            return;
        }

        try {
            const ratingsCollection = collection(db, `Eventos/${eventId}/ratings`);
            await addDoc(ratingsCollection, {
                rating: newRating,
                comment,
                timestamp: Date.now(),
            });
            setNewRating(0);
            setComment('');
            const updateSnapshot = await getDocs(ratingsCollection);
            const updateRatings = updateSnapshot.docs.map(doc => doc.data());
            setRatings(updateRatings);
            calculateAverageRating(updateRatings);
        } catch (error) {
            console.error('Erro ao adicionar avaliação: ', error);
        }
    };

    const calculateAverageRating = (ratings) => {
        if (ratings.length === 0) {
            setAverageRating(0);
            return;
        }

        const totalRating = ratings.reduce((acc, rating) => {
            const validRating = typeof rating.rating === 'number' && !isNaN(rating.rating) ? rating.rating : 0;
            return acc + validRating;
        }, 0);

        const average = totalRating / ratings.length;
        setAverageRating(average);
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Nota: {averageRating.toFixed(1)}</h3>
            {ratings.map((rating, index) => (
                <div key={index} className={styles.rating}>
                    <p>{rating.rating} Estrelas</p>
                    <p>{rating.comment}</p>
                </div>
            ))}
            <input className={styles.avaliacao}
                type="number"
                value={newRating}
                onChange={(e) => setNewRating(Number(e.target.value))}
                max="5"
                min="0"
            />
            <textarea className={styles.textarea}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Deixe seu comentário."
            />
            <button onClick={handleRatingSubmit} className={styles.btn} aria-label="Enviar">ENVIAR</button>
        </div>
    );
};

export default EventRating;
