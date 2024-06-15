import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userAuthentication } from '../../hooks/userAuthentication';
import { useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login, googleSignIn, facebookSignIn, error: authError, loading } = userAuthentication();
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const user = { email, password };

    try {
      const res = await login(user);
      if (res) {
        toast.success('Login realizado com sucesso!');
        setTimeout(() => {
          navigate('../Home');
        }, 1000); 
      }
    } catch (err) {
      setError(err.message || 'Erro ao fazer login');
      toast.error(err.message || 'Erro ao fazer login');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await googleSignIn();
      if (user) {
        toast.success('Login com Google realizado com sucesso!');
        setTimeout(() => {
          navigate('../Home');
        }, 1000); 
      }
    } catch (err) {
      toast.error(err.message || 'Erro ao fazer login com Google');
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const user = await facebookSignIn();
      if (user) {
        toast.success('Login com Facebook realizado com sucesso!');
        setTimeout(() => {
          navigate('../Home');
        }, 1000); 
      }
    } catch (err) {
      toast.error(err.message || 'Erro ao fazer login com Facebook');
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
      toast.error(authError);
    }
  }, [authError]);

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <ToastContainer /> 
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
              placeholder='Digite seu email'
              aria-label='Campo de email'
            />
          </label>
          <label className={styles.label}>
            <span>Senha:</span>
            <div className={styles.passwordInputContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Digite sua senha'
                className={styles.input}
                aria-label='Campo de senha'
              />
              {password && (
                <button
                  type="button"
                  className={styles.passwordVisibilityToggle}
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              )}
            </div>
          </label>
          <NavLink to="../recoverpass">
            <p className={styles.terms}>
              <span style={{ color: '#306AFF' }}>Esqueceu a senha?</span>
            </p>
          </NavLink>
          {!loading && <button className={styles.btn} aria-label="Botão de login">LOGIN</button>}
          <div className={styles.socialLogin}>
            <button
              className={styles.btn}
              type="button"
              onClick={handleGoogleSignIn}
              aria-label='Entrar com Google'
            >
              <FontAwesomeIcon icon={['fab', 'google']} />
            </button>
            <button
              className={styles.btn}
              type="button"
              onClick={handleFacebookSignIn}
              aria-label='Entrar com Facebook'
            >
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </button>
          </div>
          {loading && <button className={styles.btn} disabled aria-label="Carregando">Carregando...</button>}
          {error && <p className='error'>{error}</p>}
          <div className={styles.socialLogin}>
            <p className={styles.ou}>
              <span style={{ color: '#000000' }}>OU</span>
            </p>
          </div>
          <NavLink to="../Register">
            <button className={styles.btn} aria-label="Registrar-se">REGISTRAR-SE</button>
          </NavLink>
        </form>
      </div>
      <NavLink to="../Home">
        <div className={styles.content6} aria-label="Voltar para a página inicial">
          <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className={styles.iconevoltar} />
          VOLTAR
        </div>
      </NavLink>
    </div>
  );  
};

export default Login;
