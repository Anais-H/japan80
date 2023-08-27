import styles from "../styles/search/search.module.scss";
import Pagination from "@mui/material/Pagination";
import SearchForm from "../components/search/searchForm";
import { useEffect, useState } from "react";
import { getArtists } from "../services/Artist.service";
import Link from "next/link";

export default function Search({nbPages}) {
    const [fetchUrl, setFetchUrl] = useState("path/to/data");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setSearchResults(getArtists(10, 1));
    }, [fetchUrl]);

    function renderResults() {
        let res = [];
        searchResults.forEach(r => {
            res.push(<div className="tal-center">
                <Link href={"/artists/" + r.slug}><img className={"clickable " + "img-round"} src={"/assets/artists/" + r.imgSrc} alt={r.imgAlt} /></Link>
                <div>{r.artistNameRm}</div>
                <div>{r.artistNameJp}</div>
            </div>);
        });
        return res;
    }

    return (
        <section>
            <div className={styles.container}>
                <div>
                    <SearchForm />
                </div>

                <div className={styles.resultsContainer}>
                    {renderResults()}
                </div>

                
            </div>

            <div className={styles.paginationContainer}>
                    <Pagination count={nbPages} size="medium" />
                </div>
        </section>
    )
}

export async function getServerSideProps(context) {
    const nbPages = 10;
    return {
        props: {
            nbPages,
        }, // will be passed to the page component as props
    }
}