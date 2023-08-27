"use client";
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SurveyType } from '../../utils/constants';


export default function CreateSurvey() {

    const [surveyType, setSurveyType] = useState(SurveyType.SINGLE_CHOICE);

    const handleSurveyTypeChange = (event: SelectChangeEvent) => {
        //console.log('handle', event.target.value);
        setSurveyType(event.target.value);
    }

    const getSurveyForm = () => {
        if (surveyType === SurveyType.SINGLE_CHOICE) {
            return <div>single choice</div>
        } else if (surveyType === SurveyType.RANKING_CHOICE) {
            return <div>ranking choices</div>
        } else if (surveyType === SurveyType.MULTI_CHOICE) {
            return <div>multi choices</div>
        }
    }

    return (
        <div>
            <h4>Suggest a survey !</h4>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Type</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={surveyType}
                    label="Type"
                    onChange={handleSurveyTypeChange}
                >
                    <MenuItem value={SurveyType.SINGLE_CHOICE}>Single choice</MenuItem>
                    <MenuItem value={SurveyType.MULTI_CHOICE}>Multiple choices</MenuItem>
                    <MenuItem value={SurveyType.RANKING_CHOICE}>Ranked choices</MenuItem>
                </Select>

                {getSurveyForm()}
            </FormControl>
        </div>
    )
}