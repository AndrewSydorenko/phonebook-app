import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ email: '', password: '' });
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: state.email,
        password: state.password,
      })
    );
    form.reset();
  };

  const handleChange = event => {
    setState(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          className={css.input}
          onChange={handleChange}
          value={state.email}
          type="email"
          name="email"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          onChange={handleChange}
          value={state.password}
          type="password"
          name="password"
        />
      </label>
      <button className={css.btn} type="submit">
        Log In
      </button>
    </form>
  );
};
