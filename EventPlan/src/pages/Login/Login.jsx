import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userAuthentication } from '../../hooks/userAuthentication';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, googleSignIn, facebookSignIn, error: authError, loading } = userAuthentication();
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const user = { email, password };
    const res = await login(user);
    console.table(res);
    navigate('../Home');
  };

  const handleGoogleSignIn = async () => {
    const user = await googleSignIn();
    if (user) {
      navigate('../Home');
    }
  };

  const handleFacebookSignIn = async () => {
    const user = await facebookSignIn();
    if (user) {
      navigate('../Home');
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <form onSubmit={handlerSubmit}>
          <label className={styles.label}>
            <span>Email:</span>
            <input
              type='email'
              name='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <span>Senha:</span>
            <input
              type='password'
              name='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </label>
          <p className={styles.terms}>
            <span style={{ color: '#306AFF' }}>Esqueceu a senha?</span>
          </p>
          {!loading && <button className={styles.btn}>LOGIN</button>}
          <div className={styles.socialLogin}>
            <button className={styles.btn} type="button" onClick={handleGoogleSignIn}>
              <FontAwesomeIcon icon={['fab', 'google']} />
            </button>
            <button className={styles.btn} type="button" onClick={handleFacebookSignIn}>
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </button>
          </div>
          {loading && <button className={styles.btn} disabled>Carregando...</button>}
          {error && <p className='error'>{error}</p>}
          <div className={styles.socialLogin}>
            <p className={styles.ou}>
              <span style={{ color: '#000000' }}>OU</span>
            </p>
          </div>
          <NavLink to="../Register">
            <button className={styles.btn}>REGISTRAR-SE</button>
          </NavLink>
        </form>
      </div>
      <NavLink to="../Home">
        <div className={styles.content6}>
          <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className={styles.iconevoltar} />
          VOLTAR
        </div>
      </NavLink>
    </div>
  );
};

export default Login;
