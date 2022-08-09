import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [registrationUser, setRegistrationUser] = useState({
    email: '',
    password: '',
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setRegistrationUser({
      ...registrationUser,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(registrationUser);
  }

  return (
    <div className="login">
      <h3 className="login__title">Регистрация</h3>
      <form className="login__form" onSubmit={handleSubmit}>
        <div>
          <input
            id="name-input"
            type="email"
            name="email"
            required
            className="login__input"
            placeholder="Email"
            autoComplete="on"
            value={registrationDataUser.email}
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
            value={registrationUser.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="login__save">
            Зарегистрироваться
          </button>
          <p className="login__text">
            Уже зарегистрированы?{' '}
            {/* <Link to="/sign-in" className="login__link">
              Войти
            </Link> */}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
