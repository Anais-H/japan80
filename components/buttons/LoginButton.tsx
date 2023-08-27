"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
    // TODO: Change <a> to <button>
    return (<a onClick={() => signIn()}><span>Log in</span></a>);
}