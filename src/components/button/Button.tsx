import styles from './Button.module.scss'

interface ButtonProps {
    title: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onClick}) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            type="submit"
        >
            {title}
        </button>
    )
}

export default Button