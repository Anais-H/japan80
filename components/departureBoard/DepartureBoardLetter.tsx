import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/departureBoard/departureBoardLetter.module.scss";

export default function DepartureBoardLetter({ LETTERS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?+-☆", letter, spinDelay, color = "white" } : { LETTERS?: string, letter: string, spinDelay: number, color?: string }) {
    const DROP_TIME = 100;
    const transitionDuration = DROP_TIME * 0.5 + 'ms';

    const index = useRef(-1);
    const interval = useRef(-1);
    const stopAt = useRef(LETTERS.indexOf(letter));
    const [topText, setTopText] = useState('');
    const [fallingText, setFallingText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [fallingStyle, setFallingStyle] = useState<React.CSSProperties>({});
    const [fallingTextStyle, setFallingTextStyle] = useState<React.CSSProperties>({ transitionDuration: transitionDuration, WebkitTransitionDuration: transitionDuration, MozTransitionDuration: transitionDuration, OTransitionDuration: transitionDuration});
    

    useEffect(() => {
        clearInterval(interval.current);
        interval.current = -1; 
        stopAt.current = LETTERS.indexOf(letter);
        setTimeout(() => spin(false), spinDelay);     
    }, [letter]);

    
    function spin(clear) {
        if (clear !== false) stopAt.current = null;
        interval.current = window.setInterval(function () { tick(); }, DROP_TIME * 1.1);
    };

    
    function tick() {
        let oldValue = index.current >= 0 ? LETTERS.charAt(index.current) : ' ';
        index.current = (index.current + 1) % LETTERS.length; 
        let newValue = index.current >= 0 ? LETTERS.charAt(index.current) : ' ';
    
        setFallingText(oldValue); 
        setFallingStyle({...fallingStyle, display: "block"}); 
        
        setTopText(newValue);
    
        window.setTimeout (function () {
            const newFallingTextTimingFunction = 'ease-in';
            const newFallingTextTransform = 'scaleY(0)';
            setFallingTextStyle({...fallingTextStyle, WebkitTransitionTimingFunction: newFallingTextTimingFunction, MozTransitionTimingFunction: newFallingTextTimingFunction, OTransitionTimingFunction: newFallingTextTimingFunction, transitionTimingFunction: newFallingTextTimingFunction,
                WebkitTransform: newFallingTextTransform, MozTransform: newFallingTextTransform, OTransform: newFallingTextTransform, transform: newFallingTextTransform})
        }, 1);
    
    
        window.setTimeout (function () {
            setFallingText(newValue);
            
            const transitionTimingFunction = 'ease-out';
            const transform = 'scaleY(1)';
            setFallingStyle({...fallingStyle, top: "-.03em", bottom: "auto", WebkitTransitionTimingFunction: transitionTimingFunction, MozTransitionTimingFunction: transitionTimingFunction, OTransitionTimingFunction: transitionTimingFunction, transitionTimingFunction: transitionTimingFunction});
            setFallingTextStyle({...fallingTextStyle, top: "-.65em", WebkitTransform: transform, MozTransform: transform, OTransform: transform, transform: transform});
        }, DROP_TIME / 2);
    
        
        window.setTimeout (function () {
            setBottomText(newValue);
            setFallingStyle({...fallingStyle, display: "none", top: "auto", bottom: 0});
            setFallingTextStyle({...fallingTextStyle, top: 0})	;
        }, DROP_TIME);
        
        //console.log("index.current === stopAt.current", index.current === stopAt.current ? "OUI" : "NON", index.current, stopAt.current)
        if (index.current === stopAt.current) {
            //console.log("bouh")
            clearInterval(interval.current);
            interval.current = -1;
        }
    };

    return (
        <span style={{color: color}} className={styles.letter}>
            <span className={styles.flap + ' ' + styles.top}>
                <span className={styles.text}>{ topText }</span>
            </span>

            <span className={styles.fold}>
                <span className={styles.flap + ' ' + styles.falling}>
                    <span className={styles.text}>{ fallingText }</span>
                </span>
            </span>

            <span className={styles.flap + ' ' + styles.bottom}>
                <span className={styles.text}>{ bottomText }</span>
            </span>
        </span>
    );
}