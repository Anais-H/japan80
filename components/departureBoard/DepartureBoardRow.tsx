import DepartureBoardLetter from "./DepartureBoardLetter";

export default function DepartureBoardRow({ text, rowSize, color } : { text: string, rowSize?: number, color?: string }) {

    function renderDepartureBoardRow() {
        let res = [];
        let size = rowSize ? rowSize : text.length;

        for (let i = 0; i < text.length; i++) {
            const letter = text[i];
            res.push(<DepartureBoardLetter key={i} letter={letter} spinDelay={20 * i + Math.random () * 400} color={color} />);
        }

        for (let i = text.length; i < size; i++) {
            res.push(<DepartureBoardLetter key={i} letter={' '} spinDelay={20 * i + Math.random () * 400} color={color} />);
        }

        return res;
    }
    
    return (
        <div>{ renderDepartureBoardRow() }</div>
    );
}