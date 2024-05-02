import { getAuth, signInWithPopup } from "firebase/auth";
import google from "../../assets/google-logo.svg"
import styles from './GoogleAuth.module.scss'
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { googleProvider } from "../../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { setUser } from "../../store/reducers/userSlice";

const GoogleAuth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const googleAuth = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            console.log(user);
            dispatch(setUser({
                email: user?.email,
                token: token,
                id: user?.uid
            }))
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className={styles.iconCircle} onClick={googleAuth}>
            <img src={google} alt="" />
        </div>
    )
}

export default GoogleAuth