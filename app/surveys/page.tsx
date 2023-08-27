import CreateSurvey from "../../components/forms/createSurvey";
import SurveyGridItem from "../../components/Home/surveyGridItem";
import SurveyResultsGridItem from "../../components/Home/surveyResultsGridItem";
import { getCurrentSurvey, getPaginatedSurveyResults } from "../../services/Survey.service";

function getSurveys() {
    const currentSurvey = getCurrentSurvey();
    const paginatedSurveys = getPaginatedSurveyResults(0, 16);

    return { currentSurvey, paginatedSurveys }
}
export default function Surveys() {
    const { currentSurvey, paginatedSurveys } = getSurveys();

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