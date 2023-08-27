import { useRouter } from 'next/router';

export default function Anime() {
    const router = useRouter();
    const { anime } = router.query;

    return (
        <div>Présentation d'un animé : {anime}</div>
    )
}