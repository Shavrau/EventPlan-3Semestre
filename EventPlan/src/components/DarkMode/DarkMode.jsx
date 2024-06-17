import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import styles from './DarkModeToggle.module.css'

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={darkMode ? styles['dark-mode']  : styles['light-mode']}>
            <Button onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={faCircleHalfStroke} />
            </Button>
        </div>
    )
}

export default DarkModeToggle;