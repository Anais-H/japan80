"use client";

import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return(<button><LogoutIcon  onClick={() => signOut()}/></button>);
}