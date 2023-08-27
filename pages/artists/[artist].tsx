import DOMPurify from "isomorphic-dompurify";
import BannerVideo from '../../components/bannerVideo';
import styles from '../../styles/artist.module.scss';
import MusicNote from '@mui/icons-material/MusicNote';
import { getArticleByArtist } from '../../services/Article.service';
import AlbumItem from "../../components/items/albumItem";
import { Paths } from "../../utils/constants";
import Image from "next/image";
import LikeButton from "../../components/buttons/likeButton";
import { getAge } from "../../utils/utils";


export default function Artist({ data }) {

    const bannerVideoOptions = {
        controls: true,
        sources: [{
            src: "../assets/artists/" + data.bannerVideoFile + ".mp4",
            type: 'video/mp4',
        },
        {
            scr: "../assets/artists/" + data.bannerVideoFile + ".webm",
            type: 'video/webm',
        }],
    }

    return (
        <>
            <section className={styles.bannerVideoSection}>
                <BannerVideo options={bannerVideoOptions} />
            </section>


            <section className="section">

                <div className={styles.artistNameRm}>
                    <span>{data.artistNameRm}</span>
                    <span><LikeButton like={data.isLiked} id={data.artistId} objType={'artist'} /></span>
                    <span className={styles.likesText}>{data.likes} like{data.likes > 1 ? 's' : ''}</span>
                </div>

                <div className={styles.content1}>
                    <div className={styles.content1Image}><Image src={Paths.ARTIST_FOLDER + data.artistAvatar} alt={data.artistNameRm} layout="fill" /></div>

                    <div className={styles.description1Container}>
                        <div className={styles.firstInformations}>
                            Born on {data.artistBirthday} {getAge(data.artistBirthday)} yo <br />
                            In {data.birthCity}, {data.birthPrefecture}
                        </div>

                        <div>
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.artistDescription1) }}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.artistNameJp}>{data.artistNameJp}</div>

                <div className={styles.content2}>

                    <div className={styles.description2Container}>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.artistDescription2) }}></div>
                    </div>

                    <div className={styles.image2Container}><Image className={styles.content2Image} src={Paths.ARTIST_FOLDER + data.artistLongImage} alt={data.artistNameRm} layout="fill" /></div>

                </div>

                {data.artistDescription3 ?
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.artistDescription3) }}></div>
                    </div>
                    : ""
                }
            </section>


            <section className="section">
                <div className='sectionContainer'>
                    <div className="sectionTitle">
                        <h4 className="neonText">Facts</h4>
                    </div>

                    <div>
                        {data.facts.map(fact =>
                            <div key={"fact-" + fact.id}>
                                <div>
                                    {fact.content}
                                </div>
                                <div><a href={fact.source} target="_blank">Source</a></div>
                            </div>
                        )}

                    </div>
                </div>
            </section>


            <section className='section'>
                <div className='sectionContainer'>
                    <div className='sectionTitle'>
                        <h4 className='neonText'><MusicNote /> Discographie - From 79 to 90</h4>
                    </div>

                    <div>Albums</div>
                    <div className='caroussel'>
                        {data.albums.map(a => <AlbumItem key={"alb-" + a.id} album={a} />)}

                    </div>

                    <div>Singles</div>
                    <div className='caroussel'>
                        {data.singles.map(s => <AlbumItem key={"sing-" + s.id} album={s} />)}
                    </div>
                </div>
            </section>


            <section className='section bg-section'>
                <div className='sectionContainer'>
                    <div className='sectionTitle'>
                        <h4 className='neonText'><MusicNote /> Playlist</h4>
                    </div>

                    <div className={styles.responsiveVideo}>
                        <iframe width={"50%"} height={"max-content"} src="https://www.youtube.com/embed/videoseries?list=PLFqnJsmyHfydKK7GetkC8_T-7VszNtDSf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>


            <section className="section">
                <div className='sectionContainer'>
                    <div className="sectionTitle">
                        <h4 className="neonText">Many thanks to all our contributors {"<3"}</h4>
                    </div>
                </div>
            </section>
        </>

    );
}

export async function getServerSideProps(context) {
    const { artist } = context.query;
    const data = await getArticleByArtist(artist);

    console.log("getServerSideProps Artist");
    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}
