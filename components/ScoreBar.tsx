import Tooltip from '@mui/material/Tooltip';
import styles from '../styles/scoreBar.module.scss';

interface ScoreBarProps {
    value: number,
    total: number,
}

export default function ScoreBar({ value, total }: ScoreBarProps) {

    const getScoreWidth = () => {
        return Math.round(value * 100 / total);
    }

    return (
        <div className={styles.container}>
            <Tooltip title={value + ' vote' + (value > 1 ? 's' : '')} placement='right'>
                <div style={{ width: getScoreWidth() + '%' }} className={styles.score}></div>
            </Tooltip>
        </div>
    )
}