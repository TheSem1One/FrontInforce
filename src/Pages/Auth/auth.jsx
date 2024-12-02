import React, { useState } from 'react';
import styles from './index.module.scss';
import { Login } from '../../components/Login/login';
import { Register } from '../../components/Register/register';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from '../../redux/slices/auth';

export const Auth = () => {
    const [isLogin, setIsLogin] = useState({
        isLogin: false,
    });
    const token=window.localStorage.getItem('token');
    const isAuth = useSelector(fetchAuthMe());
    if(isAuth){
      return <Navigate to ='/profile'/>
    }
    return (
        <section className={styles.mainSection}>
            {/* Main content section */}

            <div className={styles.userActionsContainer}>
                <div className={styles.authActions}>
                    <p className={isLogin ? styles.loginLink : styles.registerLink} onClick={() => setIsLogin(false)} disabled={!isLogin}>Register</p>
                    <p className={!isLogin ? styles.loginLink : styles.registerLink} onClick={() => setIsLogin(true)} disabled={isLogin}>Login</p>
                </div>
            </div>
            {isLogin ? (<Login />) : (<Register />)}
        </section>
    );
}