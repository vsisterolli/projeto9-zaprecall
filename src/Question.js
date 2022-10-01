import styled from "styled-components";
import React from "react"

const colorByStatus = ["#FF3030", "#FF922E", "#2FBE34"];
const imgByStatus = ["assets/wrong.svg", "assets/question-mark.svg", "assets/correct.svg"];

export default function Question({setRemindQuestion, remindQuestion, answer, question, index}) {

    const [questionPhase, setQuestionPhase] = React.useState(0);

    function iniciarPergunta(index) {
        
        if(remindQuestion.includes('beingAnswered') || remindQuestion[index] !== 'notAnswered')
            return;
        
        const aux = [...remindQuestion];
        aux[index] = 'beingAnswered';

        setRemindQuestion(aux);
        setQuestionPhase(1);

    }

    function defineQuestion(index, status) {
        const aux = [...remindQuestion];
        aux[index] = status;
        setRemindQuestion(aux);
        setQuestionPhase(0);
    }

    return (
        <div data-identifier="flashcard">
        <QuestionInitial status={remindQuestion[index]} questionPhase={questionPhase}>
            <h1>Pergunta {index+1}</h1>
            <img data-identifier="flashcard-show-btn" onClick={() => iniciarPergunta(index)} src={remindQuestion[index] === "notAnswered" ? "assets/Vector (5).svg" : imgByStatus[remindQuestion[index]]}/>
        </QuestionInitial>
        <QuestionContent data-identifier="flashcard-index-item" questionPhase={questionPhase}>
            <div data-identifier="flashcard-question" className="question">
                <h1>{question}</h1>
                <img data-identifier="flashcard-turn-btn" onClick={() => setQuestionPhase(2)} src="assets/turn.svg"/>
            </div>
            <div data-identifier="flashcard-answer" className="answer">
                <h1>{answer}</h1>
                <div className="container buttons">
                    <button data-identifier="forgot-btn" className="red" onClick={() => defineQuestion(index, 0)}>Não lembrei</button>
                    <button data-identifier="almost-forgot-btn" className="orange" onClick={() => defineQuestion(index, 1)}>Quase não lembrei</button>
                    <button data-identifier="zap-btn" className="green" onClick={() => defineQuestion(index, 2)}>Zap!</button>
                </div>
            </div>
        </QuestionContent>
        </div>
    )


}

const QuestionInitial = styled.div`

    display: ${props => props.questionPhase === 0 ? "flex" : "none"};
    align-items: center;

    width: 360px;
    height: 65px;
    padding: 8px;
    margin-bottom: 28px;
    
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    img {
        position: absolute;
        right: 8px;
    }

    h1 {

        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration: ${props => props.status !== "notAnswered" ? "line-through" : "none"};
        color: ${props => props.status === "notAnswered" ? "black" : colorByStatus[props.status]};
    }

`

const QuestionContent = styled.div`


    display: ${props => props.questionPhase > 0 ? "flex" : "none"};
    position: relative;
    width: 360px;
    height: 131px;
    margin-bottom: 28px;
    padding: 8px;

    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    h1 {
        font-family: 'Recursive';
        font-style: normal;
        word-wrap: break-word;
        overflow-y: auto;
        max-height: 100%;
        width: 90%;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }

    .answer h1 {
        width: 100%;
        max-height: 60%;
    }

    .buttons {
        
        width: 100%;

        position: absolute;
        bottom: 8px;
        left: 0;
        justify-content: space-around;
        
        button {
            width: 85.17px;
            height: 37.17px;
            font-family: 'Recursive';
            border: 0px;
            line-height: 14px;
            color: white;
            text-align: center;
            border-radius: 5px;  
        }

        .red {
            background: #FF3030;
        }

        .orange {
            background: #FF922E;
        }

        .green {
            background: #2FBE34;
        }

    }

    .question {
        display: ${props => props.questionPhase === 1 ? "initial" : "none"};
    }

    .answer {
        display: ${props => props.questionPhase === 2 ? "initial" : "none"};
    }

    img { 
        position: absolute;
        bottom: 10px;
        right: 15px;
    }

`