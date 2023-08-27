import { RankingDepartureBoardRowContent } from "../../types/DepartureBoard";
import DepartureBoardLetter from "./DepartureBoardLetter";

export default function RankingDepartureBoardRow({ content, rowSize, color = "white" } : { content: RankingDepartureBoardRowContent, rowSize?: number, color?: string }) {

    const rankSize = 3; //'-- ' max rank 99
    const likesSize = 6; //'----- ' max 99999 likes

    function renderDepartureBoardRow() {
        const {rank, likes, rankedItem} = content;
        let res = [];
        let size = rowSize ? rowSize : rank.length + likesSize; // si le contenu est plus grand que la taille spécifiée, la taille est etendue a celle du contenu

        let borneInf = 0;
        let borneSup = rank.length; // 2
        for (let i = borneInf; i < borneSup; i++) {
            const letter = rank[i];
            res.push(<DepartureBoardLetter key={i} LETTERS=" 0123456789" letter={letter} spinDelay={20 * i + Math.random () * 400} color={color} />);
        }
        borneInf = borneSup; // 2
        borneSup = rankSize + (likesSize - likes.length - 1); // 3 + (6 - 3) = 6
        for (let i = borneInf; i < borneSup; i++) {
            res.push(<DepartureBoardLetter key={i} letter={' '} spinDelay={20 * i + Math.random () * 400} color={color} />);
        }

        borneInf = borneSup;
        borneSup += likes.length;
        for (let i = borneInf; i < borneSup; i++) {
            const letter = likes[i-borneInf];
            res.push(<DepartureBoardLetter key={i} LETTERS=" 0123456789" letter={letter} spinDelay={20 * i + Math.random () * 400} color={color} />);
        }
        borneInf = borneSup;
        borneSup = rankSize + likesSize;
        for (let i = borneInf; i < borneSup; i++) {
            res.push(<DepartureBoardLetter key={i} letter={' '} spinDelay={20 * i + Math.random () * 400} color={color} />);
        }

        borneInf = borneSup;
        borneSup += rankedItem.length;
        for (let i = borneInf; i < borneSup; i++) {
            const letter = rankedItem[i - rankSize - likesSize];
            res.push(<DepartureBoardLetter key={i} letter={letter} spinDelay={20 * i + Math.random () * 400} color={color} />);
        }
        for (let i = borneSup; i < size; i++) {
            res.push(<DepartureBoardLetter key={i} letter={' '} spinDelay={20 * i + Math.random () * 400} color={color} />);
        }

        return res;
    }
    
    return (
        <div>{ renderDepartureBoardRow() }</div>
    );
}