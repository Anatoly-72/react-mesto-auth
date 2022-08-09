import { useState } from 'react';

function Login({ onLogin }) {
  const [loginDataUser, setLoginDataUser] = useState({
    email: '',
    password: '',
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginDataUser((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({
      email: loginDataUser.email,
      password: loginDataUser.password,
    });
  }

  return (
    <div className="login">
      <h3 className="login__title">Вход</h3>
      <form className="login__form">
        <div>
        <input
          id="name-input"
          type="email"
          name="email"
          required
          className="login__input"
          placeholder="Email"
          autoComplete="on"
          value={loginDataUser.email || ''}
          onChange={handleChange}
        />
        <input
          id="description-input"
          type="password"
          name="code"
          required
          className="login__input"
          placeholder="Пароль"
          minLength="5"
          maxLength="50"
          value={loginDataUser.password || ''}
          onChange={handleChange}
        />
        </div>
        <div>
          <button type="submit" className="login__save">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
