import AppScreen from './AppScreen';
import QuestionsBox from './QuestionsBox';
import Footer from './Footer';
import styled from 'styled-components';
import questionsObj from './questionsObj';
import React from 'react';

const questions = questionsObj["React"].questions;
const answers = questionsObj["React"].answers;

const aux = Array(questions.length);
aux.fill('notAnswered');


export default function Game({screen}) {

    const [remindQuestion, setRemindQuestion] = React.useState(aux);

    return (
        <>
        <AppScreen actualScreen={1} screen={screen}>
            <header className="container">
                <img alt="logo zapcaller" src="assets/small logo.svg"/>
                <h1 className="screen1">ZapRecall</h1>
            </header>
            <QuestionsBox remindQuestion={remindQuestion} setRemindQuestion={setRemindQuestion}/>
            <FakeFooter/>
            <Footer remindQuestion={remindQuestion}/>
        </AppScreen>        
        </>
    )
}

const FakeFooter = styled.div`
    height: 125px;
`;