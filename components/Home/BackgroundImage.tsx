"use client";
import Image from 'next/image';
import lightBgImg from '@/public/assets/francesco-ungaro-csffh1umD-I-unsplash.jpg';
import darkBgImg from '@/public/assets/takashi-miyazaki.jpg';
import { useTheme } from 'next-themes';

export default function BackgroundImage() {
    const { resolvedTheme, setTheme } = useTheme();

    return (<Image src={resolvedTheme === 'light' ? lightBgImg : darkBgImg} fill placeholder='blur' alt={'a background image representing a city early in the morning'}/>);
}