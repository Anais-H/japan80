import styles from '../../styles/surveyGridItem.module.scss';
import { Survey } from '../../types/Survey.type';
import { SurveyType } from '../../utils/constants';
import FormButton from '../buttons/formButton';
import LinkButton from '../buttons/linkButton';
import UserTagSm from '../UserTag/userTagSm';

type SurveyGridItemProps = {
    survey: Survey
}

export default function SurveyGridItem({ survey }: SurveyGridItemProps) {

    // mise en forme des options
    let surveyOptions = [];
    if (survey.type === SurveyType.SINGLE_CHOICE) {
        for (let i = 0; i < survey.options.length; i++) {
            surveyOptions.push(
                <label className={styles.surveyOption} key={i}>
                    <input type="radio" id={"s-" + i} name="surveyOptions" />
                    {survey.options[i].label}
                </label>
            );
        }

    }

    return (
        <div className={styles.surveyGridItem}>
            <h2 className={styles.title}>Survey of the month</h2>

            <div className={styles.content}>
                <form onSubmit={() => console.log("Survey submitted !")}>
                    <h3>{survey.question}</h3>
                    <div className={styles.suggestedBy}><span>Suggested&nbsp;by</span> <UserTagSm user={survey.created_by} /></div>

                    {surveyOptions}

                    <div className={styles.formComment}>4 days left !</div>

                    <div className={styles.formBottomContainer}>
                        <FormButton type='submit' text='Submit' />
                    </div>
                </form>
            </div>

            <div className='flex flex-col flex-start'>
                <LinkButton text='Comments (6)' link='/' />
                <LinkButton text='Vote for the next one' link='/surveys' />
                <LinkButton text='Suggest one' link='/surveys' />
            </div>
        </div>
    )
}