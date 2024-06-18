import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import styles from './DarkMode.module.css';

const DarkModeToggle = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div>
            <Button onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={faCircleHalfStroke} />
            </Button>
        </div>
    );
};

export default DarkModeToggle;