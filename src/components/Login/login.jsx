import React from 'react';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, } from 'react-redux';
import { fetchAuth } from '../../redux/slices/auth';
export const Login = () => {
  const distpatch = useDispatch();
  const { register, handleSubmit, setError, formState: { errors, isValid }, } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = async (values) => {
    const user = await distpatch(fetchAuth(values));
    window.localStorage.setItem('token', user.payload.token);
  };
  return (
    <div className={styles.userActionsContainer}>
      <form className={styles.cartIndicator} onSubmit={handleSubmit()}>
        <input className={styles.cartItem}
          type='email'
          name='email'
          placeholder='Enter Email'
          {...register('email', { required: 'Enter Email ' })}
        />
        <input className={styles.cartItem}
          type='password'
          name='password'
          placeholder='Enter Password'
          minLength={8}
          {...register('password', { required: 'Enter Password ' })}
        />

        <button type='submit' className={styles.cartTotal} >
          Login
        </button>
      </form>
    </div>

  )
}