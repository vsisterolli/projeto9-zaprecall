import AppScreen from './AppScreen';
import QuestionsBox from './QuestionsBox';
import Footer from './Footer';
import styled from 'styled-components';
import questionsObj from './questionsObj';
import React from 'react';

export default function Game({zapsMeta, remindQuestion, setRemindQuestion, deck, screen}) {

    const questions = questionsObj[deck].questions;
    const answers = questionsObj[deck].answers;

    return (
        <>
        <AppScreen actualScreen={1} screen={screen}>
            <header className="container">
                <img alt="logo zapcaller" src="assets/small logo.svg"/>
                <h1 className="screen1">ZapRecall</h1>
            </header>
            <QuestionsBox questions={questions} answers={answers} remindQuestion={remindQuestion} setRemindQuestion={setRemindQuestion}/>
            <FakeFooter/>
            <Footer zapsMeta={zapsMeta} remindQuestion={remindQuestion}/>
        </AppScreen>        
        </>
    )
}

const FakeFooter = styled.div`
    height: 125px;
`;