import { useState } from "react";
import styles from "../../styles/search/searchForm.module.scss";

export default function SearchForm() {
    const [displayedForm, setDisplayedForm] = useState(1);

    function getSearchForm() {
        if (displayedForm === 2) return <SearchAlbumsForm />;
        else return <SearchArtistsForm />; 
    }

    return (
        <div className={styles.container}>
            <div>Search by 
                <button className={styles.tabBtn} onClick={() => setDisplayedForm(1)}>Artists</button>
                or
                <button className={styles.tabBtn} onClick={() => setDisplayedForm(2)}>Singles, Albums and Compilations</button>
            </div>

            <div>
                { getSearchForm() }
            </div>
                    
        </div>
    )
}

function SearchArtistsForm() {
    const [artistName, setArtistName] = useState("");
    const [groupOnly, setGroupOnly] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Search artists form submitted with value " + artistName + " !");
    } 

    return (
        <div>
            <h4>Search artists form</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="artistType">Groups only</label>
                <input type="checkbox" name="artistType" id="artistType" checked={groupOnly}
                    onClick={() => {setGroupOnly(!groupOnly)}} />

                <label htmlFor="artistName">Name </label>
                <input type="text" id="artistName" name="artistName" value={artistName} 
                    onChange={(event) => setArtistName(event.target.value)} />

                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

function SearchAlbumsForm() {
    return (
        <div>Search albums form</div>
    )
}