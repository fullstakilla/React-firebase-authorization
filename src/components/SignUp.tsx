import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAppDispatch } from "../hooks/redux-hooks";
import { setUser } from "../store/reducers/userSlice";
import { useNavigate } from "react-router-dom";
import ValidatedForm from "./validated-form/ValidatedForm";

const SignUp: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignup = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
        title="Sign Up"
        handleClick={handleSignup}
        type="Signup"
        />
    );
}

export default SignUp