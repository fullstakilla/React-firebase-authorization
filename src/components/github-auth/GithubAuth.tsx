import styles from './GithubAuth.module.scss'
import github from "../../assets/github-logo.svg"
import { getAuth, signInWithPopup } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth/cordova';
import { setUser } from '../../store/reducers/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';
import { githubProvider } from '../../firebase/firebase';

const GithubAuth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const githubAuth = () => {
        const auth = getAuth();
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
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
        <div className={styles.iconCircle} onClick={githubAuth}>
            <img src={github} alt="" />
        </div>
    )
}

export default GithubAuth;