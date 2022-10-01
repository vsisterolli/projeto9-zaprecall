import styled from "styled-components"
import Question from "./Question"
import questionsObj from './questionsObj';

const questions = questionsObj["React"].questions;
const answers = questionsObj["React"].answers;

export default function QuestionsBox({remindQuestion, setRemindQuestion}) {
    return(
        <QuestBoxs>
            {questions.map( (value, index) => <Question setRemindQuestion={setRemindQuestion} remindQuestion={remindQuestion} key={index} answer={answers[index]} question={value} index={index}/>)}
        </QuestBoxs>
    )
}
 


const QuestBoxs = styled.div`
    max-height: 70%;
    overflow-y: auto;
`