import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/reducers/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import ValidatedForm from "./validated-form/ValidatedForm";

const LogIn: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            dispatch(setUser({
                email: user?.email,
                token: user?.refreshToken,
                id: user?.uid
            }))
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <ValidatedForm 
        title="Log In"
        handleClick={handleLogin}
        type="Login"
        />
    );
}

export default LogIn