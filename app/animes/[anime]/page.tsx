export default function Anime({ params }: { params: { anime: string }}) {

    return (
        <div>Présentation d'un animé : {params.anime}</div>
    )
}