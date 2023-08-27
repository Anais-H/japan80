"use client";
import { useTheme } from 'next-themes';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    return (
        <IconButton sx={{ ml: 1 }} onClick={e => resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')} color="inherit">
            {resolvedTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    )
}

export default ThemeSwitch;