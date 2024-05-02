import SignUp from "../../components/SignUp";
import registerBG from "../../assets/register-bg.png"
import styles from './RegisterPage.module.scss'

const RegisterPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <SignUp />
            <div className={styles.left}>
                <img src={registerBG} alt=""/>
            </div>
        </div>
    );
}

export default RegisterPage