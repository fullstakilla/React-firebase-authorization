import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string;
    type: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({placeholder, type, value, onChange}) => {
    return (
        <input
            className={styles.input}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    )
}

export default Input