import styles from '../../styles/button/formButton.module.scss';

interface FormButtonProps {
    type: string,
    text: string,
}

export default function FormButton({ type, text }: FormButtonProps) {

    return (
        <input className={styles.formBtn} type={type} value={text} />
    )
}