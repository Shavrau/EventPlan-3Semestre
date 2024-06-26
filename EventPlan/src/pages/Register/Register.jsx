import React, { useState } from 'react';
import { userAuthentication } from '../../hooks/userAuthentication';
import styles from './Register.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { createUser, error: authError, loading } = userAuthentication();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const user = {
      email,
      password,
      displayName: fullName
    };

    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres');
      toast.error('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não conferem');
      toast.error('As senhas não conferem');
      return;
    }

    try {
      await createUser(user);
      toast.success('Usuário criado com sucesso!');
      navigate('/Home');
    } catch (err) {
      setError(err.message || 'Erro ao criar usuário');
      toast.error(err.message || 'Erro ao criar usuário');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.register}>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>
            <span>Nome Completo:</span>
            <input
              type="text"
              name="FullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Digite seu nome completo"
              className={styles.input}
              aria-label="Nome completo"
            />
          </label>
          <label className={styles.label}>
            <span>Email:</span>
            <input
              type="email"
              name="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className={styles.input}
              aria-label="Email"
            />
          </label>
          <label className={styles.label}>
            <span>Telefone:</span>
            <input
              type="tel"
              name="Phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Digite seu telefone"
              className={styles.input}
              aria-label="Telefone"
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
                placeholder="Digite sua senha"
                className={styles.input}
                aria-label="Senha"
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
          <label className={styles.label}>
            <span>Confirme sua senha:</span>
            <div className={styles.passwordInputContainer}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="ConfirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme sua senha"
                className={styles.input}
                aria-label="Confirmar senha"
              />
              {confirmPassword && (
                <button
                  type="button"
                  className={styles.passwordVisibilityToggle}
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label={showConfirmPassword ? 'Esconder senha de confirmação' : 'Mostrar senha de confirmação'}
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </button>
              )}
            </div>
          </label>
          <button className={styles.btn} disabled={loading} aria-label="Botão de registrar">
            {loading ? 'Carregando...' : 'REGISTRAR-SE'}
          </button>
          {error && <p>{error}</p>}
          {authError && <p>{authError}</p>}
          <p className={styles.terms}>
            Ao se cadastrar, você concorda com nossos <span style={{ color: '#306AFF' }}>Termos, Política de Privacidade e Política de Cookies.</span>
          </p>
        </form>
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

export default Register;
