import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './RecoverPass.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

const RecoverPass = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Um e-mail de recuperação foi enviado.');
      setError('');
    } catch (error) {
      setError('Erro ao enviar e-mail de recuperação: ' + error.message);
      setMessage('');
    }
  };

return (
    <div className={`container d-flex justify-content-center align-items-center ${styles.container}`}>
        <div className={`card p-4 ${styles.card}`}>
            <h2 className="card-title text-center">Recuperação de Senha</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        type="email" 
                        id="email" 
                        className={`form-control ${styles.formControl}`} 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className={`btn btn-primary btn-block mt-3 ${styles.btn1}`} style={{ width: '100%', border: '1px solid white' }}>
                    Enviar e-mail de recuperação
                </button>
            </form>
            {message && <p className={`mt-3 text-success ${styles.textSuccess}`}>{message}</p>}
            {error && <p className={`mt-3 text-danger ${styles.textDanger}`}>{error}</p>}
        </div>
        <NavLink to="../Login">
        <div className={styles.content6} aria-label="Voltar para a página de login">
          <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className={styles.iconevoltar} />
          VOLTAR
        </div>
      </NavLink>
    </div>
);
};

export default RecoverPass;
