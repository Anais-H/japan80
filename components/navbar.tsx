import { useSession, signIn, signOut } from "next-auth/react";
import styles from '../styles/navbar.module.scss';
import Home from '@mui/icons-material/Home';
import LiveTv from '@mui/icons-material/LiveTv';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Search from '@mui/icons-material/Search';
import PollIcon from '@mui/icons-material/Poll';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

export default function Navbar() {

    const { data: session } = useSession();

    return (
        <>
            <div className={styles.topNavbar}>
                {session ?
                    <>
                        <div>
                            <Link href={"/user/" + session.user.name}>
                                <AccountCircle />
                            </Link>
                        </div>

                        <div>
                            <Link href="/">
                                <LogoutIcon  onClick={() => signOut()}/>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <div>

                            <a onClick={() => signIn()}><span>Log in</span></a>

                        </div>

                        <div>
                            <Link href="/join">Join</Link>
                        </div>
                    </>}
            </div>

            <nav className={styles.navbar}>
                <ul>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <Tooltip title="Home" placement='right' TransitionComponent={Zoom}>
                                <Home />
                            </Tooltip>
                        </Link>
                    </li>

                    <li className={styles.navItem}>
                        <Link href="/search">
                            <Tooltip title="Search" placement='right' TransitionComponent={Zoom}>
                                <Search />
                            </Tooltip>
                        </Link>

                    </li>

                    <li className={styles.navItem}>
                        <Link href="/surveys">
                            <Tooltip title="Surveys" placement='right' TransitionComponent={Zoom}>
                                <PollIcon />
                            </Tooltip>
                        </Link>
                    </li>

                    <li className={styles.navItem + ' ' + styles.externalLink}>
                        <Link href="/liveTv">
                            <Tooltip title="Live TV" placement='right' TransitionComponent={Zoom}>
                                <LiveTv />
                            </Tooltip>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}