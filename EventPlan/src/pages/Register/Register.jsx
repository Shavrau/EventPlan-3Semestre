import { userAuthentication } from '../../hooks/userAuthentication';
import React, { useState } from 'react';
import styles from './Register.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  

  const { createUser, error: authError, loading } = userAuthentication();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const user = {
      email,
      password,
      displayName
    };

    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não conferem');
      return;
    }

    try {
      await createUser(user);
      // Redirecionar para a página Home após o registro bem-sucedido
      navigate('/Home');
    } catch (err) {
      setError('Erro ao criar usuário');
    }
  };

  return (
    <div className={styles.container}>
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
              placeholder=""
              className={styles.input}
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
              placeholder=""
              className={styles.input}
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
              placeholder=""
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <span>Senha:</span>
            <input
              type="password"
              name="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <span>Confirme sua senha:</span>
            <input
              type="password"
              name="ConfirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder=""
              className={styles.input}
            />
          </label>
          <button className={styles.btn}>REGISTRAR-SE</button>
          {error && <p>{error}</p>}
          {authError && <p>{authError}</p>}
          <p className={styles.terms}>
            Ao se cadastrar, você concorda com nossos <span style={{ color: '#306AFF' }}>Termos, Política de Privacidade e Política de Cookies.</span>
          </p>
        </form>
      </div>
      <NavLink to="../Login">
      <div className={styles.content6}>
        <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" className={styles.iconevoltar} />
        VOLTAR
      </div>
      </NavLink>
    </div>
  );
};


export default Register;
