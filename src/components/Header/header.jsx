import React from "react";
import styles from './index.module.scss';
import { Link ,useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate =useNavigate();
    return (
        <header className={styles.Header}>
            <div className={styles.headerContent}>
                <div 
                className={styles.Main}
                onClick={() =>navigate ('/')}
                >
                    Back To main 
                </div>
                <div >
                    <h2 
                    className={styles.Auth}
                    onClick={() =>navigate ('/auth')}
                    >Auth</h2>
                </div>
            </div>
        </header>

    )
}