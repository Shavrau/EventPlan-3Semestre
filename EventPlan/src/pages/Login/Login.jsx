import React from 'react'
import styles from './Login.module.css'
import { userAuthentication } from '../../hooks/userAuthentication'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, error: authError, loading } = userAuthentication()
  const navigate = useNavigate()

  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const user = { email, password }
    const res = await login(user)

    console.table(res)
    navigate('../Home')

  }
  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
      <div className={styles.login}>
        <form onSubmit={handlerSubmit}>
          <label>
            <span>Email:</span>
            <input
              type='email'
              name='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input
              type='password'
              name='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="fsenha"><p>Esqueceu a senha?</p></div>
          {!loading && <button className='btn'>Login</button>}
          {loading && <button className='btn' disabled>Carregando...</button>}
          {error && <p className='error'>{error}</p>}
        </form>
      </div>
  )
}

export default Login