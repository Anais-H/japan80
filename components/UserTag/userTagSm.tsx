import Link from 'next/link';
import styles from '../../styles/tag.module.scss';
import { User } from '../../types/User.type';
import { Paths } from '../../utils/constants';

type UserTagProps = {
    user: User
}

export default function UserTagSm({ user }: UserTagProps) {

    return (
        <Link className={styles.tag + ' ' + styles.sm} href={'/user/' + user.username}>
            <img src={Paths.USER_FOLDER + user.profile_picture} alt="img" />
            <span className={styles.content}>{user.username}</span>
        </Link>
    )
}