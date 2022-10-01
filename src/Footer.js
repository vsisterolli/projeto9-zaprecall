import styled from "styled-components"
import React from "react";

const imgByStatus = ["assets/wrong.svg", "assets/question-mark.svg", "assets/correct.svg"];

export default function Footer({remindQuestion}) {

    const [completadas, setCompletadas] = React.useState(0);

    let contador = 0;
    for(let element of remindQuestion) 
        contador += (element !== "notAnswered" && element !== "beingAnswered" ? 1 : 0)

    return (
    <CompletedQuestions>
        <h1 data-identifier="flashcard-counter">{contador}/{remindQuestion.length} CONCLUÍDOS</h1>
        <div className="container">
            {remindQuestion.map((value) => {
                if(value === "notAnswered" || value === "beingAnswered")
                    return "";
                else
                    return (<img src={imgByStatus[value]}/>);}
            )}
        </div>
    </CompletedQuestions>    )
}

const CompletedQuestions = styled.footer`

    background-color: white;
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    overflow-x: auto;

    position: absolute;
    bottom: 0px;


    h1 {
        color: #333333;
        font-family: 'Recursive';
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 8px;
    }

    img {
        margin-left: 8px;
    }
    

`