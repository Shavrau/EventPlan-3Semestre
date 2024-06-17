import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import styles from './Admin.module.css'

const Admin = () => {
    const [event, setEvent] = useState('');
    const [list, setList] = useState([]);

    const userCollectionRef = collection(db, 'Eventos');

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUsers();
    }, []);

    return (
        <div className={styles.main}>
            <ul>
                {list.map((item) => {
                    return (
                        <div key={item.id}>
                            <li>{item.nome}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Admin