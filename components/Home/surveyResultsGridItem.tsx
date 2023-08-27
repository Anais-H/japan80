import styles from '../../styles/surveyGridItem.module.scss';
import { Survey } from '../../types/Survey.type';
import { SurveyType } from '../../utils/constants';
import { getTotalNumberOfVotes } from '../../utils/survey.utils';
import LinkButton from '../buttons/linkButton';
import ScoreBar from '../ScoreBar';
import UserTagSm from '../UserTag/userTagSm';

type SurveyResultsGridItemProps = {
    survey: Survey,
}

export default function SurveyResultsGridItem({ survey }: SurveyResultsGridItemProps) {

    // mise en forme des options
    let surveyOptionsResults: JSX.Element[] = [];
    const totalNumberOfVotes = getTotalNumberOfVotes(survey);
    if (survey.type === SurveyType.SINGLE_CHOICE) {
        for (let i = 0; i < survey.options.length; i++) {
            surveyOptionsResults.push(
                <li className="surveyOptionResult" key={i}>
                    <span>{survey.options[i].label}</span>
                    <ScoreBar value={survey.options[i].nb_votes} total={totalNumberOfVotes} />
                </li>
            );
        }
    }


    return (
        <div className={styles.surveyGridItem}>
            <h2 className={styles.title}>Last month's survey results</h2>

            <div className={styles.content}>
                <h3>{survey.question}</h3>
                <div className={styles.suggestedBy}><span>Suggested&nbsp;by</span> <UserTagSm user={survey.created_by} /></div>

                <ul className={styles.optionsList}>
                    {surveyOptionsResults}
                </ul>

                <div className={styles.formBottomContainer}>
                    <p>{totalNumberOfVotes} votes</p>
                </div>

            </div>

            <div>
                <LinkButton text='Browse surveys' link="/surveys" />
            </div>
        </div >
    );
}