import logo from "../../assets/logo.svg"
import styles from './ValidatedForm.module.scss'
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, Controller,} from "react-hook-form"
import Input from "../input/Input";
import Button from "../button/Button";
import GithubAuth from "../github-auth/GithubAuth";
import GoogleAuth from "../google-auth/GoogleAuth";


interface ValidatedFormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
    type: string;
}

type ValidatedFormValues = {
    email: string;
    pass: string;
}

const ValidatedForm: React.FC<ValidatedFormProps> = ({ title, handleClick, type }) => {
    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<ValidatedFormValues>()

    const onSubmit: SubmitHandler<ValidatedFormValues> = ({email, pass}) => {
        handleClick(email, pass)
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <header>
                <img src={logo} alt="" />
                <h2>Authentication</h2>
            </header>
            {type == "Login" ?
                <h6>Welcome to Authentication! 👋🏻</h6> :
                <h6>Adventure starts here 🚀</h6>
            }
            {type == "Login" ?
                <p>Please log-in to your account and start the adventure.</p> :
                <p>Make your authentication process easy!</p>
            }
            <Controller
                control={control}
                name="email"
                rules={{ required: true, maxLength: 30, pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ }}
                render={({ field: { onChange} }) => (
                    <Input
                    onChange={onChange}
                    placeholder="Email"
                    type="text"
                />
                )}
            />
            {errors?.email?.type === "required" && <span className={styles.error}>Required field</span>}
            {errors?.email?.type === "pattern" && <span className={styles.error}>Enter a valid email</span>}
            <Controller
                control={control}
                name="pass"
                rules={{ required: true, minLength: 6,  maxLength: 30 }}
                render={({ field: { onChange} }) => (
                    <Input
                    onChange={onChange}
                    placeholder="Password"
                    type="password"
                />
                )}
            />
            {errors?.pass?.type === "required" && <span className={styles.error}>Required field</span>}
            {errors?.pass?.type === "minLength" && <span className={styles.error}>Password must be at least 6 characters long</span>}
            <Button
                title={title}
            />
            {type == "Login" ?
                <span>New on our platform? <Link to='/register'>Create an account</Link></span> :
                <span>Already have an account? <Link to='/login'>Log in instead</Link></span>
            }
            <div className={styles.separator}>
                <span>or</span>
            </div>
            <div className={styles.icons}>
                <GithubAuth />
                <GoogleAuth />
            </div>
        </form>
    );
}

export default ValidatedForm