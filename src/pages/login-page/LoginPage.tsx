import LogIn from "../../components/LogIn";
import loginBG from "../../assets/login-bg.png"
import styles from './LoginPage.module.scss'

const LoginPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <img src={loginBG} alt=""/>
            </div>

            <LogIn />
        </div>
    );
}

export default LoginPage