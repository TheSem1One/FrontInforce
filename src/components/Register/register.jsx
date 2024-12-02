import React from 'react';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchRegister } from '../../redux/slices/auth';


export const Register = () => {
    const distpatch = useDispatch();
    const { register, handleSubmit, setError, formState: { errors, isValid }, } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const onSubmit = async (values) => {
        const register = await distpatch(fetchRegister(values));
        
        window.localStorage.setItem('token', register.payload.acces_token);
        
    };
    return (
        <div className={styles.userActionsContainer}>

            <form className={styles.cartIndicator} onSubmit={handleSubmit(onSubmit)}>
                <input
                    className={styles.cartItem}
                    type='text'
                    name='fullName'
                    placeholder='Enter Name'
                    {...register('name', { required: 'Enter Name' })}
                />
                <input className={styles.cartItem}
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    {...register('email', { required: 'Enter Email  ' })}
                />
                <input className={styles.cartItem}
                    type='password'
                    name='password'
                    placeholder='Enter Password '
                    {...register('password', { required: 'Enter Password  ' })}
                    minLength={8} />


                <button type='submit' className={styles.cartTotal} >
                    Register
                </button>
            </form>
        </div>

    )
}