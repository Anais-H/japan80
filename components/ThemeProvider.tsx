"use client";
import { ThemeProvider as TP } from 'next-themes';

import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode}) {
    return (<TP>
        { children }
    </TP>);
}