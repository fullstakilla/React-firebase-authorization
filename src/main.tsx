import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { setupStore } from './store/store.ts';
import { Provider } from 'react-redux';
import './styles/main.scss'
import './firebase/firebase.ts'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
       <Provider store={store}>
            <App />
       </Provider>
    </BrowserRouter>
)
