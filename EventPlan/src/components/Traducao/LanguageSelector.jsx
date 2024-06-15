import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './LanguageSelector.module.css';

const LanguageSelector = () => {
    const [locale, setLocale] = useState('pt');

    const handleChangeLanguage = (e) => {
        setLocale(e.target.value);
    }

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <div className={styles.container}>
                <select onChange={handleChangeLanguage}>
                    <option value="pt">Português</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                </select>
                <p>
                    <FormattedMessage id="saudações" defaultMessage="Bem-vindo ao site EventPlan" />
                </p>
            </div>
        </IntlProvider>
    )
}

export default LanguageSelector;