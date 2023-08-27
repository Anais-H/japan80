import styles from "../../styles/departureBoard/departureBoard.module.scss";
import DepartureBoardRow from "./DepartureBoardRow";

export default function DepartureBoard({ content, size, color }: { content: string[], size?: number, color?: string }) {    

    return (
        <div className={styles.departureBoard}>
            { content.map((str, index) => <DepartureBoardRow key={index} text={str.toUpperCase()} rowSize={size} color={color} />)}
        </div>
    );
}