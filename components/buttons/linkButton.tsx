import Link from "next/link";
import styles from '../../styles/button/linkButton.module.scss';

interface LinkButtonProps {
    text: string,
    link: string,
}

export default function LinkButton({ text, link }: LinkButtonProps) {

    return (
        <Link className={styles.link} href={link}>
            {text}
        </Link>
    )
}