import styles from '../styles/Home.module.scss';
import ImageGridItem from '../components/Home/imageGridItem';
import SurveyGridItem from '../components/Home/surveyGridItem';
import SurveyResultsGridItem from '../components/Home/surveyResultsGridItem';
import FlashNewsCard from '../components/Home/flashNewsCard';
import UserTag from '../components/UserTag/userTag';
import { getHighlightArtist } from '../services/Artist.service';
import { getCurrentSurvey, getLastSurveyResult } from '../services/Survey.service';
import { User } from '../types/User.type';
import { getContributors } from '../services/User.service';
import { getAlbumHighlight, getAnimeHighlight, getEventsOfTheDay, getFlashNews } from '../services/App.service';
import { getAlbumsLastMonthRanking, getALbumsOverallRanking, getAnimesLastMonthRanking, getAnimesOverallRanking, getArtistsLastMonthRanking, getArtistsOverallRanking } from '../services/ranking.service';
import SlidingBanner from '../components/Home/slidingBanner';
import RankingsDepartureBoard from '../components/Home/RankingsDepartureBoard';
import Image from 'next/image';
import lightBgImg from '../public/assets/francesco-ungaro-csffh1umD-I-unsplash.jpg';
import darkBgImg from '../public/assets/takashi-miyazaki.jpg';
import { useTheme } from 'next-themes';

export default function Home({ theArtist, theAlbum, theAnime, theSurvey, theSurveyResults, flashNews, eventsOfTheDay, contributors, rankings }) {

  const { resolvedTheme, setTheme } = useTheme();
  // why not prefetch pages link from the grid board
  // router.prefetch(link) Link component prefetch by default... but not in dev mode ?
  
  return (
    <>
      <section className={styles.gridSection}>
        <Image src={resolvedTheme === 'light' ? lightBgImg : darkBgImg} layout='fill' placeholder='blur'/>

        <div className='sectionContainer'>
          <div className="fg-1">

            <div className="sectionTitle">
              <h4 className="fancyText">Highlights</h4>
            </div>

            <div className="sectionContent">
              <div className={styles.gridWrapper}>
                <div className={styles.g1 + " " + styles.highlightItem}>
                  <ImageGridItem link={"/artists/" + theArtist.slug}
                    imageSrc={"/assets/artists/" + theArtist.imgSrc} roundImage={true} imageAlt={theArtist.imgAlt}
                    legend1={theArtist.legend1} legend2={theArtist.legend2}
                    description={theArtist.description} />
                </div>

                <div className={styles.g2 + " " + styles.highlightItem}>
                  <ImageGridItem imageSrc={"/assets/artists/s_kiyotaka_omega_tribe/albums/" + theAlbum.imgSrc} roundImage={false} imageAlt={theAlbum.imgAlt}
                    legend1={theAlbum.legend1} legend2={theAlbum.legend2}
                    description={theAlbum.description} />
                </div>

                <div className={styles.g3 + " " + styles.surveyItem}>
                  <SurveyGridItem survey={theSurvey} />
                </div>

                <div className={styles.g4 + " " + styles.surveyItem}>
                  <SurveyResultsGridItem survey={theSurveyResults} />
                </div>

                <div className={styles.g5 + " " + styles.highlightItem}>
                  <ImageGridItem link={"/animes/" + theAnime.slug} imageSrc={"/assets/animes/city_hunter/" + theAnime.imgSrc} roundImage={false} imageAlt={theAnime.imgAlt}
                    legend1={theAnime.legend1} legend2={theAnime.legend2}
                    description={theAnime.description} />
                </div>

                <div className={styles.g6 + " " + styles.liveTVItem}>Live TV - Now airing</div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <SlidingBanner events={eventsOfTheDay} />


      <section className="section">
        <div className="sectionContainer">
          <div className="sectionTitle">
            <h4>Flash news</h4>
          </div>

          <div className="sectionContent">
            <div className="caroussel">

              {flashNews.map((fn, index) =>
                <FlashNewsCard
                  key={index}
                  topContent={fn.title}
                  mainContent={fn.content}
                  bottomContent={fn.date} />
              )}

            </div>
          </div>
        </div>
      </section>


      <section className={styles.rankingBoardContainer}>
        <div className="sectionContainer">
          <RankingsDepartureBoard rankings={rankings} />
        </div>
      </section>


      <section className="section">
        <div className="sectionContainer">
          <div className="sectionTitle">
            <h4>Many thanks to all our contributors !</h4>
          </div>

          <div className="sectionContent">
            <div className={styles.contributors}>
              {contributors.map((c: User, index) => <UserTag key={index} user={c} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export async function getServerSideProps(context) {

  const theArtist = getHighlightArtist();
  const theAlbum = getAlbumHighlight();
  const theAnime = getAnimeHighlight();
  const theSurvey = getCurrentSurvey();
  const theSurveyResults = getLastSurveyResult();
  const eventsOfTheDay = getEventsOfTheDay();
  const flashNews = getFlashNews();
  const contributors = getContributors();

  const artistOverallRanking = getArtistsOverallRanking();
  const artistsLastMonthRanking = getArtistsLastMonthRanking();
  const albumsOverallRanking = getALbumsOverallRanking();
  const albumsLastMonthRanking = getAlbumsLastMonthRanking();
  const animesOverallRanking = getAnimesOverallRanking();
  const animesLastMonthRanking = getAnimesLastMonthRanking();

  console.log("Got server side props for index");

  return {
    props: {
      theArtist,
      theAlbum,
      theAnime,
      theSurvey,
      theSurveyResults,
      flashNews,
      eventsOfTheDay,
      contributors,
      rankings: {
        overall: {
          artists: artistOverallRanking,
          albums: albumsOverallRanking,
          animes: animesOverallRanking,
        },
        lastMonth: {
          artists: artistsLastMonthRanking,
          albums: albumsLastMonthRanking,
          animes: animesLastMonthRanking,
        },
      },
    }, // will be passed to the page component as props
  }
}
