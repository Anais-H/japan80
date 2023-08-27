import Link from 'next/link';
import styles from '../../styles/tag.module.scss';
import { User } from '../../types/User.type';

type UserTagProps = {
    user: User
}

export default function UserTag({ user }: UserTagProps) {

    return (
        <Link className={styles.tag} href={'/user/' + user.username}>
            <img src={"./assets/users/" + user.profile_picture} alt="img" />
            <span className={styles.content}>{user.username}</span>
        </Link>
    )
}