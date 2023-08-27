import CreateSurvey from "../components/forms/createSurvey";
import SurveyGridItem from "../components/Home/surveyGridItem";
import SurveyResultsGridItem from "../components/Home/surveyResultsGridItem";
import { getCurrentSurvey, getPaginatedSurveyResults } from "../services/Survey.service";

export default function Surveys({ currentSurvey, paginatedSurveys, }) {
    return (
        <>
            <section className="section flex">
                <div><SurveyGridItem survey={currentSurvey} /></div>

                <div><CreateSurvey /></div>
            </section>

            <section className="section">
                <div>
                    {paginatedSurveys.map(s => <SurveyResultsGridItem key={s.id} survey={s} />)}
                </div>
            </section>
        </>


    )
}


export async function getServerSideProps(context) {
    const currentSurvey = getCurrentSurvey();
    const paginatedSurveys = getPaginatedSurveyResults(0, 16);

    console.log("Got server side props for surveys");

    return {
        props: {
            currentSurvey,
            paginatedSurveys,
        }, // will be passed to the page component as props
    }
}
