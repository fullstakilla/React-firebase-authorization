import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import { useAppDispatch } from '../hooks/redux-hooks';
import { removeUser } from '../store/reducers/userSlice';
import { useEffect } from 'react';

const HomePage = () => {
    const navigate = useNavigate();
    const {isAuth, email} = useAuth()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    })

    return isAuth ?
    (
        <div>
            <h1>Welcome</h1>
            <button
                onClick={() => dispatch(removeUser())}
            >Log out from {email}</button>
        </div>
    ) :
    (
        null
    )
}

export default HomePage